import React from 'react';
import {shallow} from 'enzyme';

import {Dot} from './Dot';

describe('Given a Dot component', () => {
  describe('when it is rendered', () => {
    const STEP = 1;
    const onClickMock = jest.fn();
    const requiredProps = {
      step: STEP,
      onClick: onClickMock,
    };
    const component = <Dot {...requiredProps} />;
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(component);
    });

    it('should match the snapshot', () => {
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('should render with NOT the active class', () => {
      expect(wrapper.find('svg')).not.toHaveClassName('dot__image--is-active');
    });

    describe('and the user clicks on it', () => {
      beforeEach(() => {
        wrapper.simulate('click', {preventDefault: jest.fn()});
      });

      it('should call onClick with the current step', () => {
        expect(onClickMock).toHaveBeenCalledWith(STEP);
      });
    });

    describe('and it receives isActive prop', () => {
      beforeEach(() => {
        wrapper.setProps({
          isActive: true,
        });
      });

      it('should render with the active class', () => {
        expect(wrapper.find('svg')).toHaveClassName('dot__image--is-active');
      });
    });
  });
});
