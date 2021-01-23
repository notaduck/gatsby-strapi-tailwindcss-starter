import React from 'react'
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {

    const iconSize = '1.5rem'

    const links = [
        {
            slug: 'https://github.com/notaduck/',
            icon: <FiGithub size={iconSize} />
        },
        {
            slug: 'https://www.linkedin.com/in/daniel-guldberg-aaes-12145b180/',
            icon: <FiLinkedin size={iconSize} />
        },
        {
            slug: 'https://www.facebook.com/daniel.guldberg.aaes/',
            icon: <FiFacebook size={iconSize} />
        },
    ]

    return (
        <footer className='flex justify-between p-4'>
            <div className='flex space-x-4'>
            {links.map(link => (
            <div>
                <a href={link.slug}> {link.icon} </a>
            </div>

            ))}
            </div>
            
            <div>
          © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>

            </div>
        </footer>
    )
}

export default Footer