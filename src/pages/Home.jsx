import React, { useEffect, useState } from 'react';
import { Seo } from "../components/Seo";
import { FadeLoader } from 'react-spinners';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../fb_config';

const Home = () => {
  const [loading,setLoading] = useState(true);
  const [headerData,setHeaderData] = useState({})

  const fetchData = async () => {
    const data = await getDoc(doc(db,"post-header","post1")) ;
    setHeaderData(data.data());
  }

  useEffect(() => { 
    console.log(import.meta.env.VITE_FB_KEY)
    setTimeout(() => setLoading(false) , 1000)
     fetchData();
   } ,[])

   if (loading){
    return(
      <FadeLoader />
    )
   }

   
  return (
    <div className='container' >
        <Seo name="home" type="article" description={headerData.title} title={headerData.title} image={headerData.imageUrl} />
        <span className='homeTitle' > {headerData.title} </span>
    </div>
  )
}

export default Home