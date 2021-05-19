import * as S from './style'

import ContentHeader from '../ContentHeader'
import Input from '../Input'

import Map from '../../assets/images/image2.png'
import CustomerImage from '../../assets/images/customers-image.png'
import { ReactComponent as StarEmpty } from '../../assets/icons/start-empty.svg'

const Content = ({ children }) => {
  return (
    <S.Container>
      <ContentHeader>
        <Input type="text" placeholder="Los Angeles, California - USA" />
      </ContentHeader>

      <S.ContainerMap>
        <S.Map>
          <img src={Map} alt="" />
        </S.Map>
        <S.ActiveCustomers>
          <h2>Active Now</h2>
          <div>
            {/* Container Customer */}
            <S.ContainerCustomers>
              <S.Image src={CustomerImage} alt="" />
              <S.DetailsCustomers>
                <S.Username>Douglas Santos</S.Username>
                <div>
                  <StarEmpty />
                  <StarEmpty />
                  <StarEmpty />
                  <StarEmpty />
                  <StarEmpty />
                  <S.DeliveriesCounting>1500 Deliveries</S.DeliveriesCounting>
                </div>
                <S.DeliveryStatus>
                  Status: <span>In Route</span>
                </S.DeliveryStatus>
              </S.DetailsCustomers>
            </S.ContainerCustomers>
            {/* Container Customer */}
            <S.ContainerCustomers>
              <S.Image src={CustomerImage} alt="" />
              <S.DetailsCustomers>
                <S.Username>Douglas Santos</S.Username>
                <div>
                  <StarEmpty />
                  <StarEmpty />
                  <StarEmpty />
                  <StarEmpty />
                  <StarEmpty />
                  <S.DeliveriesCounting>1500 Deliveries</S.DeliveriesCounting>
                </div>
                <S.DeliveryStatus>
                  Status: <span>In Route</span>
                </S.DeliveryStatus>
              </S.DetailsCustomers>
            </S.ContainerCustomers>
            {/* Container Customer */}
            <S.ContainerCustomers>
              <S.Image src={CustomerImage} alt="" />
              <S.DetailsCustomers>
                <S.Username>Douglas Santos</S.Username>
                <div>
                  <StarEmpty />
                  <StarEmpty />
                  <StarEmpty />
                  <StarEmpty />
                  <StarEmpty />
                  <S.DeliveriesCounting>1500 Deliveries</S.DeliveriesCounting>
                </div>
                <S.DeliveryStatus>
                  Status: <span>In Route</span>
                </S.DeliveryStatus>
              </S.DetailsCustomers>
            </S.ContainerCustomers>
            {/* Container Customer */}
            <S.ContainerCustomers>
              <S.Image src={CustomerImage} alt="" />
              <S.DetailsCustomers>
                <S.Username>Douglas Santos</S.Username>
                <div>
                  <StarEmpty />
                  <StarEmpty />
                  <StarEmpty />
                  <StarEmpty />
                  <StarEmpty />
                  <S.DeliveriesCounting>1500 Deliveries</S.DeliveriesCounting>
                </div>
                <S.DeliveryStatus>
                  Status: <span>In Route</span>
                </S.DeliveryStatus>
              </S.DetailsCustomers>
            </S.ContainerCustomers>
            {/* Container Customer */}
            <S.ContainerCustomers>
              <S.Image src={CustomerImage} alt="" />
              <S.DetailsCustomers>
                <S.Username>Douglas Santos</S.Username>
                <div>
                  <StarEmpty />
                  <StarEmpty />
                  <StarEmpty />
                  <StarEmpty />
                  <StarEmpty />
                  <S.DeliveriesCounting>1500 Deliveries</S.DeliveriesCounting>
                </div>
                <S.DeliveryStatus>
                  Status: <span>In Route</span>
                </S.DeliveryStatus>
              </S.DetailsCustomers>
            </S.ContainerCustomers>
            {/* Container Customer */}
          </div>
        </S.ActiveCustomers>
      </S.ContainerMap>
      {children}
    </S.Container>
  )
}

export default Content
