import ContentHeader from '../../components/ContentHeader'
import Content from '../../components/Content/index'
import FormDeliveryOptions from '../../components/FormDeliveryOptions'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

const Orders = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Content>
        <ContentHeader title="Orders">
          <FormDeliveryOptions />
        </ContentHeader>
        Orders ok!
      </Content>
    </>
  )
}

export default Orders
