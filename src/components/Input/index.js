import * as S from './style'

const Input = ({ type, placeholder }) => {
  return (
    <S.Wrapper>
      <S.LocationInput type={type} placeholder={placeholder} />
    </S.Wrapper>
  )
}

export default Input
