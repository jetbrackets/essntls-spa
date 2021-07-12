import { useState, useMemo } from 'react'
import { Nav, TabContent, TabPane, Row, Col } from 'reactstrap'

import DataTable from 'react-data-table-component'

import * as S from './style'

import CustomerDetails from '../CustomerDetails'
import Label from '../Label/Label'

import dateFormat from '../../helpers/DateFormat'
import Filter from '../../helpers/Filter'

import Image from '../../assets/images/customers-image.png'
import { ReactComponent as BlockButtonIcon } from '../../assets/icons/block.svg'

const CustomerInfo = (props) => {
  const [activeTab, setActiveTab] = useState('1')

  const { data, handleBlock } = props

  const tabs = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return (
    <>
      <S.Container>
        <>
          {data.status === 'blocked' ? (
            <></>
          ) : (
            <div>
              <S.BlockButton onClick={() => handleBlock(data.id)}>
                <BlockButtonIcon />
                Block
              </S.BlockButton>
            </div>
          )}
        </>

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
                    <p>{data.name}</p>
                    <p>{data.email}</p>
                    <p>{data.phone}</p>
                  </div>
                  <div>
                    <div>
                      <Label>Address</Label>
                      <p>{data.address.address}</p>
                    </div>
                    <div>
                      <Label>Payment Method</Label>
                      {data.payment_method !== null ? (
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
    </>
  )
}

const CustomerComponent = ({ value, loading, select, handleBlock, text }) => {
  const dataFilter = value ? Filter(value, select, text) : value

  const columns = useMemo(
    () => [
      {
        name: 'Customer',
        cell: (row) => <CustomerDetails Image={Image} name={row.name} />,
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
        name: 'Orders',
        cell: (row) => <p>2</p>
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
          expandableRowsComponent={CustomerInfo}
          expandableRowsComponentProps={{ handleBlock }}
          pagination
          paginationRowsPerPageOptions={[5, 10, 15, 20]}
          highlightOnHover
          customStyles={S.customStyles}
        />
      )}
    </>
  )
}

export default CustomerComponent
