import './OneHundredDayCssCard.css';
import React from 'react'


function OneHundredDayCssCard(props) {
    let source = `//codepen.io/bmcdavitt/embed/${props.src}/?height=400&amp;theme-id=22129&amp;default-tab=result`

    return (
  

    <iframe 
      title="Pen by bmcdavitt"
      src={source}
      className="penIframe"
      frameBorder="0"
      scrolling="no"
      allowtransparency="true"
      sandbox="allow-scripts allow-same-origin"
      loading="lazy"
    ></iframe>


  )
}

export default OneHundredDayCssCard
