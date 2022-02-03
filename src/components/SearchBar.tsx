import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateSearchQueryAction } from '../redux/actions'

export default function SearchBar() {    

    const dispatch = useDispatch()
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    
    return (
        <TextField
            id="filled-search"
            label="Search Jobs"
            type="search"
            style={{ minWidth: '100%'}}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyUp={e => {
                if (e.key === 'Enter') {
                    dispatch(updateSearchQueryAction(query))
                    navigate('/jobs')
                }}
            }
        />
    )
}