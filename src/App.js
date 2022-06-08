import { useEffect } from 'react';
import './App.css';
import ProjectCard from './ProjectCard';

function App() {

  useEffect(() => {
    fetch(`https://myapi-a0j0.onrender.com/api/pages`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
        },[])
  })

  
  return (
    <div className="App">
      <header className="App-header">
        Work Samples
      </header>
      <div className="App-body">
        <div className="cardHolder">
          <ProjectCard 
            name="BoostX"
            image="boostx.png"
            description="This is an exmaple of a website built based on the below Figma design.  This is a fully responsive webpage deveoped using react."
            link="https://bmcdavitt.github.io/boostx/"
            source="https://github.com/BMcdavitt/boostx/tree/master"
            specification="https://www.figma.com/file/JDVVrItlNBFp4jUC5hGRSX/BoostX?node-id=13%3A858"
            specificationText="View Figma File"
          />
          <ProjectCard 
            name="Simple Image Annotation"
            image="kovana.png"
            description="This project uses the Kovana library to create a simple image annotation tool.  This implements both mouse and touch support."
            link="https://bmcdavitt.github.io/mypage/"
            source="https://github.com/BMcdavitt/mypage"
          />
          <ProjectCard 
            name="React Blackjack"
            image="blackjack.png"
            description="After learning react I created a simple blackjack game to reinforce my new skills."
            link="https://bmcdavitt.github.io/reactBlackjack/"
            source="https://github.com/BMcdavitt/reactBlackjack/tree/master"
          />
        </div>
      </div>
    </div>
  );
}

export default App
