import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
       <div  className="ui secondary pointing menu">
       <Link to="/" className="item">
            Stream Skillz
       </Link>
       <div className="right menu">
            <Link to="/streams/show" className="item">
                All Streams
            </Link>
        </div>
       </div>
    )
}


export default Header;
