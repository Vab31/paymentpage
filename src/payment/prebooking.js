import React from 'react'
import img from './2125622.jpg'
import logo from './logob.png'

export default function Prebooking() {
  return (
    <div>
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">CODEIOX</h2>
         */}
         <img src={logo}/>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Mentor Led Slot Booking</h1>
        <div className="flex mb-4">
          <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
       
        </div>
        <p className="leading-relaxed mb-4">Program type: <b>Training Program</b><br/>

Registration fee: INR 1,000/- *<br/>

*Pre-register by paying an amount of <b>INR 1,000/-</b> now. And opt to pay the remaining amount within next 7 
days from today or before the commencement of the program whichever is the earliest.</p>
<b>Steps of Registration</b><br/>
1. Click on Register button below<br/>
2. Enter Name and Email<br/>
3. Share Screenshot with Counsellor<br/>
Term and Conditions<br/>
You agree to share information entered on this page with Codeiox and Instamojo, adhering to applicable laws.
    
        <div className="flex mt-3">
          <span className="title-font font-medium text-2xl text-gray-900"> ₹1000</span>
          <a className='ml-auto' href='https://imjo.in/MKFVQm'>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Register</button>
          </a>
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={img}/>
    </div>
  </div>
</section>
    </div>
  )
}
