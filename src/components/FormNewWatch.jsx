import { useRef } from "react";

export default function FormNewWatch({ onSubmit }) {

  const cityInput = useRef();
  const timezoneInput = useRef();

  let sendForm = e => {
    e.preventDefault();
    onSubmit(cityInput.current.value, timezoneInput.current.value);
    clearForm();
  }

  let clearForm = () => {
    cityInput.current.value = '';
    timezoneInput.current.value = '';
  }

  return (
    <form className="form" onSubmit={sendForm}>
      <div className="form__input-container">
        <p>Название</p>
        <input type="text" required ref={cityInput} />
      </div>
      <div className="form__input-container">
        <p>Временная зона</p>
        <input type="number" min="-12" max="12" ref={timezoneInput} />
      </div>
      <button>Добавить</button>
    </form>
  )
}