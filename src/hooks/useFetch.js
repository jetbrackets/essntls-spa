import { useEffect, useState, useCallback } from 'react'

import ApproveUser from '../helpers/ApproveUser'
import BlockUser from '../helpers/BlockUser'

export const useFetch = (SERVICE_URL) => {
  const [value, setValue] = useState(null)
  const [approved, setApproved] = useState(false)
  const [blocked, setBlocked] = useState(false)
  const [loading, setLoading] = useState(null)

  useEffect(() => {
    let clear = false
    const getInfo = async () => {
      try {
        if (!clear) {
          setLoading(true)
          const token = window.localStorage.getItem('token')

          const { url, options } = SERVICE_URL(token)
          const response = await fetch(url, options)
          const json = await response.json()

          setValue(json)
          setApproved(true)
          setBlocked(true)
        }
      } catch (error) {
        if (!clear) {
          throw error
        }
      } finally {
        setLoading(false)
      }
    }
    getInfo()
    return () => {
      clear = true
    }
  }, [approved, blocked, SERVICE_URL])

  const handleApprove = useCallback((id) => {
    ApproveUser(id)
    setApproved(false)
  }, [])

  const handleBlock = useCallback((id) => {
    BlockUser(id)
    setBlocked(false)
  }, [])

  return {
    value,
    setValue,
    handleApprove,
    handleBlock,
    loading
  }
}
