import React from 'react';
import quote from "../../../assets/icon/quote-svgrepo-com.svg";
import { FaQuoteRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CollectorShowcase = () => {
    return (
        <section className='my-10 lg:my-20'>
            <div>
                <div className='text-center lg:px-20'>
                    <h1 className='text-primary brand-title text-2xl'>Collector's Haven: Showcasing Heroic Treasures</h1>
                    <p className='my-5 font-medium'>Explore a curated collection of superhero treasures, lovingly assembled by dedicated collectors. Discover rare finds, iconic figures, and exclusive editions in our Collector's Showcase. Immerse yourself in the world of superheroes and embrace the thrill of collecting.</p>
                </div>
                <div className='my-10 flex items-center justify-center gap-10 w-full flex-col lg:flex-row'>
                    <div className='border border-primary p-4 lg:w-1/2 rounded-xl' data-aos="fade-right">
                        <div className='flex gap-2'>
<div>
    
<p>"Being a superhero toy collector has been an incredible journey of nostalgia and passion. The Collector's Showcase on this site has allowed me to connect with fellow enthusiasts and discover unique pieces that I never knew existed. It's a haven for collectors like me, where I can showcase my prized possessions and find inspiration from other amazing collections." <span className='text-xl font-bold'>- Emily C.</span></p>
<Link to="/allToys">
    <button className='mySecBtn my-3'>View Collection</button>
</Link>
</div>
                            <div>
                                <FaQuoteRight className='w-14 h-14 text-accent'/>
                            </div>
                        </div>
                    </div>
                    <div className='border border-primary p-4 lg:w-1/2 rounded-xl' data-aos="fade-left">
                    <div className='flex gap-2'>

<div>
<p>"The Collector's Showcase on this site is a true gem for superhero toy enthusiasts. It's a platform that celebrates the artistry and craftsmanship behind these toys. I've had the privilege of connecting with fellow collectors and sharing stories about our most cherished items. The showcase inspires me to continually expand my collection and appreciate the beauty of these superhero treasures."  <span className='text-xl font-bold'>- Mark S.</span></p>
<Link to="/allToys">
    <button className='mySecBtn my-3'>View Collection</button>
</Link>
</div>
<div>
    <FaQuoteRight className='w-14 h-14 text-accent'/>
</div>
</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CollectorShowcase;