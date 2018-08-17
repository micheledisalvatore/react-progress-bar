import React, {Component} from 'react';

import Steps from './components/Steps';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: 2,
      currentStep: 1,
    }
  }

  onStepClick = nextStep => {
    this.setState(({currentStep}) => {
      if (nextStep === currentStep + 1 || nextStep === currentStep - 1) {
        return {currentStep: nextStep};
      }
    })
  };

  get canIncrease() {
    return this.state.steps < 5
  }

  get canDecrease() {
    return this.state.steps > 2
  }

  changeTotalSteps = isIncreasing => () => {
    this.setState(({steps, currentStep}) => {
      let newSteps = steps;
      if (this.canIncrease && isIncreasing) {
        newSteps += 1;
      } else if (this.canDecrease && !isIncreasing) {
        newSteps -= 1;
      }
      let newCurrentStep = Math.min(currentStep, newSteps);

      return {
        steps: newSteps,
        currentStep: newCurrentStep,
      };
    })
  };

  render() {
    const {steps, currentStep} = this.state;
    return (
      <div className="app">
        <div>
          <h1>Change here the steps number</h1>
          <button name="decrease" onClick={this.changeTotalSteps(false)} className="app__change-step" disabled={!this.canDecrease}>-</button>
          <button name="increase" onClick={this.changeTotalSteps(true)} className="app__change-step" disabled={!this.canIncrease}>+</button>
        </div>
        <Steps total={steps} current={currentStep} onClick={this.onStepClick}/>
      </div>
    );
  }
}

export default App;
