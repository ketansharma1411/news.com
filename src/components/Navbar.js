import React from 'react'

import styled from 'styled-components'
import{Link,useLocation} from 'react-router-dom'
export default function Navbar(props) {
    const location = useLocation();
    
    return (
        <Main>
            {/* {console.log(props)} */}
            <div>
                <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode}`} style={{backgroundColor:props.mode==='light'?'white':'#212529'}}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsTera</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname==='/business'?'active':''}`} to="/business" >Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname==='/entertainment'?'active':''}`} to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname==='/'?'active':''}`} to="/">Top</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname==='/health'?'active':''}`} to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname==='/science'?'active':''}`} to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname==='/sports'?'active':''}`} to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname==='/technology'?'active':''}`} to="/technology">Technology</Link>
                                </li>
                            </ul>

                            <div className='moon' onClick={props.toogle} style={{border:props.mode==='dark'?'1px solid white':'1px solid #212529'}}>
                                <i className="fa-solid fa-moon" style={{transform:props.mode==='light'?'rotate(0deg)':'rotate(360deg)'}}></i>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
        </Main>
    )
}

const Main=styled.div`
.moon{
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #212529;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  margin-top: 10px;
}
.moon i{
  transition: 0.5s ease-in-out;
  cursor: pointer;

}
`