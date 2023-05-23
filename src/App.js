import { useEffect } from 'react'
import './App.css'
import data from './data'
import ProjectCard from './ProjectCard'
import OneHundredDayCssCard from './OneHundredDayCssCard'
import FrontEndMentorCard from './FrontEndMentorCard'

function App() {
  // const [cardData, updateCardData] = useState([
  //   {
  //     cardType: 'ProjectDard',
  //     cardData: [],
  //   },
  //   {
  //     cardType: 'FrontEndMentorCard',
  //     cardData: [],
  //   },
  //   {
  //     cardType: 'OneHundredDayCssCard',
  //     cardData: [],
  //   },
  // ])

  // useEffect(() => {
  //   fetch(`https://myapi-a0j0.onrender.com/api/pages`)
  //     // fetch(`http://192.168.1.173:8080/api/pages`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       return updateCardData(data.data)
  //     })
  // }, [])

  //  If I ever get an API that doesn't go to sleep, replase below with above
  const cardData = data.pageData

  const projectCard = cardData[0].cardData.map((value, id) => (
    <ProjectCard
      key={id}
      name={value.name}
      image={value.image}
      description={value.description}
      link={value.link}
      source={value.source}
      specification={value.specification}
      specificationText={value.specificationText}
    />
  ))

  const frontEndMentorCard = cardData[1].cardData.map((value, id) => (
    <FrontEndMentorCard
      key={id}
      name={value.name}
      image={value.image}
      title={value.title}
      link={value.link}
    />
  ))

  const hundredDayCssCard = cardData[2].cardData.map((value, id) => (
    <OneHundredDayCssCard key={id} src={value.src} />
  ))

  let heaederSize, frontEndHeaderSize, cssHeaderSize

  useEffect(() => {
    const onScroll = () => {
      let header = document.getElementById('App-header')
      let frontEndHeader = document.getElementById('FrontEnd-App-header')
      let cssHeader = document.getElementById('CSS-App-header')

      if (!cssHeaderSize) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        cssHeaderSize = cssHeader.offsetTop
      }

      if (!heaederSize) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        heaederSize = header.offsetTop
      }
      if (!frontEndHeaderSize) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        frontEndHeaderSize = frontEndHeader.offsetTop
      }

      if (window.pageYOffset > cssHeaderSize) {
        cssHeader.classList.add('sticky')
        frontEndHeader.classList.remove('sticky')
        header.classList.remove('sticky')
      } else if (window.pageYOffset > frontEndHeaderSize) {
        frontEndHeader.classList.add('sticky')
        header.classList.remove('sticky')
        cssHeader.classList.remove('sticky')
      } else if (window.pageYOffset > heaederSize) {
        header.classList.add('sticky')
        frontEndHeader.classList.remove('sticky')
        cssHeader.classList.remove('sticky')
      } else {
        header.classList.remove('sticky')
        frontEndHeader.classList.remove('sticky')
        cssHeader.classList.remove('sticky')
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  })

  useEffect(() => {
    const onResize = () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      frontEndHeaderSize = ''
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cssHeaderSize = ''
    }
    window.addEventListener('resize', onResize, { passive: true })

    return () => window.removeEventListener('resize', onResize)
  })

  return (
    <div className="App">
      <div className="App-AboutBody">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <h1>
          Hello, my name is <span className="aboutName">Bill McDavitt.</span>
        </h1>
        <h2>I'm a full-stack web developer.</h2>
        <h2>
          <a className="aboutWorkLink" href="#App-header">
            Here is some of my work
            <i className="fa-solid fa-arrow-right" />
          </a>
        </h2>
      </div>


      <div className="App-body">
        <header className="App-header" id="App-header">
          Work Samples
        </header>
        <div className="cardHolder">{projectCard}</div>

        <header className="App-header" id="FrontEnd-App-header">
          <a href="https://www.frontendmentor.io/profile/BMcdavitt">
            Front End Mentor Challenges
          </a>
        </header>
        <div className="cardHolder">{frontEndMentorCard}</div>

        <header className="App-header" id="CSS-App-header">
          <a href="https://100dayscss.com/progress/bmcdavitt/">CSS Challenges</a>
        </header>
        <div className="cardHolder">{hundredDayCssCard}</div>

      </div>
    </div>
  )
}

export default App
