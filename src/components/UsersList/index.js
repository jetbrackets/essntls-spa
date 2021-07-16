import { useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import DataTable from 'react-data-table-component'

import { useFetch } from '../../hooks/useFetch'
import { GET_USERS, DELETE_USER } from '../../service/api'

import * as S from './style'

import { ReactComponent as EditButton } from '../../assets/icons/edit.svg'
import { ReactComponent as Delete } from '../../assets/icons/trash.svg'

const UsersList = () => {
  const { value, loading } = useFetch(GET_USERS)
  const navigate = useNavigate()

  const token = window.localStorage.getItem('token')

  const navigateToEditUser = useCallback(
    async (id) => {
      navigate(`edit/${id}`)
    },
    [navigate]
  )

  const deleteUser = useCallback(
    async (id) => {
      const confirm = window.confirm('Do you really want to delete this user?')
      if (confirm) {
        const { url, options } = DELETE_USER(token, id)
        const response = await fetch(url, options)
        if (response.ok) window.location.reload()
      }
    },
    [token]
  )

  const columns = useMemo(
    () => [
      {
        name: 'Name',
        selector: (row) => `${row['name']}`,
        sortable: true
      },
      {
        name: 'Email',
        selector: (row) => row['email'],
        sortable: true,
        center: true
      },
      {
        name: 'Phone',
        selector: (row) => row['phone'],
        sortable: true,
        center: true
      },
      {
        name: 'Status',
        selector: (row) => row['status'],
        sortable: true,
        center: true
      },
      {
        cell: (row) => (
          <S.Button onClick={() => navigateToEditUser(row.id)}>
            <EditButton /> <span>Edit</span>
          </S.Button>
        ),
        sortable: true,
        center: true
      },
      {
        cell: (row) => (
          <S.Button className="delete" onClick={() => deleteUser(row.id)}>
            <Delete /> <span> Delete</span>
          </S.Button>
        ),
        sortable: true,
        center: true
      }
    ],
    [deleteUser, navigateToEditUser]
  )

  return (
    <>
      <S.Container onClick={() => navigate('new')}>
        <S.Button className="add">Add user</S.Button>
      </S.Container>
      {value && (
        <DataTable
          data={value}
          progressPending={loading}
          columns={columns}
          pagination
          paginationRowsPerPageOptions={[5, 10, 15, 20]}
          highlightOnHover
          customStyles={S.customStyles}
        />
      )}
    </>
  )
}

export default UsersList
