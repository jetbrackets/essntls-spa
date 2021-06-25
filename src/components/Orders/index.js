import { useState } from 'react'
import { Table, Collapse, Progress } from 'reactstrap'

import * as S from './style'

import CustomerDetails from '../CustomerDetails'
import ServiceProviderDetails from '../ServiceProviderDetails/'
import DestinationDetails from '../DestinationDetails'
import WrapperdMap from '../Map'
import Label from '../Label/Label'
import TableItems from '../TableItems'

import { ORDERS } from '../../service/api'

import Image from '../../assets/images/customers-image.png'
import dateFormat from '../../helpers/DateFormat'
import { useFetch } from '../../hooks/useFetch'

const OrderDetails = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const mapContainerStyle = {
    height: '350px',
    maxWidth: '995px'
  }

  const [date] = dateFormat(order.created_at).split(' ')

  return (
    <>
      <tr
        onClick={toggle}
        style={{
          background: `${isOpen === true ? '#F8FAFB' : '#fff'}`,
          borderBottom: '1px solid #CFCFCF',
          borderTop: '1px solid #CFCFCF',
          cursor: 'pointer'
        }}
      >
        <S.Td className="align-middle">
          <Progress value={50} color="success" />
        </S.Td>
        <td className="align-middle text-center" style={{ color: '#969696' }}>
          #{order.id}
        </td>
        <td className="align-middle text-center">
          <div>
            {order.accepted_in !== null ? (
              <>
                <p style={{ margin: '0' }}>{order.accepted_in}</p>
                <small style={{ color: '#969696' }}>
                  {date.replaceAll('-', '/')}
                </small>
              </>
            ) : (
              <>
                <p style={{ margin: '0' }}>&#9867; &#9867;</p>
                <small style={{ color: '#969696' }}>&#9867; &#9867;</small>
              </>
            )}
          </div>
        </td>
        <td className="align-middle text-center">
          <div>
            {order.arrival_in !== null ? (
              <>
                <p style={{ margin: '0' }}>{order.arrival_in}</p>
                <small style={{ color: '#969696' }}>02/23/2021</small>
              </>
            ) : (
              <>
                <p style={{ margin: '0' }}>&#9867; &#9867;</p>
                <small style={{ color: '#969696' }}>&#9867; &#9867;</small>
              </>
            )}
          </div>
        </td>
        <td className="align-middle text-center">$ {order.amount}</td>
        <td className="col-md-2">
          <CustomerDetails
            Image={Image}
            numberOrders="10"
            name={order.customer.name}
          />
        </td>
        {order.driver ? (
          <td className="col-md-3">
            <ServiceProviderDetails
              name={order.driver.name}
              numberDeliveries={10}
              image={Image}
              inDashboard={false}
            />
          </td>
        ) : (
          <td>&#9867; &#9867;</td>
        )}

        <td style={{ width: '40px' }}>
          <svg width="18" height="11" fill="none">
            <path
              d="M2 2L9 9L16 2"
              stroke="#2A3642"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </td>
      </tr>
      <Collapse tag="tr" isOpen={isOpen} style={{ background: '#F8FAFB' }}>
        <td colSpan="8">
          <S.OrderContainer>
            <div>
              <div>
                <S.GetRealTimeButton>
                  <svg width="20" height="21" fill="none">
                    <path
                      d="M3 19.5C1.89543 19.5 1 18.6046 1 17.5C1 16.3954 1.89543 15.5 3 15.5C4.10457 15.5 5 16.3954 5 17.5C5 18.6046 4.10457 19.5 3 19.5Z"
                      fill="#269E97"
                    />
                    <path
                      d="M11 18.5C11 13.5294 6.97056 9.5 2 9.5V7.5C8.07513 7.5 13 12.4249 13 18.5H11Z"
                      fill="#269E97"
                    />
                    <path
                      d="M18 18.5C18 9.66344 10.8365 2.5 1.99997 2.5V0.5C11.9411 0.5 20 8.55887 20 18.5H18Z"
                      fill="#269E97"
                    />
                  </svg>
                  track in real time
                </S.GetRealTimeButton>
              </div>

              <S.Container>
                <div>
                  <S.MapContainer>
                    <WrapperdMap mapContainerStyle={mapContainerStyle} />
                  </S.MapContainer>
                </div>

                <S.Location>
                  <S.Wrapper>
                    <DestinationDetails address={order} />

                    <S.ItemsContainer>
                      <p>Items</p>
                      <div>
                        <TableItems customHeight="200px">
                          {order.items.map((item) => (
                            <tr key={item.id}>
                              <td>Ibuprofen 200mg</td>
                              <td>{item.qty}</td>
                              <td>{item.value}</td>
                              <td>{item.qty * item.value}</td>
                            </tr>
                          ))}
                        </TableItems>
                      </div>
                    </S.ItemsContainer>
                  </S.Wrapper>

                  <S.Wrapper>
                    <div>
                      <Label>Time History</Label>
                      <table className="table table-borderless">
                        <tbody>
                          <tr>
                            <td>Requested in:</td>
                            <td>{order.accepted_in}</td>
                          </tr>
                          <tr>
                            <td>Accepted in:</td>
                            <td>{order.accepted_in}</td>
                          </tr>
                          <tr>
                            <td>Arrival in:</td>
                            <td>{order.arrival_in}</td>
                          </tr>
                          <tr>
                            <td>Delivery time:</td>
                            <td>{order.delivery_time}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div>
                      <Label>Invoice Details ($)</Label>
                      <table className="table table-borderless">
                        <tbody>
                          <tr>
                            <td>Items:</td>
                            <td>16 p.m</td>
                          </tr>
                          <tr>
                            <td>Shipping:</td>
                            <td>{order.shipping}</td>
                          </tr>
                          <tr>
                            <td>Provider’s Commission:</td>
                            <td>{order.commission}</td>
                          </tr>
                          <tr>
                            <td>Essntl’s Profit:</td>
                            <td>{order.profit}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </S.Wrapper>
                </S.Location>
              </S.Container>
            </div>
          </S.OrderContainer>
        </td>
      </Collapse>
    </>
  )
}

const OrderComponent = () => {
  const { data } = useFetch(ORDERS)

  return (
    <>
      <Table borderless responsive>
        <thead>
          <S.TableRow>
            <th scope="col">Progress</th>
            <th scope="col" className="text-center">
              Order number
            </th>
            <th scope="col" className="text-center">
              Accepted in
            </th>
            <th scope="col" className="text-center">
              Arrival in
            </th>
            <th scope="col" className="text-center">
              Amount
            </th>
            <th scope="col">Customer</th>
            <th scope="col">Service Provider</th>
          </S.TableRow>
        </thead>
        <tbody>
          {data &&
            data.map((order) => <OrderDetails key={order.id} order={order} />)}
        </tbody>
      </Table>
    </>
  )
}

export default OrderComponent
