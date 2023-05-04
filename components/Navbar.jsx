import React from "react"
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className = 'fixed w-full h-22 shadow-xl z-[100]'>
            <div className = 'flex justify-between items-center w-full h-full px-2 2xl:px16'>
            <Image src ="/../public/assets/final-header-logo.png" alt="/" width='300' height='100' />
            
            </div>
        </div>

    )
}
export default Navbar