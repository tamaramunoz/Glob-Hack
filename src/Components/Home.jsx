import React, { Fragment } from 'react'
import Navbar from './Navbar'
import "./Home.css";

const Home = () => {
    return (
        <Fragment>
        <div>
            <header className="headerHome">
          <h1>Ficha Médica</h1>
        </header>
            
            <Navbar />
        </div>
        </Fragment>
    )
}

export default Home
