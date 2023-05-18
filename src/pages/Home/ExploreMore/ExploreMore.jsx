import React from 'react';
import banner from "../../../assets/banner/banner6.jpg"

const ExploreMore = () => {
    return (
        <section className='my-10' data-aos="fade-up">
<div>
<div className="hero lg:px-10">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10">
    <img src={banner} className="w-5/6 lg:max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Explore More Superhero Adventures!</h1>
      <p className="py-6">Expand Your Superhero Universe! Take your superhero experience to new heights with our "Explore More" section.</p>
      <button className="myBtn">Explore More</button>
    </div>
  </div>
</div>
</div>
        </section>
    );
};

export default ExploreMore;