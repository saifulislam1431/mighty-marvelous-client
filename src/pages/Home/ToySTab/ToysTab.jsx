import React, { useState } from 'react';

const ToysTab = () => {
    const[activeTab , setActiveTab] = useState("")
    return (
        <section className='my-10'>
            <div>
                <div className='text-center lg:px-20' data-aos="fade-up">
                    <h1 className='text-primary brand-title text-2xl'>Superhero Spotlight</h1>
                    <p className='my-5 font-medium'>Explore our "Superhero Spotlight" section, where you can easily navigate and explore a diverse range of superhero toys.From action figures to collectible statues, find your favorite heroes grouped into specialized categories.</p>
                </div>
<div className='my-5 text-center'>
<button className={`tab ${activeTab == "" ? "activeTab" : ""}`} onClick={()=>setActiveTab("")}>All Toys</button>
<button className={`tab ${activeTab == "marvel" ? "activeTab" : ""}`} onClick={()=>setActiveTab("marvel")}>Marvel</button>
<button className={`tab ${activeTab == "dcCosmic" ? "activeTab" : ""}`} onClick={()=>setActiveTab("dcCosmic")}>DC Cosmic</button>
<button className={`tab ${activeTab == "darkHorse" ? "activeTab" : ""}`} onClick={()=>setActiveTab("darkHorse")}>Dark Horse</button>   
</div>                
            </div>
        </section>
    );
};

export default ToysTab;