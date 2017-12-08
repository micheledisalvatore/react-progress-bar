import React from 'react';
import { shallow } from 'enzyme';

import Steps from './components/Steps';

import App from './App';

describe('Given an App component', () => {
  describe('when it is rendered', () => {
    const component = <App />;
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(component);
    });

    it('should match the snapshot', () => {
      expect(wrapper.getElement()).toMatchSnapshot();
    });

    it('should render a Steps component', () => {
      expect(wrapper.find(Steps)).toBePresent();
    });

    it('should render Steps with total prop set to 2', () => {
      expect(wrapper.find(Steps)).toHaveProp('total', 2);
    });

    it('should render Steps with current prop set to 1', () => {
      expect(wrapper.find(Steps)).toHaveProp('current', 1);
    });

    it('should render 2 buttons component', () => {
      expect(wrapper.find('button').length).toBe(2);
    });

    describe('and a user adds 1 more steps', () => {
      beforeEach(() => {
        wrapper.find('[name="increase"]').simulate('click');
      });

      it('should render Steps with total prop set to 3', () => {
        expect(wrapper.find(Steps)).toHaveProp('total', 3);
      });

      it('should render Steps with current prop set to 1', () => {
        expect(wrapper.find(Steps)).toHaveProp('current', 1);
      });

      describe('and the user adds 2 more steps', () => {
        beforeEach(() => {
          wrapper.find('[name="increase"]').simulate('click');
          wrapper.find('[name="increase"]').simulate('click');
        });

        it('should render Steps with total prop set to 5', () => {
          expect(wrapper.find(Steps)).toHaveProp('total', 5);
        });

        describe('and the user clicks on a next valid step', () => {
          beforeEach(() => {
            wrapper.find(Steps).simulate('click', 2);
          });

          it('should render Steps with current prop set to 2', () => {
            expect(wrapper.find(Steps)).toHaveProp('current', 2);
          });

          describe('and the user clicks on a next valid step', () => {
            beforeEach(() => {
              wrapper.find(Steps).simulate('click', 3);
            });

            it('should render Steps with current prop set to 3', () => {
              expect(wrapper.find(Steps)).toHaveProp('current', 3);
            });

            describe('and the user clicks to remove 3 steps', () => {
              beforeEach(() => {
                wrapper.find('[name="decrease"]').simulate('click');
                wrapper.find('[name="decrease"]').simulate('click');
                wrapper.find('[name="decrease"]').simulate('click');
              });

              it('should render Steps with total prop set to 2', () => {
                expect(wrapper.find(Steps)).toHaveProp('total', 2);
              });

              it('should render Steps with current prop set to 2', () => {
                expect(wrapper.find(Steps)).toHaveProp('current', 2);
              });
            })
          });
        });

        describe('and the user clicks on a next NOT valid step', () => {
          beforeEach(() => {
            wrapper.find(Steps).simulate('click', 3);
          });

          it('should render Steps with current prop NOT set to 3', () => {
            expect(wrapper.find(Steps)).not.toHaveProp('current', 3);
          });
        });

        describe('and the user adds 1 more step', () => {
          beforeEach(() => {
            wrapper.find('[name="increase"]').simulate('click');
          });

          it('should render Steps with total prop NOT set to 6', () => {
            expect(wrapper.find(Steps)).not.toHaveProp('total', 6);
          });
        });
      });
    })
  });
});