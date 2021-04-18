import {Link, useHistory} from 'react-router-dom';

const NavBar = () => {
    const history = useHistory();

    const back = () => {
        history.goBack();
    }


    return (
        <div class="ui breadcrumb">
        <nav className="navbar">
            <a class section>
                <Link className='navbar-link' to='/'>Home</Link>
            </a>
            <div className='divider'> / </div>
            <a class="section">
                <Link className='navbar-link' to='/timeline'>Timeline</Link>
            </a>
            {/* <li>
                <Link className='navbar-link' to='/ww1map'>World War One Map</Link>
            </li> */}
        </nav>
        </div>
    )
}

export default NavBar;