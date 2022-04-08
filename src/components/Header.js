import React from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';

function Header( {mode, setMode} ) {

    const toggle = () => {
        setMode(!mode)
        console.log('i clicked')
    }

    return (
        <div className={" px-3 md:px-5 lg:px-28 h-14 bg-gray-700 shadow-md flex justify-between justify-center items-center " + ( mode ? ' bg-white ' : 'null')} >
            <h1 className={" text-white text-lg lg:text-xl font-bold " + ( mode ? ' text-black ' : 'null')}>
                Where in the world?
            </h1>

            {/* dark or light mode */}
            {
                mode ? 
                (<button className=" flex gap-2 cursor-pointer items-center text-black" onClick={toggle}>
                    <BsSun />
                    <p className='text-sm font-semibold'>Light Mode</p>
                </button>) : 
                (<button className=" flex gap-2 cursor-pointer items-center text-white"  onClick={toggle}>
                    <FaMoon />
                    <p className='text-sm font-semibold'>Dark Mode</p>
                </button>)
            }
        </div>
    )
}

export default Header;
