import React, { useEffect, useState } from 'react';
import ToyByTab from './ToyByTab';
import { useNavigation } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const ToysTab = () => {
    const[activeTab , setActiveTab] = useState("sdsd")
    const[tabsToy , setTabsToy] = useState([]);
    const[showMore , setShowMore] = useState(false);
    const navigation = useNavigation();
    if(navigation.state === "loading"){
      return <Loading></Loading>
  }

    useEffect(()=>{
        fetch(`https://mighty-marvelous-server.vercel.app/tabsToys/${activeTab}`)
        .then(res=>res.json())
        .then(data=>setTabsToy(data))
    },[activeTab])
    return (
        <section className='my-10 lg:my-14'>
            <div>
                <div className='text-center lg:px-20' data-aos="fade-up">
                    <h1 className='text-primary brand-title text-2xl'>Superhero Spotlight</h1>
                    <p className='my-5 font-medium'>Explore our "Superhero Spotlight" section, where you can easily navigate and explore a diverse range of superhero toys.From action figures to collectible statues, find your favorite heroes grouped into specialized categories.</p>
                </div>
<div className='my-5 text-center'>
<button className={`tab ${activeTab == "sdsd" ? "activeTab" : ""}`} onClick={()=>setActiveTab("sdsd")}>All Toys</button>
<button className={`tab ${activeTab == "Marvel" ? "activeTab" : ""}`} onClick={()=>setActiveTab("Marvel")}>Marvel</button>
<button className={`tab ${activeTab == "DC Comics" ? "activeTab" : ""}`} onClick={()=>setActiveTab("DC Comics")}>DC Comics</button>
<button className={`tab ${activeTab == "Dark Horse" ? "activeTab" : ""}`} onClick={()=>setActiveTab("Dark Horse")}>Dark Horse</button>  
<button className={`tab ${activeTab == "Image" ? "activeTab" : ""}`} onClick={()=>setActiveTab("Image")}>Image Cosmic</button>  
</div>    

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    {
        tabsToy.slice(0, showMore ? 33 : 10).map(tabToy=><ToyByTab
        key={tabToy._id}
        tabToy={tabToy}
        ></ToyByTab>)
    }
</div>
{
    !showMore && <div className='text-center'>
    <button className='myBtn' onClick={()=>setShowMore(true)}>Show More</button>
    </div>
}
            </div>
        </section>
    );
};

export default ToysTab;