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
import FilterOrder from '../../helpers/FilterOrder'
import { ReactComponent as SignalButton } from '../../assets/icons/signal.svg'

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
            <SignalButton />
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

const OrderComponent = ({ value, loading, select, text }) => {
  const dataFilter = value ? FilterOrder(value, select, text) : value

  const columns = useMemo(
    () => [
      {
        name: 'Order number',
        selector: (row) => `#${row['id']}`,
        sortable: true
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
        wrap: false,
        selector: ({ customer }) => (customer ? customer['name'] : ''),
        sortable: true
      },
      {
        name: 'Service Provider',
        cell: (row) =>
          row.driver ? (
            <ServiceProviderDetails
              image={Image}
              name={row.driver.name}
              inDashboard={false}
            />
          ) : (
            ''
          ),
        selector: ({ driver }) => (driver ? driver['name'] : ''),
        minWidth: '230px',
        wrap: false,
        sortable: true
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
          customStyles={S.customStyles}
        />
      )}
    </>
  )
}

export default OrderComponent
