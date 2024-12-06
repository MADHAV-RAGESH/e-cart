import { faBackward, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,  useNavigate } from 'react-router-dom'
import { emptyCart, removeCartitem } from '../redux/slices/cartslice'


function Cart() {
  const [total,settotal] = useState()

 const dispatch = useDispatch()

 const navigate = useNavigate()

  const cartArray = useSelector((state)=>state.Cart)
  console.log(cartArray);
  
  const getTotal = ()=>{
    if(cartArray.length>0){
    settotal ( cartArray?.map((item)=>item.price)?.reduce((n1,n2)=>n1+n2))
    }
  }

  const handleCheckout = ()=>{
    alert("Order placed Successfully")
    dispatch(emptyCart())
    navigate('/')
  }

  useEffect(()=>{
    getTotal()

  },[cartArray])
  return (
    <>
    <div className='pt-32'>
    <h1 className='text-center text-violet-600 text-4xl mb-5 mt-5'>Cart</h1>

  { cartArray?.length>0 ?

   <div className="md:grid grid-cols-[2fr_1fr] m-10">
      <div className='p-3'>
        <table className='w-full border border-gray-600 shadow-lg text-center'>
          <thead>
            <tr>
              <th className='border border-gray-200 p-3 bg-violet-700 text-white'>#</th>
              <th className='border border-gray-200 p-3 bg-violet-700 text-white'>Title</th>
              <th className='border border-gray-200 p-3 bg-violet-700 text-white'>Image</th>
              <th className='border border-gray-200 p-3 bg-violet-700 text-white'>Price</th>
              <th className='border border-gray-200 p-3 bg-violet-700 text-white'>Action</th>
            </tr>
          </thead>

          <tbody>
           {cartArray?.map((item,index)=>(
              <tr>
              <td className='p-3 border border-gray-200'>{index+1}</td>
              <td className='p-3 border border-gray-200'>{item.title}</td>
              <td className='p-3 border border-gray-200 flex justify-center'> <img src={item.image} style={{width:"150px",height:"100px" }} alt="" /> </td>
              <td className='p-3 border border-gray-200 text-center'> ${item.price} </td>
              <td className='p-3 border border-gray-200 text-center'><button onClick={()=>dispatch(removeCartitem(item?.id))} className='bg-red-700 text-white py-3 px-5 rounded'><FontAwesomeIcon icon={faTrash} /> </button> </td>
            </tr>
           ))
           }
          </tbody>
        </table>
      </div>

     
      <div className='pt-5 px-10'>
        <div className='shadow-lg p-5'>
          <h1 className='text-center text-3xl'>Cart Summary</h1>
          <p className='mt-4 text-xl'>Total number of products : {cartArray?.length}</p>
          <p className='mt-4 text-xl'>Grand Total : $ {total}</p>
          <button  onClick={handleCheckout} className='w-full bg-green-600 text-white p-3 mt-5 hover:border hover:bg-white hover:border-green-600 hover:text-green-500'>Check Out</button>
        </div>

      </div>
   
      

    </div>
    :
    <div className='w-full pt-10 md:grid grid-cols-3 mt-4 mb-4'>
    <div></div>
    <div>
      <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="" className='w-full h-auto' />
     <Link to={'/'}> <button className='bg-green-600 text-white p-3 mt-5 hover:border hover:bg-white hover:text-green-600 hover:border-green-700'><FontAwesomeIcon icon={faBackward} className='me-2' />Back Home</button></Link>
    </div>
    <div></div>

   </div>}


    </div>
    
    </>
  )
}

export default Cart