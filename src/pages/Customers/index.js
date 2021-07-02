import { useState } from 'react'

import { useFetch } from '../../hooks/useFetch'
import { GET_CUSTOMERS } from '../../service/api'

import PartialsDashboard from '../../components/PartialsDashbord'
import ContentHeader from '../../components/ContentHeader'
import Content from '../../components/Content'
import CustomerComponent from '../../components/Customer/index'
import FormDeliveryOptions from '../../components/FormDeliveryOptions'

const Customers = () => {
  const { value, loading, handleBlock } = useFetch(GET_CUSTOMERS)
  const [select, setSelect] = useState('')
  const options = ['all', 'approved', 'blocked']

  return (
    <>
      <PartialsDashboard />
      <Content>
        <ContentHeader title="Customers">
          <FormDeliveryOptions options={options} setSelect={setSelect} />
        </ContentHeader>
        <CustomerComponent
          value={value}
          loading={loading}
          select={select}
          handleBlock={handleBlock}
        />
      </Content>
    </>
  )
}

export default Customers
