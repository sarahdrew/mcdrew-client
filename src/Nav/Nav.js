import React from 'react';
import { Link } from "react-router-dom";


export default class Nav extends Component {
    render() {
        return (
            <>
                <div className="Nav">
                    <div className="links">
                        <Link to='/'>Home </Link> |
                    <Link to='registration'>Register</Link> |
                    <Link to="about">About</Link>


                    </div>
                </div>
            </>

        )
    }
}