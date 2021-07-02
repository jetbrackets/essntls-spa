import * as S from './style'

const FormDeliveryOptions = ({ setSelect, options }) => {
  const handleInput = ({ target }) => setSelect(target.value)

  return (
    <S.Wrapper>
      <input type="text" />
      <S.FilterDeliveryOptions>
        <select onChange={handleInput}>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
          {/* <option>pending</option>
          <option>accepted</option>
          <option>canceled</option>
          <option>done</option> */}
        </select>
      </S.FilterDeliveryOptions>
    </S.Wrapper>
  )
}

export default FormDeliveryOptions
