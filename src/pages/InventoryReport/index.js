import PartialsDashboard from '../../components/PartialsDashbord'

import ContentHeader from '../../components/ContentHeader'
import Content from '../../components/Content/index'

const InventoryReport = () => {
  return (
    <>
      <PartialsDashboard />
      <Content>
        <ContentHeader title="Inventory Report" />
        InventoryReport ok!
      </Content>
    </>
  )
}

export default InventoryReport
