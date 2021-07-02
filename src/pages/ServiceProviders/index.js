import PartialsDashboard from '../../components/PartialsDashbord/index'

import ContentHeader from '../../components/ContentHeader'
import Content from '../../components/Content/index'
import ServiceProviderComponent from '../../components/ServiceProvider/index'
import FormDeliveryOptions from '../../components/FormDeliveryOptions/index'
import { useFetch } from '../../hooks/useFetch'
import { GET_DRIVERS } from '../../service/api'
import { useState } from 'react'

const ServiceProviders = () => {
  const { value, loading, handleBlock, handleApprove } = useFetch(GET_DRIVERS)
  const [select, setSelect] = useState('')
  const options = ['all', 'approved', 'blocked']

  return (
    <>
      <PartialsDashboard />
      <Content>
        <ContentHeader title="Service Providers">
          <FormDeliveryOptions setSelect={setSelect} options={options} />
        </ContentHeader>
        <ServiceProviderComponent
          value={value}
          loading={loading}
          select={select}
          handleApprove={handleApprove}
          handleBlock={handleBlock}
        />
      </Content>
    </>
  )
}

export default ServiceProviders
