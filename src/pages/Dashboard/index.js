import ContentHeader from '../../components/ContentHeader'
import Content from '../../components/Content/index'
import PartialsDashboard from '../../components/PartialsDashbord'

const Dashboard = () => {
  return (
    <>
      <PartialsDashboard />
      <Content>
        <ContentHeader title="Dashboard" />
        Dashboard ok!
      </Content>
    </>
  )
}

export default Dashboard
