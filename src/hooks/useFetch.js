import { useState } from 'react'
import axios from 'axios'

export default function useFetch() {

    const { REACT_APP_BASE_URL: BASE_URL } = process.env
  
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchData = async (params) => {
        try {
            setLoading(true)
            const response = await axios.get(`${BASE_URL}?${params}`)
            setData(response.data.data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
            return { data, loading, error }
        }
    }

    return fetchData

}
