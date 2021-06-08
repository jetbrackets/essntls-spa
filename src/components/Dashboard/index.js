import * as S from './style'

import ServiceProviderDetails from '../ServiceProviderDetails'

import Image from '../../assets/images/customers-image.png'
import WrapperdMap from '../Map'

const DashbordComponent = () => {
  const mapContainerStyle = {
    height: '500px',
    maxWidth: '995px'
  }

  return (
    <>
      <S.Wrapper>
        <S.MapContainer>
          <WrapperdMap mapContainerStyle={mapContainerStyle} />
        </S.MapContainer>
        <S.ActiveContainer>
          <div>
            <h3>Active Now</h3>
            <div>
              <svg width="23" height="13">
                <path
                  d="M18.4999 9.74988L21.9999 6.24988L18.4999 2.74988"
                  stroke="#505050"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 6.25H12.375"
                  stroke="#505050"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1H12.375"
                  stroke="#505050"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 11.5H12.375"
                  stroke="#505050"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <S.ActiveList>
            <div>
              <ServiceProviderDetails
                name="Mark"
                numberDeliveries={10}
                image={Image}
                inDashboard={true}
              />
              <ServiceProviderDetails
                name="Mark"
                numberDeliveries={10}
                image={Image}
                inDashboard={true}
              />
              <ServiceProviderDetails
                name="Mark"
                numberDeliveries={10}
                image={Image}
                inDashboard={true}
              />
              <ServiceProviderDetails
                name="Mark"
                numberDeliveries={10}
                image={Image}
                inDashboard={true}
              />
            </div>
          </S.ActiveList>
        </S.ActiveContainer>
      </S.Wrapper>
    </>
  )
}

export default DashbordComponent
