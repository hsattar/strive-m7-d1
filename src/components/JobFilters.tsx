import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { updateCategoryAction } from '../redux/actions'

export default function JobFilters() {

    const dispatch = useDispatch()

    const [data, setData] = useState([]) 
    // FIXME:
    const [categoryValue, setCategoryValue] = useState<any>('')
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
            value={categoryValue}
            onChange={(event, value) => {
                setCategoryValue(value)
                dispatch(updateCategoryAction(value))
            }}  
            renderInput={params => <TextField
                {...params}
                label="Job Categories"
            />}
        />
    )
}