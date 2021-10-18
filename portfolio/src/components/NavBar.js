import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'


export default function NavBar() {
    return (
        <header style={{backgroundColor: "#d6d3d1"}}>
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink
                        to="/"
                        exact
                        activeClassName="text-black"
                        className="inline-flex items-center py-6 px-3 mr-4 text-gray-900 hover:text-gray-500 text-4xl font-bold cursive tracking-widest">
                        Samy
                    </NavLink>
                    <NavLink
                        to="/project"
                        activeClassName="text-black-900 bg-gray-200"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-900 hover:text-gray-500"
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeClassName="text-black-900 bg-gray-200"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-900 hover:text-gray-500"
                    >
                        About Me!
                    </NavLink>
                    <a 
                        href="mailto:samygadi12@gmail.com"
                        activeClassName="text-black-900 bg-gray-200"
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-900 hover:text-gray-500"
                    >
                        Contract Me
                    </a>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon
                        url="https://www.linkedin.com/in/samy-gadi-83b00317a/"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }} />

                    <SocialIcon
                        url="https://github.com/samyg12"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}
