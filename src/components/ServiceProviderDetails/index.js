import * as S from './style'

const ServiceProviderDetails = ({
  image,
  username,
  numberDeliveries,
  inDashboard
}) => {
  return (
    <S.Wrapper inDashboard={inDashboard}>
      <div>
        <img src={image} alt="" />
      </div>
      <S.Info>
        <p>{username}</p>
        <div>
          <svg width="10" height="9">
            <path
              d="M4.58333 0L5.99958 2.86917L9.16667 3.33208L6.875 5.56417L7.41583 8.7175L4.58333 7.22792L1.75083 8.7175L2.29167 5.56417L0 3.33208L3.16708 2.86917L4.58333 0Z"
              fill="#F8BA01"
            />
          </svg>
          <svg width="10" height="9">
            <path
              d="M4.58333 0L5.99958 2.86917L9.16667 3.33208L6.875 5.56417L7.41583 8.7175L4.58333 7.22792L1.75083 8.7175L2.29167 5.56417L0 3.33208L3.16708 2.86917L4.58333 0Z"
              fill="#F8BA01"
            />
          </svg>
          <svg width="10" height="9">
            <path
              d="M4.58333 0L5.99958 2.86917L9.16667 3.33208L6.875 5.56417L7.41583 8.7175L4.58333 7.22792L1.75083 8.7175L2.29167 5.56417L0 3.33208L3.16708 2.86917L4.58333 0Z"
              fill="#F8BA01"
            />
          </svg>
          <svg width="10" height="9">
            <path
              d="M4.58333 0L5.99958 2.86917L9.16667 3.33208L6.875 5.56417L7.41583 8.7175L4.58333 7.22792L1.75083 8.7175L2.29167 5.56417L0 3.33208L3.16708 2.86917L4.58333 0Z"
              fill="#F8BA01"
            />
          </svg>
          <svg width="10" height="9">
            <path
              d="M4.58333 0L5.99958 2.86917L9.16667 3.33208L6.875 5.56417L7.41583 8.7175L4.58333 7.22792L1.75083 8.7175L2.29167 5.56417L0 3.33208L3.16708 2.86917L4.58333 0Z"
              fill="#F8BA01"
            />
          </svg>
          <span>{numberDeliveries} Deliveries</span>
        </div>
        <S.Status inDashboard={inDashboard}>
          Status: <span>In Route</span>
        </S.Status>
      </S.Info>
    </S.Wrapper>
  )
}

export default ServiceProviderDetails
