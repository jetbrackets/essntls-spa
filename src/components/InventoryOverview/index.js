import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'

import Switch from 'react-switch'

import * as S from './style'

import { ReactComponent as EditButton } from '../../assets/icons/edit.svg'
import { ReactComponent as CartButton } from '../../assets/icons/cart.svg'
import { ReactComponent as SumButton } from '../../assets/icons/sum.svg'
import { useFetch } from '../../hooks/useFetch'
import { GET_PRODUCTS } from '../../service/api'

const InventoryOverview = () => {
  const [checked, setChecked] = useState(false)
  const { value, loading } = useFetch(GET_PRODUCTS)

  const handleChange = () => setChecked(!checked)

  const columns = useMemo(
    () => [
      {
        name: 'Product',
        selector: (row) => row['name'],
        sortable: true
      },
      {
        name: 'Purchase price ($)',
        selector: (row) => row['purchase_price'],
        sortable: true
      },
      {
        name: 'Sell price ($)',
        selector: (row) => row['price'],
        sortable: true,
        center: true
      },
      {
        name: 'Profit ($)',
        selector: (row) => row['arrival_in'],
        sortable: true,
        center: true
      },
      {
        name: 'Quantity',
        selector: (row) => row['stock'],
        sortable: true,
        center: true
      },
      {
        cell: (row) => (
          <S.Button>
            <EditButton /> Edit
          </S.Button>
        ),
        sortable: true,
        center: true
      }
    ],
    []
  )

  return (
    <>
      <S.ContainerButtons>
        <S.Wrapper>
          <S.Button>
            <EditButton /> Quick Edit
          </S.Button>
          <S.Button>
            <CartButton /> Rebuy
          </S.Button>
          <S.Button>
            <SumButton />
            <Link style={{ color: 'var(--primary-color)' }} to="new-product">
              New Product
            </Link>
          </S.Button>
        </S.Wrapper>
        <S.ContainerSwtich>
          <div>
            <label>
              <Switch
                onChange={handleChange}
                checked={checked}
                checkedIcon={false}
                uncheckedIcon={false}
                height={16}
                width={30}
                handleDiameter={10}
                offColor="#e3e3e3"
                onColor="#269E97"
              />
              <span>View low stock</span>
            </label>
          </div>
        </S.ContainerSwtich>
      </S.ContainerButtons>

      {value && (
        <DataTable
          data={value}
          columns={columns}
          progressPending={loading}
          pagination
          paginationRowsPerPageOptions={[5, 10, 15, 20]}
          customStyles={S.customStyles}
        />
      )}
    </>
  )
}

export default InventoryOverview
