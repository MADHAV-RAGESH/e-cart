import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Header() {
  const wishlistArray = useSelector((state)=>state.wishlist)
 const cartArray = useSelector((state)=>state.Cart)
  const [show , setShow] = useState(true)

  return (
    <nav className='bg-violet-900 p-5 text-white w-full'>
      <div className='md:flex item-center md:px-10 px-5'>
        <div className='flex w-full'>
          <Link to={'/'}>
            <h2 className='text-3xl'> <FontAwesomeIcon icon={faCartShopping} className="me-3" />E-Cart</h2>
          </Link>

          <button onClick={()=>setShow(!show)} className='border border-white p-3 text-white ms-auto rounded md:hidden'><FontAwesomeIcon icon={faBars} /></button>
        </div>

        {show && <ul className='flex mt-5 md:hidden'>
          <Link to={'/wishlist'}>
            <li><button className='border border-white p-3 rounded hover:bg-white hover:text-violet-900 flex'><FontAwesomeIcon icon={faHeart} style={{ color: "#eb0f0f", }} className="me-2" />Wishlist <span className='border bg-white px-1 rounded text-black '>{wishlistArray.length}</span></button></li>
          </Link>

          <Link to={'/cart'}>
            <li><button className='border border-white p-3 rounded  hover:bg-white hover:text-violet-900 ms-3 flex'><FontAwesomeIcon icon={faCartShopping} style={{ color: "#05e62a", }} className="me-3" /> Cart <span className='border bg-white px-1 rounded text-black '>{cartArray.length}</span></button></li>
          </Link>
        </ul>
        }


        <ul className='ms-auto md:flex hidden'>
          <Link to={'/wishlist'}>
            <li><button className='border border-white p-3 rounded hover:bg-white hover:text-violet-900 flex'><FontAwesomeIcon icon={faHeart} style={{ color: "#eb0f0f", }} className="me-2" />Wishlist <span className='border bg-white px-1 rounded text-black '>{wishlistArray.length}</span></button></li>
          </Link>

          <Link to={'/cart'}>
            <li><button className='border border-white p-3 rounded  hover:bg-white hover:text-violet-900 ms-3 flex'><FontAwesomeIcon icon={faCartShopping} style={{ color: "#05e62a", }} className="me-3" /> Cart <span className='border bg-white px-1 rounded text-black '>{cartArray.length}</span></button></li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Header