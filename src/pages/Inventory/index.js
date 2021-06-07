import ContentHeader from '../../components/ContentHeader'
import Content from '../../components/Content/index'
import PartialsDashboard from '../../components/PartialsDashbord'

const Inventory = () => {
  return (
    <>
      <PartialsDashboard />
      <Content>
        <ContentHeader title="Inventory" />
        Inventory ok!
      </Content>
    </>
  )
}

export default Inventory
