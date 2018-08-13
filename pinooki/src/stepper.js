import React from 'react'
import { Step } from 'semantic-ui-react'

class StepExampleEvenlyDivided extends React.Component {
  
  handleClick = (proxy, e) => {
    // alert(e.title);
    this.props.onStepChange(e.title);
  }

  createSteps = () => {
    let {step} = this.props;
    let {tzir} = this.props;
    let first,second,third;
    console.log(tzir)
    if (tzir === 'Development'){
      first = 'Python';
      second = 'C#';
      third = 'React';
    }else{
      first = 'Ranking';
      second = 'ML';
      third = 'NLP';
    }
    return [
      {active: step === 'Shipping' , title: first, key: 'Shipping', onClick: this.handleClick},
      {active: step === 'Dropping', title: second, key: 'Dropping', onClick: this.handleClick},
      {active: step === 'Finished', title: third, key: 'Finished', onClick: this.handleClick}
    ];
  }

  render(){
    let {step} = this.props;
    let exName1 = step+' Ex. 1';
    let exName2 = step+' Ex. 2';
    // if (step === 'Shipping'){
    //   exName = 'Shipping'+ 'Ex.'
    // }else{
    //   exName = 'Dropping Ex.'
    // }
    return   (
      <div>
      <Step.Group widths={6} items={this.createSteps()}>
        
      </Step.Group>
      <h1>{exName1}</h1>
      <h1>{exName2}</h1>
      </div>
    );   
  }

}

export default StepExampleEvenlyDivided