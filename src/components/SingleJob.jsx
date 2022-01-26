import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { differenceInWeeks, parseISO } from 'date-fns'
import { BsHeart, BsHeartFill } from "react-icons/bs"
import { connect } from 'react-redux'
import { addToFavouritesAction } from '../redux/actions'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  addToFavourites: job => dispatch(addToFavouritesAction(job))
})

function SingleJob({ job, page, addToFavourites }) {
    
    const publishedDate = job.publication_date.split('T')[0]
    const diiferenceInWeeks = differenceInWeeks(new Date(), parseISO(publishedDate))

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
          <Typography variant="h5" noWrap >{job.title}</Typography>
          <BsHeart onClick={() => addToFavourites(job)}/>
        </Stack>
        <Link to={`/company/${job.company_name}`} style={{ textDecoration: 'none'}}><Typography sx={{ mb: 1, mt: 1 }} color="text.secondary" >{job.company_name}</Typography></Link>
        <Typography variant="body2">{job.candidate_required_location} - {diiferenceInWeeks} weeks ago</Typography>
        <Stack direction="row" spacing={1} style={{ marginTop: ".5rem", marginLeft: "-.25rem"}} >
            <Chip label={job.category} />
            { job.type && <Chip label={job.type} /> }
        </Stack>
      </CardContent>
      <CardActions>
        { page !== "favourites" ?
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
            <Link to={`/jobs/${job._id}`} style={{ textDecoration: 'none'}}><Button size="small">View Details</Button></Link>
          </Stack> :
            <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
        }
      </CardActions>
    </Card>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(SingleJob)