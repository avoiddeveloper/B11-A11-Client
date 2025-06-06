import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/icons/lms-icon.png';
import AuthContext from '../../context/AuthContext/AuthContext';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/all-books"}>All Books</NavLink></li>
        <li><NavLink to={"/add-books"}>Add Books</NavLink></li>
        <li><NavLink to={"/borrowed-book"}>Borrowed Book</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="flex items-center">
                    <img src={logo} alt="Library management System" className='w-22' />
                    <h2 className='text-3xl font-bold'>LMS</h2>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">

                {user ? <>
                    <div className='hidden md:flex items-center gap-1'>
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <div>{user.displayName}</div>
                    </div>
                    <button onClick={signOutUser} className="btn">Sign Out</button>
                </> : <>
                    <Link to={"/sing-in"} className="btn">Sign In</Link>
                    <Link to={"/sing-up"} className="btn">Sign Up</Link>
                </>}


            </div>
        </div>
    );
};

export default Navbar;