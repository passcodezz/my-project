import React, { useState } from "react"

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.date}</span>
          {/*<label>
            <i className='far fa-heart'></i> {props.date}
          </label>*/}
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title_one}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal modal-blog'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text right'>
              <span>{props.date}</span>
              <h1>{props.title_one}</h1>
              <p>{props.desc_one}</p>

              <p>{props.title_two}</p>
              <img src={props.image2} alt='' />
              <p>{props.desc_two}</p>

              <p>{props.title_three}</p>
              <p>{props.desc_three}</p>
              <p>{props.desc_four}</p>
              <p>{props.desc_five}</p>
              <img src={props.image3} alt='' />
              <p>{props.desc_six}</p>
              <img src={props.image4} alt='' />
              <p>{props.desc_seven}</p>

              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fas fa-times'></i>
              </button>

              {/*---------Leave Message----------  */}
              {/* <div className='contact mtop'>
                <h1>Leave a Reply</h1>

                <form className='blog_contact d_flex'>
                  <div className='left'>
                    <input type='text' placeholder='Name' />
                    <input type='email' placeholder='Email' />
                    <input type='text' placeholder='Website' />
                    <button className='btn_shadow'>SUBMIT NOW</button>
                  </div>
                  <div className='right'>
                    <textarea cols='30' rows='12' placeholder='Comment'></textarea>
                  </div>
                </form>
              </div> */}
              {/*---------Leave Message----------  */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
