import { useState } from 'react'
import { Table, Collapse, Progress } from 'reactstrap'

import * as S from './style'

import ServiceProviderDetails from '../ServiceProviderDetails/'
import Label from '../Label/Label'
import TableItems from '../TableItems'

import { RESTOCK_ORDERS } from '../../service/api'
import { useFetch } from '../../hooks/useFetch'
import dateFormat from '../../helpers/DateFormat'

import Image from '../../assets/images/customers-image.png'
import { ReactComponent as PrintIcon } from '../../assets/icons/print.svg'
import { ReactComponent as Options } from '../../assets/icons/kebab.svg'

const OrderDetails = ({ restockOrder }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const [date] = dateFormat(restockOrder.created_at).split(' ')

  return (
    <>
      <tr
        onClick={toggle}
        style={{
          background: `${isOpen === true ? '#fff' : '#fff'}`,
          borderBottom: '1px solid #CFCFCF',
          borderTop: '1px solid #CFCFCF',
          cursor: 'pointer'
        }}
      >
        <S.Td className="align-middle">
          <Progress value={50} color="success" />
        </S.Td>
        <td className="align-middle">{restockOrder.status}</td>
        <td className="align-middle text-center">#{restockOrder.id}</td>
        <td className="align-middle text-center">
          <p>{date.replaceAll('-', '/')}</p>
        </td>
        <td className="align-middle text-center">
          <p>02/28/2021</p>
        </td>
        <td className="col-md-3 align-middle">
          <ServiceProviderDetails
            name={restockOrder.driver.name}
            numberDeliveries={10}
            image={Image}
            inDashboard={false}
          />
        </td>
        <td className="align-middle text-center">$30</td>
        <td className="col-md-2 align-middle">$ {restockOrder.amount}</td>
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
      <Collapse tag="tr" isOpen={isOpen} style={{ background: '#fff' }}>
        <td colSpan="9">
          <S.Wrapper>
            <div>
              <S.ButtonContainer>
                <S.PrintButton>
                  <PrintIcon />
                  Print service order
                </S.PrintButton>
                <S.OptionsButton>
                  <Options />
                </S.OptionsButton>
              </S.ButtonContainer>

              <div>
                <div>
                  <Label>Order Infos</Label>
                  <p>{restockOrder.shipping}</p>
                  <p>{restockOrder.amount}</p>
                </div>
                <div>
                  <Label>Service Provider</Label>
                  <p>{restockOrder.driver.name}</p>
                  <p>{restockOrder.driver.email}</p>
                  <p>{restockOrder.driver.phone}</p>
                </div>
                <div>
                  <Label>Shipping Address</Label>
                  <p>{restockOrder.shipping_address}</p>
                </div>
                <div>
                  <Label>Payment Method</Label>
                  <p>
                    Credit Card <br />
                    DOUGLAS SANTOS <br />
                    XXXX XXXX XXXX 9823
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p>Items</p>
              <TableItems customHeight="auto">
                {restockOrder.items.map((item) => (
                  <tr key={item.id}>
                    <td>Ibuprofen 200mg</td>
                    <td>{item.qty}</td>
                    <td>$ {item.value}</td>
                    <td>$ {item.qty * item.value}</td>
                  </tr>
                ))}
              </TableItems>
            </div>
          </S.Wrapper>
        </td>
      </Collapse>
    </>
  )
}

const RestockOrderComponent = () => {
  const { value } = useFetch(RESTOCK_ORDERS)

  return (
    <>
      <Table borderless responsive>
        <thead>
          <S.TableRow>
            <th scope="col">Progress</th>
            <th scope="col" className="text-center">
              Status
            </th>
            <th scope="col" className="text-center">
              Order Number
            </th>
            <th scope="col" className="text-center">
              Requested in
            </th>
            <th scope="col" className="text-center">
              Expected date
            </th>
            <th scope="col">Service Provider</th>
            <th scope="col">Itens</th>
            <th scope="col">Value</th>
          </S.TableRow>
        </thead>
        <tbody>
          {value &&
            value.map((restockOrder) => (
              <OrderDetails key={restockOrder.id} restockOrder={restockOrder} />
            ))}
        </tbody>
      </Table>
    </>
  )
}

export default RestockOrderComponent
