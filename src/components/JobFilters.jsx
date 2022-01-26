import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateCategoryAction } from '../redux/actions'

const mapDispatchToProps = dispatch => ({
    updateCategory: categories => dispatch(updateCategoryAction(categories))
})

function JobFilters({ updateCategory }) {

    const [data, setData] = useState([]) 
    const [categoryValue, setCategoryValue] = useState([])
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
                updateCategory(value)
            }}  
            renderInput={params => <TextField
                {...params}
                label="Job Categories"
            />}
        />
    )
}

export default connect(state => ({}), mapDispatchToProps)(JobFilters)