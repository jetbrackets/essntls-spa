import PartialsDashboard from '../../components/PartialsDashbord'

import ContentHeader from '../../components/ContentHeader'
import Content from '../../components/Content'
import UsersComponent from '../../components/UsersComponent'

const Users = () => {
  return (
    <>
      <PartialsDashboard />
      <Content>
        <ContentHeader title="Users"></ContentHeader>
        <UsersComponent />
      </Content>
    </>
  )
}

export default Users
