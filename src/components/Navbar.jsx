import { Stack } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" elevation={0}>
      <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none'}}>Strive Jobs</Link>
       </Typography>
       <Typography>
          <Link to="/favourites" style={{ color: 'white', textDecoration: 'none'}}>Favourites</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
}
