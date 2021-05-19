import * as S from './style'

import BrandImage from '../../assets/images/essntl.svg'

const Header = () => {
  return (
    <S.Header>
      <S.BrandContainer>
        <S.Brand>
          <img src={BrandImage} alt="" />
        </S.Brand>
      </S.BrandContainer>
    </S.Header>
  )
}

export default Header
