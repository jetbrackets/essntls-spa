import { Routes } from 'react-router-dom'

import Login from '../../pages/Login/'
import Orders from '../../pages/Orders'
import Dashboard from '../../pages/Dashboard'
import InventoryReport from '../../pages/InventoryReport'
import RestockOrders from '../../pages/RestockOrders'
import Inventory from '../../pages/Inventory'
import Customers from '../../pages/Customers'
import ServiceProviders from '../../pages/ServiceProviders'

import ProtectedRoute from '../../helpers/ProtectedRoute'
import CustomRoute from '../../helpers/CustomRoutes'

const DashboardRoutes = () => {
  return (
    <div>
      <Routes>
        <CustomRoute path="/" element={<Login />} />

        <ProtectedRoute path="dashboard" element={<Dashboard />} />
        <ProtectedRoute path="orders" element={<Orders />} />
        <ProtectedRoute
          path="report-inventory/*"
          element={<InventoryReport />}
        />
        <ProtectedRoute path="restock-orders" element={<RestockOrders />} />
        <ProtectedRoute path="inventory/*" element={<Inventory />} />
        <ProtectedRoute path="customers" element={<Customers />} />
        <ProtectedRoute
          path="service-providers"
          element={<ServiceProviders />}
        />
      </Routes>
    </div>
  )
}

export default DashboardRoutes
