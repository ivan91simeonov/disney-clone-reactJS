import './Details.css'
import styled from 'styled-components'

function Details() {
  return (
    <div className='container-details'>
        <div className='background'>
            <img src="" alt="" />
        </div>
        <div className='img-title'>
            <img src="" alt="" />
        </div>
        <div className='controls'>
            <button className='play-btn'>
                <img src="/images/play-icon-black.png" alt="" />
                <span>Play</span>
            </button>
            <button className='trailer-btn'>
            <img src="/images/group-icon.png" alt="" />
                <span>Trailer</span>
            </button>
            <button className='add-button'>

            </button>
            <button className='group-btn'>

            </button>
        </div>
    </div>
  )
}

export default Details

