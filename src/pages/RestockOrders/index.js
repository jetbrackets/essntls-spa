import PartialsDashboard from '../../components/PartialsDashbord/index'

import ContentHeader from '../../components/ContentHeader'
import Content from '../../components/Content/index'
import RestockOrderComponent from '../../components/RestockOrders'
import FormDeliveryOptions from '../../components/FormDeliveryOptions'
import { useFetch } from '../../hooks/useFetch'
import { RESTOCK_ORDERS } from '../../service/api'
import { useState } from 'react'

const RestockOrders = () => {
  const { value, loading } = useFetch(RESTOCK_ORDERS)
  const [select, setSelect] = useState('')
  const [text, setText] = useState('')
  const options = [
    'all',
    'requested',
    'canceled',
    'processing',
    'shipping',
    'completed'
  ]

  return (
    <>
      <PartialsDashboard />
      <Content>
        <ContentHeader title="Restock Orders">
          <FormDeliveryOptions
            setSelect={setSelect}
            options={options}
            setText={setText}
          />
        </ContentHeader>
        <RestockOrderComponent
          value={value}
          loading={loading}
          select={select}
          text={text}
        />
      </Content>
    </>
  )
}

export default RestockOrders
