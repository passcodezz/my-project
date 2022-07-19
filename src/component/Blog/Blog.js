import React from "react";
import "../Portfolio/Portfolio.css";
import "../Blog/Blog.css";
import Card from "./Card";
import BlogApi from "./BlogApi";

const Blog = () => {
  return (
    <>
      <section className="Portfolio Blog" id="blog">
        <div className="container top">
          <div className="head text-center">
            <h1>PRODUCTS & SERVICE</h1>
          </div>

          <div className="content grid">
            {BlogApi.map((value, index) => {
              return (
                <Card
                  key={index}
                  image={value.image}
                  image2={value.image2}
                  image3={value.image3}
                  image4={value.image4}
                  date={value.date}
                  title_one={value.title_one}
                  title_two={value.title_two}
                  title_three={value.title_three}
                  desc_one={value.desc_one}
                  desc_two={value.desc_two}
                  desc_three={value.desc_three}
                  desc_four={value.desc_four}
                  desc_five={value.desc_five}
                  desc_six={value.desc_six}
                  desc_seven={value.desc_seven}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
