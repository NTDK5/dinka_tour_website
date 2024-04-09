import React from 'react'
import { useParams } from 'react-router-dom'
import {tourDetail, toursDetail} from '../assets/toursDetail'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {FaCalendar, FaMapMarker} from 'react-icons/fa'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

const ToursDetail = () => {
    const { id } = useParams()
    console.log(id)

    const details = tourDetail.find(destination => destination.id === id);
    console.log(details)
  return (
    <>
    <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="tour_swiper"
      >
        {
          details.gallery.map((image)=>
          (<SwiperSlide><div className='hero_slide'><img src={image} alt='hero' className='hero_images' /> <div className='overlay'></div></div></SwiperSlide>))
        }
        <div className='tour_detail_text'>
            <h1>{details.name}</h1>
            <p>
            <FaMapMarker />
            {details.destination}
            <FaCalendar />
            {details.days}
            </p>
        {/* <button className='hero_button'>Explore Tours</button> */}
        </div>
      </Swiper>
      <div className='tour_detail_container'>
      <div className='tour_detail_content'>
        <p>Please note that this is just a sample itinerary, and … we can customize it according to your preferences and requirements. The Omo Valley is a culturally rich and diverse region, and this photography tour will provide you with ample opportunities to capture stunning images of the tribes, landscapes, and wildlife that make this region so unique.</p>
        {details.plan.map((activity)=>(
            <div className='activity'>
            <h3>{activity.name}</h3>
            <ul>
            {activity.activities.map((list)=>(
                <li>{list}</li>
            ))}
            </ul>
            
        </div>
        ))}
        
      </div>
      <form className='book_form'>
      <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Your email.." required />
    <label for="guests">Number Guests</label>
    <input type='number' id='guests' name='guests' required />
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
    />
    <button type='submit'>Book</button>
      </form>
      </div>
      
      </>
  )
}

export default ToursDetail