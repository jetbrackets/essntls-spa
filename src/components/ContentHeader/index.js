import * as S from './style'

const ContentHeader = ({ children }) => {
  return (
    <S.Container>
      <S.Title>Dashboard</S.Title>
      {children}
    </S.Container>
  )
}

export default ContentHeader
