import * as S from './style'

const ContentHeader = ({ children, title }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {children}
    </S.Container>
  )
}

export default ContentHeader
