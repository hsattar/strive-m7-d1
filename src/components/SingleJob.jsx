import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

export default function BasicCard({ job }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="h5">{job.title}</Typography>
        <Link to={`/company/${job.company_name}`}><Typography sx={{ mb: 1.5, mt: 1 }} color="text.secondary">{job.company_name}</Typography></Link>
        <Typography variant="body2">{job.candidate_required_location}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/jobs/${job._id}`} style={{ textDecoration: 'none'}}><Button size="small">View More</Button></Link>
      </CardActions>
    </Card>
  )
}
