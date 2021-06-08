import ContentHeader from '../../components/ContentHeader'
import Content from '../../components/Content/index'
import PartialsDashboard from '../../components/PartialsDashbord'
import DashbordComponent from '../../components/Dashboard/index'

const Dashboard = () => {
  return (
    <>
      <PartialsDashboard />
      <Content>
        <ContentHeader title="Dashboard" />
        <DashbordComponent />
      </Content>
    </>
  )
}

export default Dashboard
