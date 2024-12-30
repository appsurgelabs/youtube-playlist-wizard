import { Box, Stack, Typography } from "@mui/material"
const Feature = ({feature, description, demo, type} : {feature : string, description : string, demo : string, type : "landscape" | "portrait"}) =>{
    return (
        <Stack spacing={4} justifyContent={'center'} alignItems={'center'} sx = {{width : '100%', paddingY : '2rem'}}>
            <Stack spacing={5}>
            <Typography paddingX = {'10vw'} textAlign={'center'} sx = {{lineHeight : '2rem', fontWeight : 600, fontSize : '2rem', textTransform : 'uppercase'}}>{feature}</Typography>
            <Typography paddingX = {'10vw'} textAlign={'center'}>{description}</Typography>
            </Stack>

            

            {type == "portrait" &&
            <Box sx = {{position : 'relative', borderRadius : '2rem' , width : {xs : '80vw' , sm : '40vw'}, height : {xs : '64vw' , sm : '32vw'}}}>
            <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          transform : 'translate(-50%, -50%)',
          objectFit: 'cover',
          zIndex: 2,
          borderRadius : '0.5rem'
        }}
      >
        <source src={demo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            </Box>}

            {type == "landscape" &&
            <Box sx = {{position : 'relative', borderRadius : '2rem' , width : '70vw', height : '32vw'}}>
            <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          transform : 'translate(-50%, -50%)',
          objectFit: 'cover',
          zIndex: 2,
          borderRadius : '0.5rem'
        }}
      >
        <source src={demo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            </Box>}
        </Stack>
    )
}

export default Feature;