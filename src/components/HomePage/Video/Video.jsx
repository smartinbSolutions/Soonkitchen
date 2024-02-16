import React from "react";
import ReactPlayer from 'react-player/youtube';
import './Video.css'
import { Container } from "reactstrap";

const Video = () => {
  return(
    <Container>
    <div className="video">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=xPPLbEFbCAo&ab_channel=Biteable"
        width="100%"
        height="100%"
        playing
        muted
        loop
        config={
          {
          youtube: {
            playerVars: {
              modestbranding: 0,
              controls: 0,
              rel: 0,
            },
          },
        }}
      />
    </div>
    </Container>
  )
}

export default Video