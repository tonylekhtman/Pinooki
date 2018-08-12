import StepZilla from 'react-stepzilla';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import React from 'react';
import ReactDOM from 'react-dom';
import StepExampleGroupShorthand from './somefile'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


const steps =
[
  {name: 'Step 1', component: <div>div!</div>},
  {name: 'Step 2', component: <div>div!</div>}
];
const options = [
  'one', 'two', 'three'
]

const defaultOption = options[0]


class Square extends React.Component {
render() {
  return (
    <div className='step-progress'>
        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
        <StepExampleGroupShorthand />
    </div>
  )
}
}



// ========================================

ReactDOM.render(
  <Square />,
  document.getElementById('root')
);
