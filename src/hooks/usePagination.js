import { useEffect, useState } from 'react'

export const usePagination = (SERVICE_URL) => {
  const [value, setValue] = useState(null)
  const [loading, setLoading] = useState(null)
  const [pageNumber, setPageNumber] = useState(
    () => localStorage.getItem('page') || 0
  )

  useEffect(() => {
    let clear = false
    const getInfo = async () => {
      try {
        if (!clear) {
          setLoading(true)
          const token = window.localStorage.getItem('token')

          const { url, options } = SERVICE_URL(token, pageNumber)

          window.localStorage.setItem('page', pageNumber)

          const response = await fetch(url, options)
          const json = await response.json()

          setValue(json)
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
  }, [SERVICE_URL, pageNumber])

  return {
    value,
    setValue,
    loading,
    pageNumber,
    setPageNumber
  }
}
