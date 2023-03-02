import React from 'react'
const Nav = () => {
  return (
    <div className='main-content'>
    <nav className="navbar navbar-expand-lg  bg-dark " >
        <div className="container-fluid">
          <a className="navbar-brand"style={{color:"white"}}>News</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
          </div>
        </div>
      </nav></div>
  )
}

export default Nav