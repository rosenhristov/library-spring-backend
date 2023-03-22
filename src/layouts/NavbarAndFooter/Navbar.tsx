import React from "react";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark main-color py-3">
            <div className='container-fluid'>
                <span className='navbar-brand'>Club-35</span>
                <button type='button' className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
                        arial-controls='navbarNavDropDown' aria-expanded='false' aria-label='Toggle Navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div id='navbarNavDropdown' className='collapse navbar-collapse'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Search books</a>
                        </li>
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item m-1'>
                            <a type='button' className='btn btn-outline-light' href='#'>Log in</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}