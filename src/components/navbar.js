import react from 'react';
import './styles/navbar.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'



const Navbar = () => {
    const [firstvar, setvar] = useState('')
    

    const updatesearch = (e)=> {
        setvar(e.target.value);
    }
    return (
        <div className="nav">
            <p className='nav-text'>Categories</p>
            <form action="">
            <div className="input-wrapper">
            <input type="text" placeholder='search food' value ={firstvar.toLowerCase()} onChange={updatesearch} required/>
            </div>
                <Link to={`/Result/${firstvar}`}><button>submit</button></Link>
            </form>
        </div>
    )
}
// class navbar {

// }
export default Navbar;