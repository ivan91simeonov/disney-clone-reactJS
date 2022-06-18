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
            <img src="/images/play-icon-white.png" alt="" />
                <span>Trailer</span>
            </button>
            <button className='add-button'>
                <span>+</span>
            </button>
            <button className='group-btn'>
                <img src="/images/group-icon.png" alt="" />
            </button>
        </div>
        <div className='sub-title'> 
        Abc
        </div>
        <div className="description">
            ABC
        </div>
    </div>
  )
}

export default Details

