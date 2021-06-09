import PartialsDashboard from '../../components/PartialsDashbord'

import ContentHeader from '../../components/ContentHeader'
import Content from '../../components/Content'
import CustomerComponent from '../../components/Customer/index'
import FormDeliveryOptions from '../../components/FormDeliveryOptions'

const Customers = () => {
  return (
    <>
      <PartialsDashboard />
      <Content>
        <ContentHeader title="Customers">
          <FormDeliveryOptions />
        </ContentHeader>
        <CustomerComponent />
      </Content>
    </>
  )
}

export default Customers
