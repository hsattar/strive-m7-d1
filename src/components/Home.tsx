import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import SearchBar from './SearchBar'
import { Typography } from '@mui/material'

export default function Home() {
    return (
        <Container maxWidth="lg" style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container>
                <Grid item xs={12}>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }} >
                        <Typography variant='h2'>Strive Jobs</Typography>
                    </div>
                    <SearchBar />
                </Grid>
            </Grid>
        </Container>
    )
}