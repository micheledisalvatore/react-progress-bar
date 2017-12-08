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

  changeTotalSteps = isIncreasing => () => {
    this.setState(({steps, currentStep}) => {
      let newSteps = steps;
      if (steps !== 5 && isIncreasing) {
        newSteps += 1;
      } else if (steps !== 2 && !isIncreasing) {
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
      <div className="App">
        <div>
          <h1>Change here the steps number</h1>
          <button name="decrease" onClick={this.changeTotalSteps(false)}>-</button>
          <button name="increase" onClick={this.changeTotalSteps(true)}>+</button>
        </div>
        <Steps total={steps} current={currentStep} onClick={this.onStepClick}/>
      </div>
    );
  }
}

export default App;
