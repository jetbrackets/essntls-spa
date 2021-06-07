import { BrowserRouter } from 'react-router-dom'

import { UserStorage } from './context/userContext'

import DashboardRoutes from './components/routes/dashbordRoutes'

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <DashboardRoutes />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
