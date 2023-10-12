import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({logOut,getfromSession}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
  <div className="container-fluid">
    <Link className="navbar-brand" to={'/'}>Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    {getfromSession && <>
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={'/movies'}>Movies</Link>
                </li>
        <li className="nav-item dropdown">
          
        <Link className="nav-link active" aria-current="page" to={'/tv'}>Tvshow</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={'/addfav'}>Favourites</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={'/about'}>About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={'/network'}>Network</Link>
        </li>
    </>}

      
      </ul> 
      <ul className="navbar-nav mb-2 mb-lg-0">
      {getfromSession ?<>
        <li className="nav-item order-last">
          <span style={{
            cursor: 'pointer'
          }} onClick={logOut} className="nav-link active" aria-current="page" >Logout</span>
          </li>
          <li className='nav-item d-flex align-items-center order-last  order-lg-first'>
                <i className='fab mx-2 fa-facebook '></i>
                <i className='fab mx-2 fa-instagram '></i>
                <i className='fab mx-2 fa-twitter '></i>
                <i className='fab mx-2 fa-soundcloud '></i>
            </li>
      </>

          :
          <>
           <li className='nav-item d-flex align-items-center order-last  order-lg-first'>
                <i className='fab mx-2 fa-facebook '></i>
                <i className='fab mx-2 fa-instagram '></i>
                <i className='fab mx-2 fa-twitter '></i>
                <i className='fab mx-2 fa-soundcloud '></i>
            </li>
        <li className="nav-item  order-first ">
          <Link className="nav-link active" aria-current="page" to={'/Resister'}>Resister</Link>
        </li>
        <li className="nav-item order-first ">
        <Link className="nav-link active" aria-current="page" to={'/login'}>Login</Link>
                </li>
          </>
          }
        
           
        
      </ul>
    </div>
  </div>
</nav>
  )
}
