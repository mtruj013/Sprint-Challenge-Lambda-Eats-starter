import React from 'react'
import {Link} from "react-router-dom"
import Form from "./Form"

const Home = ()  => {
    return(
        <div className="form-button">
            <Link to ={"./Form"}>
                <div className="placr-order">Order Here</div>
            </Link>
        </div>
    )
}

export default Home;