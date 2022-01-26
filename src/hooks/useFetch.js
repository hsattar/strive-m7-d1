import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetch(params) {

    const { REACT_APP_BASE_URL: BASE_URL } = process.env
  
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    
    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`${BASE_URL}?${params}`, {
                    signal: controller.signal
                })
                setData(response.data.data)
            } catch (error) {
                if (error.message === 'canceled') return 
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()

        return () => controller.abort()
    }, [params])
    
    return { data, loading, error }

}
