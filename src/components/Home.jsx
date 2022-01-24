import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Home({ searchQuery, handleChange }) {
    
    const navigate = useNavigate()

    return (
        <Container maxWidth="lg" style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container>
                <Grid item xs={12}>
                <form onSubmit={() => navigate(`/jobs?query=${searchQuery}`)}>
                    <SearchBar searchQuery={searchQuery} handleChange={handleChange} />
                </form>
                </Grid>
            </Grid>
        </Container>
    )
}