import React from 'react';
import { shallow } from 'enzyme';

import { Connection } from './Connection';

describe('Given a Connection component', () => {
  describe('when it is rendered', () => {
    const component = <Connection />;
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(component);
    });

    it('should match the snapshot', () => {
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('should render with NOT the active class', () => {
      expect(wrapper).not.toHaveClassName('connection--is-active');
    });

    describe('and it receives isActive prop', () => {
      beforeEach(() => {
        wrapper.setProps({
          isActive: true,
        });
      });

      it('should render with the active class', () => {
        expect(wrapper).toHaveClassName('connection--is-active');
      });
    });
  });
});