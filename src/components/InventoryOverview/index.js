import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Table } from 'reactstrap'

import Switch from 'react-switch'

import * as S from './style'

import { ReactComponent as EditButton } from '../../assets/icons/edit.svg'
import { ReactComponent as CartButton } from '../../assets/icons/cart.svg'
import { ReactComponent as SumButton } from '../../assets/icons/sum.svg'

const InventoryOverview = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = () => setChecked(!checked)

  return (
    <Table>
      <S.ContainerButtons>
        <div>
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
        </div>
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
      <Table borderless responsive>
        <thead>
          <S.TableRow>
            <th scope="col">Product</th>
            <th scope="col" className="text-center">
              Purchase price ($)
            </th>
            <th scope="col" className="text-center">
              Sell price ($)
            </th>
            <th scope="col" className="">
              Profit ($)
            </th>
            <th scope="col" className="text-center">
              Quantity
            </th>
          </S.TableRow>
        </thead>
        <tbody>
          <tr
            style={{
              borderBottom: '1px solid #CFCFCF',
              borderTop: '1px solid #CFCFCF'
            }}
          >
            <td className="align-middle col-md-3">Acid Controller 30 ea</td>
            <td className="align-middle text-center">10.35</td>
            <td className="align-middle text-center">10.00</td>
            <td className="align-middle col-md-3">6.00</td>
            <td className="align-middle text-center">50</td>
            <td className="align-middle">
              <S.Button>
                <EditButton /> Edit
              </S.Button>
            </td>
          </tr>
          <tr
            style={{
              borderBottom: '1px solid #CFCFCF',
              borderTop: '1px solid #CFCFCF'
            }}
          >
            <td className="align-middle col-md-3">Acid Controller 30 ea</td>
            <td className="align-middle text-center">10.35</td>
            <td className="align-middle text-center">10.00</td>
            <td className="align-middle col-md-3">6.00</td>
            <td className="align-middle text-center">50</td>
            <td className="align-middle">
              <S.Button>
                <EditButton /> Edit
              </S.Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Table>
  )
}

export default InventoryOverview
