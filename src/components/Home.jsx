import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Home() {
    
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <Container maxWidth="lg" style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container>
                <Grid item xs={12}>
                <form onSubmit={() => navigate(`/jobs?query=${searchQuery}`)}>
                <TextField
                    id="filled-search"
                    label="Search Jobs"
                    type="search"
                    style={{ minWidth: '100%'}}
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                </form>
                </Grid>
            </Grid>
        </Container>
    )
}