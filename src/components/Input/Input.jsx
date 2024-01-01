import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'tomato', label: 'Tomato' },
  { value: 'Banana', label: 'Banana' }
]

const Input = () => (
  <Select 
  options={options} 
  isMulti
  styles={{
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? 'grey' : 'red',
    }),
  }}/>
)

export default Input