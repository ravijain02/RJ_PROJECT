import { Link } from 'react-router-dom'
import '../styles/header.css'


const Header = () => {


    return (
        <>
        <header>
            <div className="container header">
                <div className="mainheader">
                    <div className="cntleft">
                        {/* <img src="logo.png" alt="EduQuenchy logo" /> */}
                        <span>EduQuenchy</span>
                    </div>
                    <div className='cntcenter'>
                        <ul className="main_menu mob">
                            <li>Home</li>
                            <li>Abouts</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='cntright'>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header