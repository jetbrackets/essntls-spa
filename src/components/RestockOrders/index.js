import { useEffect, useMemo } from 'react'
import DataTable from 'react-data-table-component'
import { Line } from 'rc-progress'

import * as S from './style'

import ServiceProviderDetails from '../ServiceProviderDetails/'
import Label from '../Label/Label'
import TableItems from '../TableItems'
import FilterRestockOrder from '../../helpers/FilterRestockOrder'

import Image from '../../assets/images/customers-image.png'
import { ReactComponent as PrintIcon } from '../../assets/icons/print.svg'
import { ReactComponent as Options } from '../../assets/icons/kebab.svg'
import { useState } from 'react/cjs/react.development'

const RestockOrdersDetails = (props) => {
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
  const dataFilter = value ? FilterRestockOrder(value, select, text) : value

  const columns = useMemo(
    () => [
      {
        name: 'Progress',
        cell: (row) => (
          <>
            <Line
              percent={
                row.status === 'requested'
                  ? '25'
                  : '0' | (row.status === 'processing')
                  ? '50'
                  : '0' | (row.status === 'shipping')
                  ? '75'
                  : '0' | (row.status === 'completed')
                  ? '100'
                  : '0'
              }
              strokeWidth="7"
              strokeColor="#269E97"
            />
          </>
        )
      },
      {
        name: 'Status',
        selector: (row) => row['status'],
        center: true,
        sortable: true
      },
      {
        name: 'Order number',
        cell: (row) => <p style={{ color: '#969696' }}>#{row.id}</p>,
        editable: true,
        wrap: false,
        selector: (row) => row['id'],
        sortable: true
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
        wrap: false,
        selector: ({ driver }) => (driver ? driver['name'] : ''),
        sortable: true
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
      {dataFilter && (
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
          customStyles={S.customStyles}
        />
      )}
    </>
  )
}

export default RestockOrderComponent
