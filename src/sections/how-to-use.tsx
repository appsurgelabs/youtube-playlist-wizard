import { Box, Stack, Typography } from "@mui/material"
const HowToUse = () =>{
    return (
        <Stack spacing={4} justifyContent={'center'} alignItems={'center'} sx = {{ backgroundColor : '#0f0f0f', width : '100%', paddingBottom : '4rem'}}>
            <Stack spacing={0.1}>
                <Typography textAlign={'center'} sx = {{lineHeight : '2rem', fontWeight : 600, fontSize : '2rem', color : 'white', textTransform : 'uppercase'}}>START BY, <br></br>SYNCING YOUR PLAYLISTS WITH<br></br>YOUTUBE PLAYLIST WIZARD </Typography>
            </Stack>
            <Box sx = {{position : 'relative', borderRadius : '2rem' , width : '80vw', height : '36.5vw'}}>
            <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '60%',
          left: '50%',
          width: '100%',
          height: '100%',
          transform : 'translate(-50%, -50%)',
          objectFit: 'cover',
          zIndex: 2,
          borderRadius : '1rem'
        }}
      >
        <source src="sync_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            </Box>
            <Stack width={'100%'} alignItems={'center'} paddingY = {'2rem'}>
            <Typography sx = {{color : 'white', width : '80%', textAlign : 'center', marginTop : '2rem'}}>YouTube Playlist Wizard offers a seamless experience with its intuitive and rich interface, making playlist management faster and easier than ever.</Typography>
            </Stack>
        </Stack>
    )
}

export default HowToUse;