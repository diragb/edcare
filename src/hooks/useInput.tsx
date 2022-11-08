// Imports:
import { useState } from 'react'


// Functions:
const useInput = (initialValue: string) => {
  const [ value, setValue ] = useState(initialValue)

  return {
    value,
    setValue,
    reset: () => setValue(''),
    bind: {
      value,
      onChange: (event: any) => {
        event.preventDefault()
        event.stopPropagation()
        setValue(event.currentTarget.value)
      },
    },
  }
}


// Exports:
export default useInput
