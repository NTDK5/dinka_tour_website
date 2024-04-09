import React from 'react'
import aboutImage from '../assets/image_1.jpg';
import { destinationImage } from '../assets/image';
import { Link } from 'react-router-dom';

const Destinations = () => {
    
  return (
    <div className='destination_page_container'>
        <div className='about_hero_container'>
            <img src={aboutImage} alt='' />
            <div className='about_overlay'></div>
            <div className='about_hero_text'>
                <h1>Destinations</h1>
                <p>
                Discover the heart of Ethiopia with [Company Name], your trusted guide to unforgettable adventures in the land of origins.
                </p>
            </div>
        </div>
        <div className='destination_page_content'>
            <div className='destination_page_list'>
                {destinationImage.map((item)=>(
                <div className='elm_1'>
                    <img src={item.imageUrl} alt='destination' className='destination_image' />
                    <div className='destination_text'>
                    <h2>{item.link}</h2> 
                    <p>{item.description}</p>
                <Link to={`/destination/${item.id}`} >
                    Read more
                </Link>
              </div>
    </div>))
            }
            </div>
        </div>
    </div>
  )
}

export default Destinations