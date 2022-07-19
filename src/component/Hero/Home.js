import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import logo from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>บริษัท ภพ ออโตเมชั่น จำกัด</h3>
            <h2>
              PHOP
              <span>
                <Typewriter words={[" AUTOMATION CO.,LTD."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>ดำเนินธุรกิจเกี่ยวกับ การผลิตเครื่องจักร Partเครื่องจักร
                ชิ้นส่วน อะไหล่ รวมถึง Jig Test และงานประกอบเครื่องปรับอากาศ
                ประเภท Air Cooled Chiller / Water Cooled Chiller รวมถึงระบบไฟฟ้า
                ระบบคอนโทรล ระบบคอนโทรลควบคุมเครื่องจักร</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>       
                  <button className='btn_shadow'>
                  <a href="https://www.facebook.com/Phopautomation-1201319820025629/" target="_blank" rel="noreferrer">
                  <i class="fab fa-facebook-f"></i></a>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fa fa-envelope'></i>
                  </button>
                  {/* <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button> */}
                </div>
              </div>
              {/* <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div> */}
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
            <img src='https://drive.google.com/uc?id=1sGabYxN2rK1vRHEw4np4yfBFJ5osxkgL' alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
