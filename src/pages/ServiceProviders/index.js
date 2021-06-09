import PartialsDashboard from '../../components/PartialsDashbord/index'

import ContentHeader from '../../components/ContentHeader'
import Content from '../../components/Content/index'
import ServiceProviderComponent from '../../components/ServiceProvider/index'
import FormDeliveryOptions from '../../components/FormDeliveryOptions/index'

const ServiceProviders = () => {
  return (
    <>
      <PartialsDashboard />
      <Content>
        <ContentHeader title="Service Providers">
          <FormDeliveryOptions />
        </ContentHeader>
        <ServiceProviderComponent />
      </Content>
    </>
  )
}

export default ServiceProviders
