import React from 'react';
import { shallow } from 'enzyme';

import Connection from '../Connection';
import { Step } from './Step';

describe('Given a Step component', () => {
  describe('when it is rendered', () => {
    const TITLE = 'titleFoo';
    const STEP = 1;
    const onClickMock = jest.fn();
    const requiredProps = {
      title: TITLE,
      step: STEP,
      onClick: onClickMock,
    };
    const component = <Step {...requiredProps} />;
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

    it('should render a Connection component', () => {
      expect(wrapper.find(Connection)).toBePresent();
    });

    describe('and it is the first step', () => {
      beforeEach(() => {
        wrapper.setProps({
          isFirst: true,
        });
      });

      it('should NOT render a Connection component', () => {
        expect(wrapper.find(Connection)).not.toBePresent();
      });
    });
  });
});