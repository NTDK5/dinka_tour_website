import React from 'react'
import aboutImage from '../assets/image_1.jpg'
import { tourList } from '../assets/tours'
import { FaCalendar, FaMapMarked, FaMapMarker, FaUsers } from 'react-icons/fa'
import {useNavigate } from 'react-router-dom'
import ShuffleText from 'react-shuffle-text';


const ToursScreen = () => {
  const navigate = useNavigate();
  return (
    <div className='tours_container'>
      <div className='about_hero_container'>
            <img src={aboutImage} alt='' />
            <div className='about_overlay'></div>
            <div className='about_hero_text'>
                <h1><ShuffleText content="Tours" /></h1>
                <p data-aos="fade-up" data-aos-delay ="2000"
     data-aos-duration="600">
                Discover the heart of Ethiopia with [Company Name], your trusted guide to unforgettable adventures in the land of origins.
                </p>
            </div>
        </div>
        <div className='tours_content'>
          <div className='tours_list'>
            {
              tourList.map((tour)=>(
                <div className='tours_card'>
                  <img src={tour.image} alt={tour.title} />
                  <div className='tour_card_text'>
                    <h1>{tour.title}</h1>
                    <div className='tours_info'>
                      <p><FaMapMarker />{tour.destination}</p>
                      <p><FaCalendar />{tour.days}</p>
                      <p><FaUsers />{tour.guests}</p>
                    </div>
                    <p>{tour.description}</p>
                    <button className='booknow_button' onClick={()=>navigate(`/tour/${tour.id}`)}>Explore Tours</button></div>

                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default ToursScreen