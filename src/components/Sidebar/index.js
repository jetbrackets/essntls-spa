import * as S from './style'

const Sidebar = () => {
  return (
    <S.Container>
      <div>
        <S.SidebarItem className="active">
          <a href="/">Dashboard</a>
        </S.SidebarItem>
        <S.SidebarItem>
          <a href="/">Orders</a>
        </S.SidebarItem>
        <S.SidebarItem>
          <a href="/">Inventory Report</a>
        </S.SidebarItem>
        <S.SidebarItem>
          <a href="/">Restock Orders</a>
        </S.SidebarItem>
        <S.SidebarItem>
          <a href="/">Inventory</a>
        </S.SidebarItem>
        <S.SidebarItem>
          <a href="/">Customers</a>
        </S.SidebarItem>
        <S.SidebarItem>
          <a href="/">Service Providers</a>
        </S.SidebarItem>
      </div>
    </S.Container>
  )
}

export default Sidebar
