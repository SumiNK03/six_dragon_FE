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
            <img src={leafImg}/>
          </div>
          <div className={`profileCover ${menuVisible ? 'visible' : ''}`}>
            <Link to={""}>로그인</Link>
            <Link to={""}>내 프로필</Link>
            <Link to={""}>메세지</Link>
          </div>
        </div>
        <div className='main'>
          <div className='nav'>
            <Link className='navElement' to={""}>
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
            </Link>
            <Link className='navElement' to={""}>
              <img src={JOImg}/>
              <p>구인해요</p>
            </Link>
            <Link className='navElement' to={""}>
              <img src={JSImg}/>
              <p>구직해요</p>
            </Link>
          </div>
          <form className='searchForm'>
            <input type='text' className='search' placeholder='지역 또는 간병인 이름으로 검색하세요.' />
            <input type='submit' className='sub' value={""}></input>
          </form>
          <Routes>
            <Route/>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
