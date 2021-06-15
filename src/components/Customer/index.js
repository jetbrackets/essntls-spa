import { useEffect, useState } from 'react'
import { Table, Collapse, Nav, TabContent, TabPane, Row, Col } from 'reactstrap'

import * as S from './style'

import CustomerDetails from '../CustomerDetails'
import Label from '../Label/Label'

import { GET_CUSTOMERS } from '../../service/api'

import Image from '../../assets/images/customers-image.png'
import { ReactComponent as BlockButtonIcon } from '../../assets/icons/block.svg'

const CustomerInfo = ({ customer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const [activeTab, setActiveTab] = useState('1')

  const tabs = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  let customerAddress
  if (customer.address) {
    const { address } = customer.address
    customerAddress = address
  }

  console.log(customerAddress)

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
        <td className="align-middle">
          <CustomerDetails Image={Image} name={customer.name} />
        </td>
        <td className="align-middle">{customer.email}</td>
        <td className="align-middle">{customer.phone}</td>
        <td className="align-middle">
          <div>
            <p>02/23/2021</p>
          </div>
        </td>
        <td className="align-middle col-md-2">2</td>

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
        <td colSpan="6" style={{ borderBottom: '1px solid #969696' }}>
          <S.Container>
            <div>
              <S.BlockButton>
                <BlockButtonIcon />
                Block
              </S.BlockButton>
            </div>
            <Nav tabs>
              <div>
                <S.Button
                  className={activeTab === '1' ? 'active' : ''}
                  onClick={() => {
                    tabs('1')
                  }}
                >
                  Profile
                </S.Button>
              </div>
              <div>
                <S.Button
                  className={activeTab === '2' ? 'active' : ''}
                  onClick={() => {
                    tabs('2')
                  }}
                >
                  Deliveries
                </S.Button>
              </div>
            </Nav>
            <TabContent activeTab={activeTab} className="mt-4">
              <TabPane tabId="1" className="tabPane">
                <Row>
                  <Col className="col-sm-12">
                    <S.CustomerProfile>
                      <div>
                        <Label>Customer</Label>
                        <p>{customer.name}</p>
                        <p>{customer.email}</p>
                        <p>{customer.phone}</p>
                      </div>
                      <div>
                        <div>
                          <Label>Address</Label>
                          <p>{customerAddress}</p>
                        </div>
                        <div>
                          <Label>Payment Method</Label>
                          Credit Card <br />
                          DOUGLAS SANTOS <br />
                          XXXX XXXX XXXX 9823
                        </div>
                      </div>
                    </S.CustomerProfile>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2" className="tabPane">
                <Row>
                  <Col sm="6">Content here</Col>
                  <Col sm="6">Content here</Col>
                </Row>
              </TabPane>
            </TabContent>
          </S.Container>
        </td>
      </Collapse>
    </>
  )
}

const CustomerComponent = () => {
  const [customers, setCustomers] = useState(null)

  useEffect(() => {
    let clear = false
    const getRestockOrders = async () => {
      try {
        if (!clear) {
          const token = window.localStorage.getItem('token')

          const { url, options } = GET_CUSTOMERS(token)
          const response = await fetch(url, options)
          const json = await response.json()

          setCustomers(json)
        }
      } catch (error) {
        if (!clear) {
          throw error
        }
      }
    }
    getRestockOrders()
    return () => {
      clear = true
    }
  }, [])

  return (
    <>
      <Table borderless responsive>
        <thead>
          <S.TableRow>
            <th scope="col">Customer</th>
            <th scope="col">e-mail</th>
            <th scope="col">Contact</th>
            <th scope="col">Registered in</th>
            <th scope="col">Orders</th>
          </S.TableRow>
        </thead>
        <tbody>
          {customers &&
            customers.map((customer) => (
              <CustomerInfo key={customer.id} customer={customer} />
            ))}
        </tbody>
      </Table>
    </>
  )
}

export default CustomerComponent
