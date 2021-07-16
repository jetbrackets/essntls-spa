import { Routes, Route } from 'react-router-dom'
import UserEdit from '../UserEdit'

import UsersList from '../UsersList/'
import UserNew from '../UserNew/index'

const Users = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="edit/:id" element={<UserEdit />} />
          <Route path="new" element={<UserNew />} />
        </Routes>
      </div>
    </>
  )
}

export default Users
