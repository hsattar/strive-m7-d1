import { Container, Grid, Typography } from '@mui/material'
import SingleJob from './SingleJob'
import { useSelector } from 'react-redux'
import { IReduxStore } from '../types/ReduxStore'

export default function Favourites() {

    const favouriteJobs = useSelector((state: IReduxStore) => state.favourites.jobs)

    return (
        <Container maxWidth="xl" style={{ margin: '3rem 0'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    { favouriteJobs.length === 0 && <Typography variant='h4'>No Favourite jobs to display</Typography> }
                    { favouriteJobs.map(job => <SingleJob key={job._id} job={job} page="favourites" /> ) }
                </Grid>
            </Grid>
        </Container>
    )
}