import { useState } from 'react'

import * as S from './style'

import BrandImage from '../../assets/images/essntl.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [active, setActive] = useState(false)

  const handleActive = () => setActive(!active)

  return (
    <S.Header>
      <S.BrandContainer>
        <S.Brand>
          <img src={BrandImage} alt="" />
        </S.Brand>
      </S.BrandContainer>
      <S.MobileNavigation className={`${active === true ? 'active' : ''}`}>
        <button onClick={handleActive}>
          <span></span>
        </button>

        <S.Menu className={`${active === true ? 'active' : ''}`}>
          <div>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/orders">Orders</NavLink>
            <NavLink to="/report-inventory">Inventory Report</NavLink>
            <NavLink to="/restock-orders">Restock Orders</NavLink>
            <NavLink to="/inventory">Inventory</NavLink>
            <NavLink to="/customers">Customers</NavLink>
            <NavLink to="/service-providers">Service Providers</NavLink>
          </div>
        </S.Menu>
      </S.MobileNavigation>
    </S.Header>
  )
}

export default Header
