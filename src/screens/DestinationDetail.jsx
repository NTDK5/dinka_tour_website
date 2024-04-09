import React from 'react'
import { useParams } from 'react-router-dom'
import {destinationDetails} from '../assets/destinationDetails'
import { tourList } from '../assets/tours'
import { FaCalendar, FaMapMarked, FaMapMarker, FaUsers } from 'react-icons/fa'
import {useNavigate } from 'react-router-dom'



const DestinationDetail = () => {
    const { id } = useParams()
    console.log(id)
  const navigate = useNavigate();


    const details = destinationDetails.find(destination => destination.id === id);
    const tours =  tourList.find(tours => details.tours === tours.destination)
    console.log(details)

  return (
    <div className='destination_detail_container'>
        <div className='destination_detail_content'>
            {/* <div className='about_overlay'></div> */}
            <img src={details.images} alt='' />

                <h1>{details.destination}</h1>
                <p>
                {details.description}
                </p>
            
            <div className='tours_list'>
            <h1>Tours</h1>

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
              ))}
              </div>

        </div>
    </div>
  )
}

export default DestinationDetail