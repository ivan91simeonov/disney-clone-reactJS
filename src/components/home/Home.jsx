import './Home.css'
import ImageSlider from '../imageSlider/ImageSlider'
import Viewers from '../viewers/Viewers'

function Home() {
  return (
    <main className='main'>
        <ImageSlider />
        <Viewers />
    </main>
  )
}

export default Home