import './Home.css'
import ImageSlider from '../imageSlider/ImageSlider'
import Viewers from '../viewers/Viewers'
import Movies from '../movies/Movies'

function Home() {
  return (
    <main className='main'>
        <ImageSlider />
        <Viewers />
        <Movies />
    </main>
  )
}

export default Home