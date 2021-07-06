import * as S from './style'

const FormDeliveryOptions = ({ setSelect, options, setText }) => {
  const handleInput = ({ target }) => setSelect(target.value)
  const handleText = ({ target }) => {
    setText(target.value)
  }

  return (
    <S.Wrapper>
      <input type="text" onChange={handleText} />
      <S.FilterDeliveryOptions>
        <select onChange={handleInput}>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </S.FilterDeliveryOptions>
    </S.Wrapper>
  )
}

export default FormDeliveryOptions
