import { useState, useMemo } from 'react'
import { Nav, TabContent, TabPane, Row, Col } from 'reactstrap'

import DataTable from 'react-data-table-component'

import * as S from './style'

import CustomerDetails from '../CustomerDetails'
import Label from '../Label/Label'

import dateFormat from '../../helpers/DateFormat'

import Image from '../../assets/images/customers-image.png'
import { ReactComponent as BlockButtonIcon } from '../../assets/icons/block.svg'

const CustomerInfo = (props) => {
  const [activeTab, setActiveTab] = useState('1')

  const { data, handleBlock } = props

  const tabs = (tab) => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  let customerAddress
  if (data.address) {
    const { address } = data.address
    customerAddress = address
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
    </>
  )
}

const CustomerComponent = ({ value, loading, select, handleBlock }) => {
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
        name: 'Customer',
        cell: (row) => <CustomerDetails Image={Image} name={row.name} />,
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
        name: 'Orders',
        cell: (row) => <p>2</p>
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
          expandableRowsComponent={CustomerInfo}
          expandableRowsComponentProps={{ handleBlock }}
          pagination
          paginationRowsPerPageOptions={[5, 10, 15, 20]}
          highlightOnHover
        />
      )}
    </>
  )
}

export default CustomerComponent
