import './ProjectCard.css';
import React from "react";


function ProjectCard(props) {


    return (
        <div className="ProjectCard">
            <img className="cardImage" src={"./images/" + props.image} alt=""></img>
            <h2 className="cardTitle">{props.name}</h2>
            <p className="cardDescription">{props.description}</p>
            {specificationButton(props)}
            <button className="launchApp" onClick={() => launchApp(props.link)}>Launch Project</button>
            <button className="launchSource" onClick={() => launchApp(props.source)}>View Source on Github</button>
            
        </div>
    )
}

function launchApp(link) {
    window.open(link)
}

function specificationButton(props)
{
    // return <button className="specification">{props.specificatonText}</button>
    if(props.specification) {
        return <button className="specification" onClick={() => launchApp(props.specification)}>{props.specificationText}</button>
    }

}

export default ProjectCard  