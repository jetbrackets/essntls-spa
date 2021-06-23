import * as S from './style'

const DestinationDetails = ({ address }) => {
  return (
    <>
      <div>
        <S.CircleContainer>
          <span>
            <svg width="17" height="17" fill="none">
              <circle cx="8.5" cy="8.5" r="8" stroke="#33A753" />
              <circle cx="8.5" cy="8.5" r="4" fill="#33A753" stroke="#33A753" />
            </svg>
          </span>
          {address && address.departure_address ? (
            <p>{address.departure_address}</p>
          ) : (
            <p>&#9867; &#9867;</p>
          )}
        </S.CircleContainer>
        <S.CircleContainer>
          <span>
            <svg width="17" height="17" fill="none">
              <circle cx="8.5" cy="8.5" r="8" stroke="#F01E1E" />
              <circle cx="8.5" cy="8.5" r="4.5" fill="#F01E1E" />
            </svg>
          </span>

          {address && address.delivery_address ? (
            <p>{address.delivery_address}</p>
          ) : (
            <p>&#9867; &#9867;</p>
          )}
        </S.CircleContainer>
      </div>
    </>
  )
}

export default DestinationDetails
