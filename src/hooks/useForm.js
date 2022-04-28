import { useState } from 'react';

const useForm = (init) => {
  const [ myForm, setMyForm ] = useState(init)
  const handleChange = (e) => {
    setMyForm({
      ...myForm,
      [e.target.name]: e.target.value
    })
  }

  return [myForm, handleChange]
}

export default useForm;
