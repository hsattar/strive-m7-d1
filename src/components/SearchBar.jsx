import TextField from '@mui/material/TextField'

export default function SearchBar({ searchQuery, handleChange }) {
    return (
        <TextField
            id="filled-search"
            label="Search Jobs"
            type="search"
            style={{ minWidth: '100%'}}
            value={searchQuery}
            onChange={e => handleChange(e.target.value)}
        />
    )
}
