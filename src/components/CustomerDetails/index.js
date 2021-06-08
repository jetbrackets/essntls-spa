import * as S from './style'

const CustomerDetails = ({ Image, username, numberOrders }) => {
  return (
    <S.Wrapper>
      <div>
        <img src={Image} alt="" />
      </div>
      <S.Info>
        <p>{username}</p>
        <span>{numberOrders} Orders</span>
      </S.Info>
    </S.Wrapper>
  )
}

export default CustomerDetails
