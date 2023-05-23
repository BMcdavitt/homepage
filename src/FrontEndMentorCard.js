import './FrontEndMentorCard.css'
import React from 'react'

function FrontEndMentorCard(props) {

  return (
    <div className="FrontEndMentorCard">
      <h3
        className="FrontEndMentorCardHeader"
        onClick={() => launchApp(props.link)}
      >
        {props.title}
      </h3>
      <img
        className="FrontEndMentorImage"
        src={'./images/FrontEndMentor/' + props.image}
        alt=""
        onClick={() => launchApp(props.link)}
      />
    </div>
  )
}

function launchApp(link) {
  window.open(link)
}

export default FrontEndMentorCard
