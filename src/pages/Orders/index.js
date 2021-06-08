import ContentHeader from '../../components/ContentHeader'
import Content from '../../components/Content/index'
import FormDeliveryOptions from '../../components/FormDeliveryOptions'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import OrderComponent from '../../components/Orders'

const Orders = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        <ContentHeader title="Orders">
          <FormDeliveryOptions />
        </ContentHeader>
        <OrderComponent />
      </Content>
    </>
  )
}

export default Orders
