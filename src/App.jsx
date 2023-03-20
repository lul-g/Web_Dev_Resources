import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import LinkCard from './components/learning/learning_card'
// import LearningCont from './components/learning/learning_cont'
import Header from './pages/Header'
import Home from './pages/Home'
import Footer from './pages/Footer'
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
              <Route path="advice" element={<CardsContainer name="advice" data={data.advice}/>}/>  
              <Route path="learning" element={<CardsContainer name="learning" data={data.learning_res}/>} />
              <Route path="content" element={<CardsContainer name="content" data={data.content_res}/>} />
              <Route path="css_simp" element={<CardsContainer name="css_simplifier" data={data.css_simplifiers}/>} />
              <Route path="extensions" element={<CardsContainer name="extensions" data={data.extensions}/>} />
              <Route path="docs" element={<CardsContainer name="docs" data={data.documentation}/>} />
              <Route path="tools" element={<CardsContainer name="tools" data={data.tools}/>} />
              <Route path="others" element={<CardsContainer name="others" data={data.others}/>} />
          </Routes>
          <Footer />
      </Router>
    </div>
  )
}

export default App