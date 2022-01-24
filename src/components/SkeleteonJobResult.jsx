import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'

export default function SkeletonJobResult() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
            <Skeleton animation="wave" width="75%" height={30} />
            <Skeleton animation="wave" width="50%" />
            <Skeleton animation="wave" width="25%" />
      </CardContent>
      <CardActions>
        <Button size="small">
            <Skeleton animation="wave" width="75%" />
        </Button>
      </CardActions>
    </Card>
  )
}
