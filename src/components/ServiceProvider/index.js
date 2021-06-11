import { useState } from 'react'
import { Table, Collapse, Nav, TabContent, TabPane, Row, Col } from 'reactstrap'

import * as S from './style'

import Label from '../Label/Label'

import Image from '../../assets/images/customers-image.png'

import { ReactComponent as BlockButtonIcon } from '../../assets/icons/block.svg'
import { ReactComponent as ApproveButtonIcon } from '../../assets/icons/checkmark.svg'

import ServiceProviderDetails from '../ServiceProviderDetails/index'

const ServiceProviderInfo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('1')

  const toggle = () => setIsOpen(!isOpen)
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
          <ServiceProviderDetails image={Image} name="Douglas" />
        </td>
        <td className="align-middle">admin@admin.com</td>
        <td className="align-middle">+354 98788-9865</td>
        <td className="align-middle">
          <div>
            <p>02/23/2021</p>
          </div>
        </td>
        <td className="align-middle">1000</td>
        <td className="align-middle col-md-2">80</td>

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
        <td colSpan="7" style={{ borderBottom: '1px solid #969696' }}>
          <S.Container>
            <div>
              <S.ApproveButton>
                <ApproveButtonIcon />
                Approve
              </S.ApproveButton>
              <S.BlockButton>
                <BlockButtonIcon />
                Block
              </S.BlockButton>
            </div>
            <Nav tabs>
              <div>
                <S.Button
                  className={activeTab === '1' ? 'active' : ''}
                  onClick={() => tabs('1')}
                >
                  Profile
                </S.Button>
              </div>
              <div>
                <S.Button
                  className={activeTab === '2' ? 'active' : ''}
                  onClick={() => tabs('2')}
                >
                  Deliveries
                </S.Button>
              </div>
              <div>
                <S.Button
                  className={activeTab === '3' ? 'active' : ''}
                  onClick={() => tabs('3')}
                >
                  Orders
                </S.Button>
              </div>
              <div>
                <S.Button
                  className={activeTab === '4' ? 'active' : ''}
                  onClick={() => tabs('4')}
                >
                  Inventory Items
                </S.Button>
              </div>
              <div>
                <S.Button
                  className={activeTab === '5' ? 'active' : ''}
                  onClick={() => tabs('5')}
                >
                  Reviews
                </S.Button>
              </div>
            </Nav>
            <TabContent activeTab={activeTab} className="mt-4">
              <TabPane tabId="1" className="tabPane">
                <Row>
                  <Col className="col-sm-12">
                    <S.ServiceProviderProfile>
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
                    </S.ServiceProviderProfile>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2" className="tabPane">
                <Row>
                  <Col sm="6">Content here</Col>
                  <Col sm="6">Content here</Col>
                </Row>
              </TabPane>
              <TabPane tabId="5" className="tabPane">
                <Row>
                  <Col sm="4">
                    <p>Overview</p>
                  </Col>
                  <Col sm="8">
                    <p>Reviews</p>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </S.Container>
        </td>
      </Collapse>
    </>
  )
}

const ServiceProviderComponent = () => {
  return (
    <>
      <Table borderless responsive>
        <thead>
          <S.TableRow>
            <th scope="col">Service Provider</th>
            <th scope="col">e-mail</th>
            <th scope="col">Contact</th>
            <th scope="col">Registered in</th>
            <th scope="col">Deliveries</th>
            <th scope="col">Restock Orders</th>
          </S.TableRow>
        </thead>
        <tbody>
          <ServiceProviderInfo />
          <ServiceProviderInfo />
        </tbody>
      </Table>
    </>
  )
}

export default ServiceProviderComponent
