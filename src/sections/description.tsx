import { Stack, Typography } from "@mui/material"
const DescriptionSection = () =>{
    return (
        <Stack spacing={4} justifyContent={'center'} alignItems={'center'} sx = {{paddingY : '4rem',backgroundColor : '#0f0f0f', width : '100%'}}>
            <Typography sx = {{color : 'white', paddingX : '10vw', textAlign : 'center'}}>YouTube Playlist Wizard is a game-changing Chrome extension designed to make organizing your YouTube playlists effortless and efficient. With its intuitive user interface, this powerful tool allows you to create structured libraries, manage nested playlists, and quickly access your content anytime, anywhere. Advanced search, sort, and filter options make navigating large playlists a breeze, while the ability to add multiple videos in bulk saves time and simplifies content organization. Additional features like customizable playback loops, a video pause timer, and enhanced control over playlist settings ensure a seamless and personalized YouTube experience. Whether you're a casual viewer or a playlist enthusiast, YouTube Playlist Wizard is the ultimate tool to transform your YouTube experience.</Typography>
        </Stack>
    )
}

export default DescriptionSection;