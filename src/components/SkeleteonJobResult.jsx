import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function SkeletonJobResult() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="h5">
            <div class="skeleton skeleton-w75"></div>
        </Typography>
        <Typography sx={{ mb: 1.5, mt: 1 }} color="text.secondary" >
            <div class="skeleton skeleton-w50"></div>
        </Typography>
        <Typography variant="body2">
            <div class="skeleton skeleton-w25"></div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
            <div class="skeleton skeleton-w75"></div>
        </Button>
      </CardActions>
    </Card>
  )
}
