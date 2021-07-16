import { Routes, Route } from 'react-router-dom'

import Login from '../../pages/Login/'
import Orders from '../../pages/Orders'
import Dashboard from '../../pages/Dashboard'
import RestockOrders from '../../pages/RestockOrders'
import Inventory from '../../pages/Inventory'
import Customers from '../../pages/Customers'
import ServiceProviders from '../../pages/ServiceProviders'
import Users from '../../pages/Users'

import ProtectedRoute from '../../helpers/ProtectedRoute'

const DashboardRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />

        <ProtectedRoute path="dashboard" element={<Dashboard />} />
        <ProtectedRoute path="orders" element={<Orders />} />
        <ProtectedRoute path="restock-orders" element={<RestockOrders />} />
        <ProtectedRoute path="inventory/*" element={<Inventory />} />
        <ProtectedRoute path="customers" element={<Customers />} />
        <ProtectedRoute
          path="service-providers"
          element={<ServiceProviders />}
        />
        <ProtectedRoute path="users/*" element={<Users />} />
      </Routes>
    </div>
  )
}

export default DashboardRoutes
