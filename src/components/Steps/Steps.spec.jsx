import React from 'react';
import { shallow } from 'enzyme';

import Step from '../Step';

import { Steps } from './Steps';

describe('Given a Steps component', () => {
  describe('when it is rendered', () => {
    const onClickMock = jest.fn();
    const requiredProps = {
      total: 2,
      current: 1,
      onClick: onClickMock,
    };
    const component = <Steps {...requiredProps} />;
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(component);
    });

    afterEach(() => {
      onClickMock.mockReset();
    });

    it('should match the snapshot', () => {
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('should render 2 Step component', () => {
      expect(wrapper.find(Step).length).toBe(2);
    });

    describe('and the first step', () => {
      let firstStep;

      beforeEach(() => {
        firstStep = wrapper.find(Step).at(0);
      });

      it('should have a title prop', () => {
        expect(firstStep).toHaveProp('title', 'Step 1');
      });

      it('should have a step prop', () => {
        expect(firstStep).toHaveProp('step', 1);
      });

      it('should have a isFirst prop to be true', () => {
        expect(firstStep).toHaveProp('isFirst', true);
      });

      it('should have a isActive prop to be true', () => {
        expect(firstStep).toHaveProp('isActive', true);
      });

      describe('and it is clicked', () => {
        beforeEach(() => {
          firstStep.simulate('click', 1);
        });

        it('should call onClick', () => {
          expect(onClickMock).toHaveBeenCalledWith(1);
        })
      })
    });

    describe('and the second step', () => {
      let secondStep;

      beforeEach(() => {
        secondStep = wrapper.find(Step).at(1);
      });

      it('should have a title prop', () => {
        expect(secondStep).toHaveProp('title', 'Step 2');
      });

      it('should have a step prop', () => {
        expect(secondStep).toHaveProp('step', 2);
      });

      it('should have a isFirst prop to be false', () => {
        expect(secondStep).toHaveProp('isFirst', false);
      });

      it('should have a isActive prop to be false', () => {
        expect(secondStep).toHaveProp('isActive', false);
      });

      describe('and it is clicked', () => {
        beforeEach(() => {
          secondStep.simulate('click', 2);
        });

        it('should call onClick', () => {
          expect(onClickMock).toHaveBeenCalledWith(2);
        })
      })
    })
  });
});