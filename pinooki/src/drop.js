import React from 'react'
import { Dropdown } from 'semantic-ui-react'

// import { friendOptions } from '../common'
let friendOptions = [
  {
    text: 'Research',
    value: 'Research'
  },
  {
    text: 'Development',
    value: 'Development'
  }
  
]

const DropdownExampleSelection = props => {
  console.log(props);
  return(
    <Dropdown onChange={props.onChange} placeholder='Select Friend' fluid selection options={friendOptions} value={props.value}/>
  )
}

export default DropdownExampleSelection