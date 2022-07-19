import React from "react";
import TestimonialApi from "./TestimonialApi";
import pic from "./image/Conveyor.png";
import pic1 from "./image/1.png";

const Slide = ({
  id,
  image,
  design,
  name,
  offcer,
  post,
  date,
  desc,
  valueIndex,
  index,
}) => {
  let position = "nextSlide";
  if (valueIndex === index) {
    position = "activeSlide";
  }
  if (
    valueIndex === index - 1 ||
    (index === 0 && valueIndex === TestimonialApi.length - 1)
  ) {
    position = "lastSlide";
  }

  return (
    <>
      <article className={`d_flex ${position}`} key={id}>
        <div  className={position==1} key={id==1}>
        <div className="left ">
          <div className="img">
            <img src={pic} alt="" />
          </div>
          <div className="details mtop">
            {/* <span className='primary_color'>{design}</span>
            <h2>{name}</h2>
            <label>{offcer}</label> */}

            <h2>Mevine Thoda</h2>
            <label>Marketing Officer</label>
          </div>
        </div>

        <div className="right">
          <div className="icon">
            <div className="quote">
              {/* <i class='fal fa-quote-right'></i> */}
            </div>
          </div>

          <div className="content box_shodow mtop">
            {/* <h1>{post}</h1>
            <h3>{date}</h3>
            <p>{desc}</p> */}
            {/* <h1>CEO - Marketing</h1> */}
            <h3>คอนเวเยอร์ (Conveyor System)</h3>
            <p>
              ผู้ผลิต จำหน่าย และนำเข้า
              เครื่องจักรอุปกรณ์และนวัตกรรมด้านการขนส่งลำเลียง ระบบจัดเก็บสินค้า
              ระบบชั้นวางสินค้าอุตสาหกรรม และงานโลจิสติกส์ สร้างไลน์การผลิต
              (Production Line) ไลน์คอนเวเยอร์ (Conveyor line) โดยมืออาชีพ
              อย่างครบวงจรตั้งแต่เริ่มต้นจนเสร็จสิ้น
              ติดตั้งและออกแบบสายพานลำเลียง ตามแบบทุกชนิด ทุกสเป็ค ทุกรูปแบบ
              บริการตัดต่อสายพาน pvc belt conveyer lfda pvc pu rubber assembly
              line belt conveyer (pvc plastic) wire mesh belt conveyer
              (stainless steel) สายพานลำเลียง (conveyer belt) สายพานกะพ้อ
              elevator belt mini belt conveyer wire belt
            </p>
          </div>
        </div></div>
      </article>
      
      

      {/*
	    <img src='https://rainbowit.net/html/inbio/assets/images/testimonial/final-home--4th.png' alt='' />
        <span className='primary_color'>NCD - DESIGN</span>
        <h2>Mevine Thoda</h2>
        <label>Marketing Officer</label>
        
        <i class='fal fa-quote-right'></i>
        <i class='fas fa-arrow-left'></i>
        <i class='fas fa-arrow-right'></i>
        <h1>CEO - Marketing</h1>
        <h3>Thoda Department - Mar 4, 2018 - Aug 30, 2021</h3>
        <p>Marcent Of Vanice and treatment. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris</p>
     */}
    </>
  );
};

export default Slide;
