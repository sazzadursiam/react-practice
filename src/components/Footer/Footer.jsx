import React from 'react'
import './footer.css'

const Footer = () => {
    const today = new Date();
    return (
        <footer>
            <p className='copyright'>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer