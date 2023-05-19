import React from 'react';
import img1 from "../../../assets/heroimg/Captain Marvel_marvel.jpg";
import img2 from "../../../assets/heroimg/Hulk_marvel.jpg";
import img3 from "../../../assets/heroimg/The Joker_dc.jpg";
import img4 from "../../../assets/heroimg/Wonder Woman_dc.jpg";
import img5 from "../../../assets/heroimg/Abe Sapien_DarkHorse.jpg";
import img6 from "../../../assets/heroimg/Barb Wire_DarkHorse.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Gallery = () => {
    return (
        <section className='flex items-center justify-center my-14 lg:my-24'>
            <div>
                <div className='text-center lg:px-20' data-aos="fade-up">
                    <h1 className='text-primary brand-title text-2xl'>ToyVerse: Where Heroes Unite!</h1>
                    <p className='my-5 font-medium'>Explore our gallery of superhero toys where heroes from different universes unite in one epic collection. Witness the convergence of iconic characters and immerse yourself in the awe-inspiring world of heroic action figures and collectibles.</p>
                </div>

                <div className='img-container text-center my-10'>
                    <div className='img-container1 flex gap-5 items-center justify-center' data-aos="fade-up">
                        <div className='relative'>
                            <img src={img1} alt="Image 1" className='w-[150px] lg:w-52 rounded-xl' />
                            <div className='w-[150px] lg:w-52 h-full rounded-xl absolute bg-secondary bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-500 top-0'>
                                <h1 className='flex w-full h-full justify-center items-center lg:text-3xl font-extrabold text-white'>Captain Marvel</h1>
                            </div>
                        </div>
                        <div className='relative'>
                            <img src={img2} alt="Image 2" className='w-[210px] lg:w-[420px] rounded-xl h-[150px] lg:h-[200px]' />
                            <div className='w-[220px] lg:w-[420px] rounded-xl h-[150px] lg:h-[200px] absolute bg-secondary bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-500 top-0'>
                                <h1 className='flex w-full h-full justify-center items-center lg:text-3xl font-extrabold text-white'>Hulk</h1>
                            </div>
                        </div>
                    </div>

                    <div className="img-container2 flex gap-5 items-center justify-center mt-4" data-aos="fade-up">
                        <div className="img-sub-container">
                            <div className='relative'>
                                <img src={img3} alt="Image 3" className='w-[210px] lg:w-[420px] rounded-xl h-[120px] lg:h-[165px]' />
                                <div className='w-[220px] lg:w-[420px] rounded-xl h-[120px] lg:h-[165px] absolute bg-secondary bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-500 top-0'>
                                    <h1 className='flex w-full h-full justify-center items-center lg:text-3xl font-extrabold text-white'>The Joker</h1>
                                </div>
                            </div>
                            <div className="img4-5-container flex gap-5 mt-5">
                                <div className='relative'>
                                    <img src={img4} alt="Image 4" className='w-[120px] lg:w-52 rounded-xl lg:h-[120px]' />
                                    <div className='w-[120px] h-full lg:w-52 rounded-xl lg:h-[120px] absolute bg-secondary bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-500 top-0'>
                                        <h1 className='flex w-full h-full justify-center items-center lg:text-3xl font-extrabold text-white'>Wonder Woman</h1>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <img src={img5} alt="Image 5" className='w-[120px] lg:w-52 rounded-xl lg:h-[120px]' />
                                    <div className='w-[120px] h-full lg:w-52 rounded-xl lg:h-[120px] absolute bg-secondary bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-500 top-0'>
                                        <h1 className='flex w-full h-full justify-center items-center lg:text-3xl font-extrabold text-white'>Abe Sapien</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='relative'>
                            <img src={img6} alt="Image 6" className='w-[150px] lg:w-52 rounded-xl h-fit' />
                            <div className='w-[150px] lg:w-52 rounded-xl h-full absolute bg-secondary bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-500 top-0'>
                                <h1 className='flex w-full h-full justify-center items-center lg:text-3xl font-extrabold text-white'>Barb Wire</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;