import { useState } from 'react'
import { Table, Collapse, Progress } from 'reactstrap'

import * as S from './style'

import ServiceProviderDetails from '../ServiceProviderDetails/'

import Image from '../../assets/images/customers-image.png'
import { ReactComponent as PrintIcon } from '../../assets/icons/print.svg'
import { ReactComponent as Options } from '../../assets/icons/kebab.svg'
import { Label } from '../Label/style'
import TableItems from '../TableItems'

const OrderDetails = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <tr
        onClick={toggle}
        style={{
          background: `${isOpen === true ? '#fff' : '#fff'}`,
          borderBottom: '1px solid #CFCFCF',
          cursor: 'pointer'
        }}
      >
        <S.Td className="align-middle">
          <Progress value={50} color="success" />
        </S.Td>
        <td className="align-middle">Requested</td>
        <td className="align-middle text-center">#34834</td>
        <td className="align-middle text-center">
          <p>02/25/2021</p>
        </td>
        <td className="align-middle text-center">
          <p>02/28/2021</p>
        </td>
        <td className="col-md-3 align-middle">
          <ServiceProviderDetails
            name="Mark"
            numberDeliveries={10}
            image={Image}
            inDashboard={false}
          />
        </td>
        <td className="align-middle text-center">$30</td>
        <td className="col-md-2 align-middle">R$ 90</td>
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
                </div>
                <div>
                  <Label>Service Provider</Label>
                </div>
                <div>
                  <Label>Shipping Adrress</Label>
                </div>
                <div>
                  <Label>Payment Method</Label>
                </div>
              </div>
            </div>
            <div>
              <p>Items</p>
              <TableItems customHeight="auto">
                <tr>
                  <td>Ibuprofen 200mg</td>
                  <td>3</td>
                  <td>$ 10,00</td>
                  <td>$ 30,00</td>
                </tr>
                <tr>
                  <td>Ibuprofen 200mg</td>
                  <td>3</td>
                  <td>$ 10,00</td>
                  <td>$ 30,00</td>
                </tr>{' '}
                <tr>
                  <td>Ibuprofen 200mg</td>
                  <td>3</td>
                  <td>$ 10,00</td>
                  <td>$ 30,00</td>
                </tr>
                <tr>
                  <td>Ibuprofen 200mg</td>
                  <td>3</td>
                  <td>$ 10,00</td>
                  <td>$ 30,00</td>
                </tr>{' '}
                <tr>
                  <td>Ibuprofen 200mg</td>
                  <td>3</td>
                  <td>$ 10,00</td>
                  <td>$ 30,00</td>
                </tr>
                <tr>
                  <td>Ibuprofen 200mg</td>
                  <td>3</td>
                  <td>$ 10,00</td>
                  <td>$ 30,00</td>
                </tr>{' '}
                <tr>
                  <td>Ibuprofen 200mg</td>
                  <td>3</td>
                  <td>$ 10,00</td>
                  <td>$ 30,00</td>
                </tr>
                <tr>
                  <td>Ibuprofen 200mg</td>
                  <td>3</td>
                  <td>$ 10,00</td>
                  <td>$ 30,00</td>
                </tr>
              </TableItems>
            </div>
          </S.Wrapper>
        </td>
      </Collapse>
    </>
  )
}

const RestockOrderComponent = () => {
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
          <OrderDetails />
          <OrderDetails />
        </tbody>
      </Table>
    </>
  )
}

export default RestockOrderComponent
