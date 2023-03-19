import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import LinkCard from './components/learning/learning_card'
// import LearningCont from './components/learning/learning_cont'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'

import CardsContainer from './pages/CardsContainer'

import './App.css'

import links from './assets/data/links.json'
function App() {
  const [data, setData] = useState(links)

  return (
    <div className="App">
        <Router>
          <Header />
          <Routes>
              <Route path="*" element={<Home/>}/>  
              <Route path="/" element={<Home/>}/>  
              <Route path="home" element={<Home />} />  
              <Route path="learning" element={<CardsContainer name="learning" data={data.learning_res}/>} />
              <Route path="content" element={<CardsContainer name="content resources" data={data.content_res}/>} />
          </Routes>
          <Footer />
      </Router>
    </div>
  )
}

export default App