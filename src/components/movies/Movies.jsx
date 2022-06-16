import styled from "styled-components"
import {Link ,Route} from 'react-router-dom'
import Details from "../details/Details"
import './Movies.css'


function Movies() {
  return (
    <div className="container-movie" >
        <h4>Recommended for You</h4>
        <div className="content">
            <div className="wrap">
                <img src="/images/group-icon.png" alt="" />
            </div>
            <div className="wrap">
                <img src="/images/group-icon.png" alt="" />
            </div>
            <div className="wrap">
                <img src="/images/group-icon.png" alt="" />
            </div>
            <div className="wrap">
                <img src="/images/group-icon.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Movies


