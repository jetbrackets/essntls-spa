import PartialsDashboard from '../../components/PartialsDashbord/index'

import ContentHeader from '../../components/ContentHeader'
import Content from '../../components/Content/index'
import RestockOrderComponent from '../../components/RestockOrders'
import FormDeliveryOptions from '../../components/FormDeliveryOptions'

const RestockOrders = () => {
  return (
    <>
      <PartialsDashboard />
      <Content>
        <ContentHeader title="Restock Orders">
          <FormDeliveryOptions />
        </ContentHeader>
        <RestockOrderComponent />
      </Content>
    </>
  )
}

export default RestockOrders
