import { Box, Button, Stack, Typography } from "@mui/material"
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const Head = () =>{
    return (
        <Stack alignItems={'center'} sx = {{height : '80vh', width : '100%', position : 'relative', backgroundColor : 'red'}}>
            <Stack spacing={2} alignItems={'center'} sx = {{zIndex : 10, position : 'absolute', top : '60%', left : '50%', transform: "translate(-50%, -50%)"}}>
            
            <Stack spacing={1} alignItems={'center'}>
            <Box><img src="/logo.svg" /></Box>
                <Typography sx = {{color : 'white', fontFamily : "'Roboto Condensed' !important", lineHeight: '3rem', fontSize : '3rem', textAlign : 'center', fontWeight : 600, width : '80vw'}}>YouTube Playlist Wizard</Typography>
                <Typography sx = {{color : 'white', textAlign : 'center'}}>Levelup Your Youtube Playlist Experience</Typography>
            </Stack>
            <Button startIcon = {<ShoppingBagIcon />} variant="contained" sx= {{display : 'flex', alignItems : 'center', borderRadius : '1rem', fontWeight : 600, padding : '0.5rem 2rem', backgroundColor : 'white', color : 'black', textTransform : 'none'}}>Buy Now</Button>
            
            </Stack>
            <Box sx = {{backgroundImage: "linear-gradient(to top, rgba(15,15,15, 1), rgba(15,15,15, 0.8))", padding : 0, margin : 0, height : '80vh', width : '100%', top : 0, left : 0, position : 'absolute', zIndex : 2}}>
            </Box>
                 {/* Background Video */}
      
      <Box sx = {{width : '50vw'}} >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '60%',
          left: '50%',
          width: '80%',
          height: '80%',
          transform : 'translate(-50%, -50%)',
          objectFit: 'cover',
          zIndex: 1,
          borderRadius : '1rem'
        }}
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </Box>
           
        </Stack>
    )
}

export default Head;