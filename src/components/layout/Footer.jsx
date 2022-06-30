import React from 'react'

export default function Footer() {
    const footerYear = new Date().getFullYear()
    return (
        <footer className='footer p-10 bg-neutral text-info footer-center'>
            <p>Copyright &copy; {footerYear} All rights reserved</p>
        </footer>
    )
}
