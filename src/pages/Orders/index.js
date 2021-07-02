import ContentHeader from '../../components/ContentHeader'
import Content from '../../components/Content/index'
import FormDeliveryOptions from '../../components/FormDeliveryOptions'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import OrderComponent from '../../components/Orders'
import { ORDERS } from '../../service/api'
import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'

const Orders = () => {
  const { value, loading } = useFetch(ORDERS)
  const [select, setSelect] = useState('')
  const options = ['all', 'pending', 'accepted', 'canceled', 'done']

  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        <ContentHeader title="Orders">
          <FormDeliveryOptions setSelect={setSelect} options={options} />
        </ContentHeader>
        <OrderComponent value={value} loading={loading} select={select} />
      </Content>
    </>
  )
}

export default Orders
