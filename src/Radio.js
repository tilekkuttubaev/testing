import React from 'react';
import {styled} from '@mui/material'



const Form = () => {
  const [gender, setGender] = React.useState('male');

  const handleChange = (event) => {
    setGender(event.target.value)
  }
  return (
    <form>
      <p></p>
      <div>
        <input
          type="radio"
          value="male"
          checked={gender === 'male'}
          onChange={handleChange}
        /> Бумажная
      </div>
      <div>
        <input
          type="radio"
          value="female"
          checked={gender === 'female'}
          onChange={handleChange}
        /> Аудиокнига
      </div>
      <div>
        <input
          type="radio"
          value="transgender"
          checked={gender === 'transgender'}
          onChange={handleChange}
        /> Электронная книга
      </div>
    </form>
  )
}
export default Form

// const FormaDiv = styled('form'){

// }