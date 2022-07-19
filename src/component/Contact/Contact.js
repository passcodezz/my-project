import React, { useState } from "react"
import contact1 from "./contact1.png"
import contact2 from "../pic/logo-new.png"
import contact3 from "../pic/map.jpg"
import "./Contact.css"

const Contact = () => {
  // const [data, setData] = useState({
  //   fullname: "",
  //   phone: "",
  //   email: "",
  //   subject: "",
  //   message: "",})

  // const InputEvent = (event) => {
  //   const { name, value } = event.target

  //   setData((preVal) => {
  //     return {
  //       ...preVal,
  //       [name]: value,
  //     }
  //   })
  // }

  // const formSubmit = (event) => {
  //   event.preventDefault()
  //   alert(
  //     `My name is ${data.fullname}. 
	// My phone number is ${data.phone}. 
	// My email address is ${data.email}. 
	// My Subject on  ${data.subject}. 
	// Here is my message I want to say : ${data.message}. 
	// `
  //   )
  // }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>ติดต่อเรา Contact</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact2} alt='' />
                </div>
                <div className='details'>
                  <p>ติดต่อ</p>
                  <p>ที่อยู่: 41/14 ม.12 ต.ลำลูกกา อ.ลำลูกกา จ. ปทุมธานี 12150</p> <br />
                  <p>Phone: 087-260-7999, 085-108-4246</p>
                  <p>Email: phopautomation@gmail.com</p> <br />
                  {/* <span>FIND WITH ME</span> */}
                  {/* <div className='button f_flex'>
                    <button className='btn_shadow'>
                      <i className='fab fa-facebook-f'></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-instagram'></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-twitter'></i>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
            <div className='imgs'>
                  <img src={contact3} alt='' />
                </div>
              {/* <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
