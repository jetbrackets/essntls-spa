import { useState } from 'react'
import { Table, Collapse, Nav, TabContent, TabPane, Row, Col } from 'reactstrap'

import * as S from './style'

import CustomerDetails from '../CustomerDetails'
import Label from '../Label/Label'

import Image from '../../assets/images/customers-image.png'
import { ReactComponent as BlockButtonIcon } from '../../assets/icons/block.svg'

const CustomerInfo = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const [activeTab, setActiveTab] = useState('1')

  const tabs = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

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
          <CustomerDetails Image={Image} name="Mark Avillar" />
        </td>
        <td className="align-middle">marckavillar@gmail.com</td>
        <td className="align-middle">+354 98788-9865</td>
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
              {/* <S.Width> */}
              <TabPane tabId="1" className="tabPane">
                <Row>
                  <Col className="col-sm-12">
                    <S.CustomerProfile>
                      <div>
                        <Label>Service Provider</Label>
                        <p>Douglas dos Santos</p>
                        <p>douglassantos@gmail.com</p>
                        <p>+354 98788-9865</p>
                      </div>
                      <div>
                        <div>
                          <Label>Shipping Address</Label>
                          <p>
                            1924 De la Vina St Santa Barbara <br /> California
                            US - PC: 93105
                          </p>
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
              {/* </S.Width> */}
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
          <CustomerInfo />
          <CustomerInfo />
        </tbody>
      </Table>
    </>
  )
}

export default CustomerComponent
