import * as S from './style'

const CustomerDetails = ({ Image, name, numberOrders, isVisible }) => {
  return (
    <S.Wrapper>
      <div>
        <img src={Image} alt="" />
      </div>
      <S.Info isVisible={isVisible}>
        <p>{name}</p>
        <span>{numberOrders} Orders</span>
      </S.Info>
    </S.Wrapper>
  )
}

export default CustomerDetails
