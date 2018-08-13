import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import React from 'react';
import ReactDOM from 'react-dom';
import StepExampleEvenlyDivided from './stepper'
import DropdownExampleSelection from './drop'
import 'react-dropdown/style.css'

const DEFAULT_STEP = 'Ranking';

const options = [
  'one', 'two', 'three'
]


const defaultOption = options[0]


class Square extends React.Component {

  state = {step: DEFAULT_STEP, friend: undefined}

  onDropDownChange = (proxy, event) => {
    console.log('-----------');
    console.log(event);
    this.setState({
      step: DEFAULT_STEP,
      tzir: event.value
    });
  }

  changeStep = (step) => {
    this.setState({step})
  }

  render() {
    return (
      <div className='step-progress'>
          <DropdownExampleSelection onChange={this.onDropDownChange} value={this.state.tzir}/>
          <StepExampleEvenlyDivided step={this.state.step} onStepChange={this.changeStep} tzir={this.state.tzir}/>
      </div>
    )
  }
}



// ========================================

ReactDOM.render(
  <Square />,
  document.getElementById('root')
);
