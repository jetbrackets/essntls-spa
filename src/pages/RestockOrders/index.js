import PartialsDashboard from '../../components/PartialsDashbord/index'

import ContentHeader from '../../components/ContentHeader'
import Content from '../../components/Content/index'

const RestockOrders = () => {
  return (
    <>
      <PartialsDashboard />
      <Content>
        <ContentHeader title="Restock Orders" />
        RestockOrders ok!
      </Content>
    </>
  )
}

export default RestockOrders
