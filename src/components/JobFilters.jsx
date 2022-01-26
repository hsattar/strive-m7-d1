import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import axios from 'axios'

export default function JobFilters({ category, changeCategory }) {

    const [data, setData] = useState([]) 
    const { REACT_APP_BASE_URL: BASE_URL }= process.env

    const fetchCategories = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/categories`)
            setData(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <Autocomplete
            multiple
            disablePortal
            options={data}
            sx={{ width: "100%" }}  
            renderInput={params => <TextField {...params} label="Job Categories" value={category} onChange={e => changeCategory(e.target.value)} />}
        />
    )
}