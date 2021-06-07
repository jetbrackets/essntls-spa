import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import * as S from './style'
import { UserContext } from '../../context/userContext'

const Sidebar = () => {
  const { userLogout } = useContext(UserContext)

  return (
    <S.Container>
      <div>
        <ul>
          <S.SidebarItem>
            <NavLink to="/dashboard" end activeClassName="active">
              Dashboard
            </NavLink>
          </S.SidebarItem>

          <S.SidebarItem>
            <NavLink to="/orders">Orders</NavLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <NavLink to="/report-inventory">Inventory Report</NavLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <NavLink to="/restock-orders">Restock Orders</NavLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <NavLink to="/inventory">Inventory</NavLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <NavLink to="/customers">Customers</NavLink>
          </S.SidebarItem>
          <S.SidebarItem>
            <NavLink to="/service-providers">Service Providers</NavLink>
          </S.SidebarItem>
        </ul>
        <div>
          <button onClick={userLogout}>
            <svg width="24" height="24" fill="none">
              <path
                d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                stroke="#F4F4F4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 17L21 12L16 7"
                stroke="#F4F4F4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 12H9"
                stroke="#F4F4F4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </S.Container>
  )
}

export default Sidebar
