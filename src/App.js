import { useEffect } from 'react'
import './App.css'
import ProjectCard from './ProjectCard'

function App() {
  useEffect(() => {
    fetch(`https://myapi-a0j0.onrender.com/api/pages`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      }, [])
  })

  return (
    <div className="App">
      <header className="App-header">Work Samples</header>
      <div className="App-body">
        <div className="cardHolder">
          <ProjectCard
            name="BoostX"
            image="boostx.png"
            description="This is an exmaple of a website built based on the below Figma design.  This is a fully responsive webpage deveoped using react."
            link="https://bmcdavitt.github.io/boostx/"
            source="https://github.com/BMcdavitt/boostx/tree/master/src"
            specification="https://www.figma.com/file/JDVVrItlNBFp4jUC5hGRSX/BoostX?node-id=13%3A858"
            specificationText="View Figma File"
          />
          <ProjectCard
            name="Drawing Tool"
            image="konva.png"
            description="This project uses the Konva library to create a simple drawing tool.  This implements both mouse and touch support."
            link="https://bmcdavitt.github.io/annotator/"
            source="https://github.com/BMcdavitt/annotator"
          />
          <ProjectCard
            name="React Blackjack"
            image="blackjack.png"
            description="After learning react I created a simple blackjack game to reinforce my new skills."
            link="https://bmcdavitt.github.io/reactBlackjack/"
            source="https://github.com/BMcdavitt/reactBlackjack/tree/master/src"
          />
          <ProjectCard
            name="Quizzical"
            image="quizzical.png"
            description="A simple quiz game.  This project makes use of the Open Trivia Database RestfulAPI "
            link="https://bmcdavitt.github.io/reactQuiz/"
            source="https://github.com/BMcdavitt/reactQuiz/tree/master/src"
          />
        </div>
      </div>
    </div>
  )
}

export default App
