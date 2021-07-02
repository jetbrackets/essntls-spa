import { useMemo, useState } from 'react'
import { Nav, TabContent, TabPane, Row, Col } from 'reactstrap'

import DataTable from 'react-data-table-component'

import * as S from './style'

import dateFormat from '../../helpers/DateFormat'

import Label from '../Label/Label'
import ServiceProviderDetails from '../ServiceProviderDetails'

import Image from '../../assets/images/customers-image.png'
import { ReactComponent as BlockButtonIcon } from '../../assets/icons/block.svg'
import { ReactComponent as ApproveButtonIcon } from '../../assets/icons/checkmark.svg'

const ServiceProviderInfo = (props) => {
  const [activeTab, setActiveTab] = useState('1')

  const { data, handleBlock, handleApprove, loading } = props

  const tabs = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  let driverAddress
  if (data.address) {
    const { address } = data.address
    driverAddress = address
  }

  let paymentMethod = []
  if (data.payment_method) {
    const { name, type, number } = data.payment_method
    paymentMethod.push(name, type, number)
  }

  return (
    <>
      <S.Container>
        {data.status === 'pendding' ? (
          <S.ContainerButtons>
            {loading ? (
              <>
                <S.ApproveButton
                  disabled
                  onClick={() => handleApprove(data.id)}
                >
                  <ApproveButtonIcon />
                  ...Approve
                </S.ApproveButton>
                <S.BlockButton disabled onClick={() => handleBlock(data.id)}>
                  <BlockButtonIcon />
                  ...Block
                </S.BlockButton>
              </>
            ) : (
              <>
                <S.ApproveButton onClick={() => handleApprove(data.id)}>
                  <ApproveButtonIcon />
                  Approve
                </S.ApproveButton>
                <S.BlockButton onClick={() => handleBlock(data.id)}>
                  <BlockButtonIcon />
                  Block
                </S.BlockButton>
              </>
            )}
          </S.ContainerButtons>
        ) : (
          <></>
        )}
        {data.status === 'blocked' ? (
          <div>
            {loading ? (
              <S.ApproveButton disabled onClick={() => handleApprove(data.id)}>
                ...loading
              </S.ApproveButton>
            ) : (
              <S.ApproveButton onClick={() => handleApprove(data.id)}>
                <ApproveButtonIcon />
                Approve
              </S.ApproveButton>
            )}
          </div>
        ) : (
          <></>
        )}
        {data.status === 'approved' ? (
          <div>
            {loading ? (
              <S.BlockButton disabled onClick={() => handleBlock(data.id)}>
                ...loading
              </S.BlockButton>
            ) : (
              <S.BlockButton onClick={() => handleBlock(data.id)}>
                <BlockButtonIcon />
                Block
              </S.BlockButton>
            )}
          </div>
        ) : (
          <></>
        )}
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
                    <div>
                      <Label>Service Provider</Label>
                      <p>{data.name}</p>
                      <p>{data.email}</p>
                      <p>{data.phone}</p>
                    </div>
                    <div>
                      <Label>Wallet</Label>
                    </div>
                  </div>

                  <div>
                    <div>
                      <Label>Shipping Address</Label>

                      <p>{driverAddress}</p>
                    </div>

                    <div>
                      <Label>Payment Method</Label>
                      {paymentMethod &&
                        paymentMethod.map((payment, index) => (
                          <>
                            <p key={payment}>{payment}</p>
                          </>
                        ))}
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
    </>
  )
}

const ServiceProviderComponent = ({
  value,
  loading,
  select,
  handleApprove,
  handleBlock
}) => {
  const dataFilter = value
    ? value.filter((value) =>
        value.status.includes(
          `${select === 'all'.toLocaleLowerCase() ? '' : select}`
        )
      )
    : value

  const columns = useMemo(
    () => [
      {
        name: 'Service Provider',
        cell: (row) => <ServiceProviderDetails image={Image} name={row.name} />,
        minWidth: '230px',
        wrap: false
      },
      {
        name: 'email',
        selector: (row) => row['email'],
        center: true
      },
      {
        name: 'Contact',
        cell: (row) => row['phone']
      },
      {
        name: 'Requested in',
        cell: (row) => {
          const [date] = dateFormat(row.created_at).split(' ')
          return date
        }
      },
      {
        name: 'Deliveries',
        cell: (row) => <p>100</p>
      },
      {
        name: 'Restock Orders',
        cell: (row) => <p>10</p>
      }
    ],
    []
  )

  return (
    <>
      {value && (
        <DataTable
          data={dataFilter}
          progressPending={loading}
          expandableRows
          columns={columns}
          expandOnRowClicked
          expandableRowsComponent={ServiceProviderInfo}
          expandableRowsComponentProps={{ handleBlock, handleApprove, loading }}
          pagination
          paginationRowsPerPageOptions={[5, 10, 15, 20]}
          highlightOnHover
        />
      )}
    </>
  )
}

export default ServiceProviderComponent
