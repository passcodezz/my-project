import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import Slide from "./Slide";
import TestimonialApi from "./TestimonialApi";

const Testimonial = () => {
  const [data, setData] = useState(TestimonialApi);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
      <section className="Testimonial" id="clients">
        <div className="container">
          <div className="heading text-center">
            <div className="tapbar">
              <div className="tapbar-Subtitle">
                <b>PRODUCTS & SERVICE</b>
              </div>
            </div>
          </div>
          <div className="slide">
            {/*{TestimonialApi.map((val, index) => {
              return <Slide key={index} image={val.image} design={val.design} name={val.name} offcer={val.offcer} post={val.post} date={val.date} desc={val.desc} />
            })}*/}

            {data.map((value, valueIndex) => {
              return (
                <Slide
                  key={value.id}
                  image={value.image}
                  {...value}
                  valueIndex={valueIndex}
                  index={index}
                />
              );
            })}

            <div className="slide_button">
              <button
                className="btn_shadow prev_btn"
                onClick={() => setIndex(index - 1)}
              >
                <i class="fas fa-arrow-left"></i>
              </button>
              <button
                className="btn_shadow next_btn"
                onClick={() => setIndex(index + 1)}
              >
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;