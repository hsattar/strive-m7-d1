import { Container, Grid } from '@mui/material'
import SingleJob from './SingleJob'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  favouriteJobs: state.favourites.jobs
})

function Favourites({ favouriteJobs }) {

    return (
        <Container maxWidth="xl" style={{ margin: '3rem 0'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    { favouriteJobs.map(job => <SingleJob key={job._id} job={job} page="favourites" /> ) }
                </Grid>
            </Grid>
        </Container>
    )
}

export default connect(mapStateToProps)(Favourites)
