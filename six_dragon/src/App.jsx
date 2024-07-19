import { useState } from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './style/App.css'
import barImg from "./img/bar_white.png"
import careImg from "./img/care.png"
import earthImg from "./img/earth_white.png"
import JOImg from "./img/job_opening.png"
import JSImg from "./img/job_search.png"
import mapImg from "./img/map.png"
import leafImg from "./img/leaf.png"
import searchImg from "./img/search1.png"
import SearchPage from "./pages/SearchPage"
import JobOpeningPage from './pages/JobOpeningPage'
import JobSearchPage from './pages/JobSearchPage'

function App() {

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className='app'>
      <Router>
        <div className='header'>
          <div className='titleCover'>
            <button className='profileBar' onClick={toggleMenu}><img src={barImg} /></button>
            <Link to={"/"}>사이트 이름 뭘로 하지?</Link>
            <img src={leafImg} />
          </div>
          <div className={`profileCover ${menuVisible ? 'visible' : ''}`}>
            <Link to={""}>로그인</Link>
            <Link to={""}>내 프로필</Link>
            <Link to={""}>메세지</Link>
          </div>
        </div>
        <div className='main'>
          <div className='nav'>
            {/* <Link className='navElement' to={""}>
              <img src={earthImg}/>
              <p>커뮤니티</p>
            </Link>
            <Link className='navElement' to={""}>
              <img src={mapImg}/>
              <p>지역별</p>
            </Link>
            <Link className='navElement' to={""}>
              <img src={careImg}/>
              <p>간병인</p>
            </Link> */}
            <Link className='navElement' to={"/search"}>
              <img src={searchImg} />
              <p>검색</p>
            </Link>
            <Link className='navElement' to={"/jobOpening"}>
              <img src={JOImg} />
              <p>구인해요</p>
            </Link>
            <Link className='navElement' to={"/jobSearch"}>
              <img src={JSImg} />
              <p>구직해요</p>
            </Link>
          </div>
          <Routes>
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/jobOpening" element={<JobOpeningPage/>} />
            <Route path="/jobSearch" element={<JobSearchPage/>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
