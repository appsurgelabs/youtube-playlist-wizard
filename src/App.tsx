import './App.css'
import { Stack } from '@mui/material'
import Header from './components/header'
import HowToUse from './sections/how-to-use'
import Feature from './sections/feature'
import Head from './sections/head'
import DescriptionSection from './sections/description'

function App() {

  return (
    <Stack alignItems={'center'}>
      <Header />
      <Head />
      <DescriptionSection />
      <HowToUse />
      <Feature feature='RICH EXTENSION USER INTERFACE' description='YouTube Playlist Wizard offers a seamless experience with its intuitive and rich interface, making playlist management faster and easier than ever.' demo={'rich_video.mp4'} type='portrait' />
      <Feature feature='CREATE LIBRARIES AND NESTED PLAYLISTS' description='Organize your content like never before! Build libraries and structured, nested playlists for a streamlined and personalized experience.' demo={'lib_nested_video.mp4'} type='portrait' />
      <Feature feature='SEARCH, SORT & FILTER OPTIONS WITHIN PLAYLISTS' description='Easily navigate your playlists with powerful search, sort, and filter options. Find necessary contents in seconds!' demo={'sort_filter_video.mp4'} type='portrait' />
      <Feature feature='LOOP PLAYLIST WITH MORE OPTIONS' description='Enjoy seamless playback with enhanced loop settings, giving you more control over how your playlists repeat and play.' demo={'loop_video.mp4'} type='landscape' />
      <Feature feature='SET TIMER FOR VIDEO PAUSE' description='Set a customizable timer to automatically pause videos at your convenience. Perfect for breaks and focused viewing!' demo={'pause_video.mp4'} type='landscape' />
    </Stack>
  )
}

export default App
