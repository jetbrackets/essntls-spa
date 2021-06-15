import ContentHeader from '../../components/ContentHeader'
import Content from '../../components/Content/index'
import PartialsDashboard from '../../components/PartialsDashbord'
import InventoryComponent from '../../components/Inventory'

const Inventory = () => {
  return (
    <>
      <PartialsDashboard />
      <Content>
        <ContentHeader title="Inventory" />
        <InventoryComponent />
      </Content>
    </>
  )
}

export default Inventory
