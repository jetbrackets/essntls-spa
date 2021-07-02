import { useMemo } from 'react'

import * as S from './style'

import DataTable from 'react-data-table-component'

import CustomerDetails from '../CustomerDetails'
import ServiceProviderDetails from '../ServiceProviderDetails/'
import DestinationDetails from '../DestinationDetails'
import WrapperdMap from '../Map'
import Label from '../Label/Label'
import TableItems from '../TableItems'

import Image from '../../assets/images/customers-image.png'

const OrderDetails = (props) => {
  const mapContainerStyle = {
    height: '350px',
    maxWidth: '995px'
  }

  const { data } = props

  return (
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
              <DestinationDetails address={data} />

              <S.ItemsContainer>
                <p>Items</p>
                <div>
                  <TableItems customHeight="200px">
                    {data.items.map((item) => (
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
                      <td>{data.accepted_in}</td>
                    </tr>
                    <tr>
                      <td>Accepted in:</td>
                      <td>{data.accepted_in}</td>
                    </tr>
                    <tr>
                      <td>Arrival in:</td>
                      <td>{data.arrival_in}</td>
                    </tr>
                    <tr>
                      <td>Delivery time:</td>
                      <td>{data.delivery_time}</td>
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
                      <td>{data.shipping}</td>
                    </tr>
                    <tr>
                      <td>Provider’s Commission:</td>
                      <td>{data.commission}</td>
                    </tr>
                    <tr>
                      <td>Essntl’s Profit:</td>
                      <td>{data.profit}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </S.Wrapper>
          </S.Location>
        </S.Container>
      </div>
    </S.OrderContainer>
  )
}

const OrderComponent = ({ value, loading, select }) => {
  const dataFilter = value
    ? value.filter((value) =>
        value.status.includes(
          `${select === 'all'.toLocaleLowerCase() ? '' : select}`
        )
      )
    : value

  const customStyles = {
    cells: {
      style: {
        padding: '.5rem'
      }
    },
    headCells: {
      style: {
        color: 'var(--primary-color)'
      }
    }
  }

  const columns = useMemo(
    () => [
      {
        name: 'Order number',
        cell: (row) => <p style={{ color: '#969696' }}>#{row.id}</p>,
        sortable: true,
        editable: true,
        wrap: false
      },
      {
        name: 'Accepted in',
        selector: (row) => row['accepted_in'],
        sortable: true,
        center: true
      },
      {
        name: 'Arrival in',
        selector: (row) => row['arrival_in'],
        sortable: true,
        center: true
      },
      {
        name: 'Amount',
        selector: (row) => row['amount'],
        sortable: true,
        center: true
      },
      {
        name: 'Customer',
        cell: (row) => (
          <CustomerDetails Image={Image} name={row.customer.name} />
        ),
        minWidth: '230px',
        wrap: false
      },
      {
        name: 'Service Provider',
        cell: (row) =>
          row.drive ? (
            <ServiceProviderDetails
              Image={Image}
              name={row.driver.name}
              inDashboard={false}
            />
          ) : (
            ''
          ),
        minWidth: '230px',
        wrap: false
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
          expandableRowsComponent={OrderDetails}
          pagination
          paginationRowsPerPageOptions={[5, 10, 15, 20]}
          highlightOnHover
          customStyles={customStyles}
        />
      )}
    </>
  )
}

export default OrderComponent
