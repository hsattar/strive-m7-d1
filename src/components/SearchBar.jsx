import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateSearchQueryAction } from '../redux/actions'

// const mapStateToProps = state => ({
//     searchQuery: state.jobs.searchQuery
// })

const mapDispatchToProps = dispacth => ({
    updateSearchQuery: query => dispacth(updateSearchQueryAction(query))
})

function SearchBar({ updateSearchQuery }) {    

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
                    updateSearchQuery(query)
                    navigate('/jobs')
                }}
            }
        />
    )
}

export default connect(state => ({}), mapDispatchToProps)(SearchBar)