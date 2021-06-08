import * as S from './style'

const DestinationDetails = () => {
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
          <p>Little Tokyo, Los Angeles, CA 90012, USA</p>
        </S.CircleContainer>
        <S.CircleContainer>
          <span>
            <svg width="17" height="17" fill="none">
              <circle cx="8.5" cy="8.5" r="8" stroke="#F01E1E" />
              <circle cx="8.5" cy="8.5" r="4.5" fill="#F01E1E" />
            </svg>
          </span>

          <p>Westlake, Los Angeles, CA 90057, USA</p>
        </S.CircleContainer>
      </div>
    </>
  )
}

export default DestinationDetails
