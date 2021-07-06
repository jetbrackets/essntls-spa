import { useMemo } from 'react'
import DataTable from 'react-data-table-component'

import * as S from './style'

import ServiceProviderDetails from '../ServiceProviderDetails/'
import Label from '../Label/Label'
import TableItems from '../TableItems'

// import dateFormat from '../../helpers/DateFormat'

import Image from '../../assets/images/customers-image.png'
import { ReactComponent as PrintIcon } from '../../assets/icons/print.svg'
import { ReactComponent as Options } from '../../assets/icons/kebab.svg'

const RestockOrdersDetails = (props) => {
  // const [date] = dateFormat(restockOrder.created_at).split(' ')

  const { data } = props

  return (
    <>
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
              <p>{data.shipping}</p>
              <p>{data.amount}</p>
            </div>
            <div>
              <Label>Service Provider</Label>
              <p>{data.driver.name}</p>
              <p>{data.driver.email}</p>
              <p>{data.driver.phone}</p>
            </div>
            <div>
              <Label>Shipping Address</Label>
              <p>{data.shipping_address}</p>
            </div>
            <div>
              <Label>Payment Method</Label>
              <p>
                Credit Card <br />
                DOUGLAS SANTOS <br />
                XXXX XXXX XXXX 9823
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>Items</p>
          <TableItems customHeight="auto">
            {data.items.map((item) => (
              <tr key={item.id}>
                <td>Ibuprofen 200mg</td>
                <td>{item.qty}</td>
                <td>$ {item.value}</td>
                <td>$ {item.qty * item.value}</td>
              </tr>
            ))}
          </TableItems>
        </div>
      </S.Wrapper>
    </>
  )
}

const RestockOrderComponent = ({ value, loading, select, text }) => {
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
        name: 'Progress',
        cell: (row) => <p>progress</p>
      },
      {
        name: 'Status',
        selector: (row) => row['status'],
        center: true
      },
      {
        name: 'Order number',
        cell: (row) => <p style={{ color: '#969696' }}>#{row.id}</p>,
        editable: true,
        wrap: false
      },
      {
        name: 'Requested in',
        cell: (row) => <p>2021/06/21</p>
      },
      {
        name: 'Expected date	',
        cell: (row) => <p>2021/06/21</p>
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
        minWidth: '230px',
        wrap: false
      },
      {
        name: 'Itens',
        cell: (row) => <p>$30</p>
      },
      {
        name: 'Value',
        selector: (row) => row['amount'],
        sortable: true,
        center: true
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
          expandableRowsComponent={RestockOrdersDetails}
          pagination
          paginationRowsPerPageOptions={[5, 10, 15, 20]}
          highlightOnHover
        />
      )}
    </>
  )
}

export default RestockOrderComponent
