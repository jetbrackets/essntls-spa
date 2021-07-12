import { useMemo, useState } from 'react'
import { Nav, TabContent, TabPane, Row, Col, Table } from 'reactstrap'

import DataTable from 'react-data-table-component'

import * as S from './style'

import dateFormat from '../../helpers/DateFormat'
import RenderStars from '../../helpers/RenderStars'

import Label from '../Label/Label'
import ServiceProviderDetails from '../ServiceProviderDetails'

import Image from '../../assets/images/customers-image.png'
import { ReactComponent as BlockButtonIcon } from '../../assets/icons/block.svg'
import { ReactComponent as ApproveButtonIcon } from '../../assets/icons/checkmark.svg'
import Filter from '../../helpers/Filter'

const ServiceProviderInfo = (props) => {
  const [activeTab, setActiveTab] = useState('1')

  const { data, handleBlock, handleApprove, loading } = props

  const tabs = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
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

                      <p>{data.address.address}</p>
                    </div>

                    <div>
                      <Label>Payment Method</Label>
                      {data.payment_method ? (
                        <>
                          <p>{data.payment_method.type}</p>
                          <p>{data.payment_method.name}</p>
                          <p>{data.payment_method.number}</p>
                        </>
                      ) : (
                        <p>The payment method is pending</p>
                      )}
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
          <TabPane tabId="3" className="tabPane">
            <Row>
              <Col sm="10 ">
                {data.driver_orders.length !== 0 ? (
                  <div>
                    <Label>Address</Label>
                    <p>
                      {data.driver_orders.map((order) => (
                        <section key={order.id}>
                          <p>
                            <span
                              style={{ color: '#969696', fontSize: '13px' }}
                            >
                              Order: #{order.id} -{' '}
                            </span>
                            {order.delivery_address}
                          </p>
                          <Label>Invoice Details ($)</Label>
                          <p>
                            Amount: <strong>{order.amount}</strong>
                          </p>
                          <p>
                            Items value: <strong>{order.items}</strong>
                          </p>
                          <p>
                            Shipping: <strong>{order.shipping}</strong>
                          </p>
                          <p>
                            Commission: <strong>{order.commission}</strong>
                          </p>
                          <p>
                            Profit: <strong>{order.profit}</strong>
                          </p>
                        </section>
                      ))}
                    </p>
                  </div>
                ) : (
                  <p>No orders yet!</p>
                )}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5" className="tabPane">
            <Row>
              {data.reviews.length !== 0 ? (
                <>
                  <Col sm="4">
                    <p>Overview</p>
                    <S.RatingContainer>
                      <div>
                        {data.driver_orders && (
                          <h4>{data.driver_orders.length} Deliveries</h4>
                        )}
                        <h4>
                          {data.reviews.length} Rating (
                          {Math.floor(
                            (data.reviews.length / data.driver_orders.length) *
                              100
                          )}
                          % )
                        </h4>
                        <h4>Review (7%)</h4>
                      </div>
                      <S.ByStar>
                        <p>Rating by Star</p>
                        <div>
                          <p>{RenderStars(5)}</p>
                          <p>{RenderStars(4)}</p>
                          <p>{RenderStars(3)}</p>
                          <p>{RenderStars(2)}</p>
                          <p>{RenderStars(1)}</p>
                        </div>
                      </S.ByStar>
                    </S.RatingContainer>
                  </Col>
                  <Col sm="8">
                    <p style={{ textAlign: 'center' }}>Reviews</p>
                    <S.DescriptionContainer>
                      <Table striped>
                        <tbody>
                          {data.reviews.map((review) => (
                            <tr key={review.id}>
                              {review.description !== null ? (
                                <td>
                                  <div>
                                    <S.HeaderReview>
                                      <div>
                                        <span>
                                          {
                                            dateFormat(review.created_at).split(
                                              ' '
                                            )[0]
                                          }
                                        </span>
                                        <span> - Customer Author</span>
                                      </div>
                                      <S.ContainerStars>
                                        {review.note === 5 && RenderStars(5)}
                                        {review.note === 4 && RenderStars(4)}
                                        {review.note === 3 && RenderStars(3)}
                                        {review.note === 2 && RenderStars(2)}
                                        {review.note === 1 && RenderStars(1)}
                                      </S.ContainerStars>
                                    </S.HeaderReview>
                                    <S.ReviewDescription>
                                      {review.description}
                                    </S.ReviewDescription>
                                  </div>
                                </td>
                              ) : (
                                <></>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </S.DescriptionContainer>
                  </Col>
                </>
              ) : (
                <p>There are still no reviews for this service provider</p>
              )}
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
  handleBlock,
  text
}) => {
  const dataFilter = value ? Filter(value, select, text) : value

  const columns = useMemo(
    () => [
      {
        name: 'Service Provider',
        cell: (row) => (
          <ServiceProviderDetails image={Image} name={row.name} row={row} />
        ),
        minWidth: '230px',
        selector: (row) => row['name'],
        sortable: true
      },
      {
        name: 'email',
        selector: (row) => row['email'],
        center: true,
        sortable: true
      },
      {
        name: 'Contact',
        selector: (row) => row['phone'],
        sortable: true
      },
      {
        name: 'Requested in',
        cell: (row) => {
          const [date] = dateFormat(row.created_at).split(' ')
          return date
        },
        selector: (row) => row['created_at'],
        sortable: true
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
      {dataFilter && (
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
          customStyles={S.customStyles}
        />
      )}
    </>
  )
}

export default ServiceProviderComponent
