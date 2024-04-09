import React from 'react'
import aboutImage from '../assets/image_1.jpg'
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallerry3.jpg';
import { FaGem, FaGlobe, FaHiking, FaLandmark, FaMap, FaPrayingHands } from 'react-icons/fa';
import ctaImage from '../assets/image 3.jpg';


const AboutScreen = () => {
  return (
    <div className='about_container'>
        <div className='about_hero_container'>
            <img src={aboutImage} alt='' />
            <div className='about_overlay'></div>
            <div className='about_hero_text'>
                <h1>About Us</h1>
                <p>
                Discover the heart of Ethiopia with [Company Name], your trusted guide to unforgettable adventures in the land of origins.
                </p>
            </div>
        </div>
        <div className='about_discover'>
            <div className='about_discover_text'>
                <h1>DISCOVER THE BEAUTY AND DIVERSITY OF ETHIOPIA WITH DINKA TOUR ETHIOPIA</h1>
                <p>Embark on an extraordinary journey through the heart of Ethiopia with Dinka Tour Ethiopia. Our mission is to introduce you to the wonders of this ancient land, offering immersive cultural experiences, historical explorations, and encounters with breathtaking natural landscapes.

From the rock-hewn churches of Lalibela to the majestic Simien Mountains, Ethiopia is a land of unparalleled beauty and cultural significance. At Dinka Tour Ethiopia, we invite you to delve into the country’s rich heritage, explore its diverse ethnic groups, and witness age-old traditions that have stood the test of time.</p>
            </div>
            <div className='about_discover_image_container'>
                <div className='about_row'>
                    <img src={gallery2} alt='about_image'/>
                </div>
                <div className='about_row2'>
                    <img src={gallery1} alt='about-image' />
                    <img src={gallery3} alt='about-image' />
                </div>
            </div>
           
        </div>
        <div className='service_container'>
            <div className='service_title'>
                <h1>Why Choose Us?</h1>
                <p>Discover the vibrant tapestry of Ethiopia with our comprehensive range of tailored tours and travel services. At [Your Tour Company Name], we are committed to providing unforgettable experiences that immerse you in the rich culture, history, and natural beauty of this diverse land. Whether you're a solo traveler, a couple seeking a romantic getaway, a family in search of adventure, or a group of friends eager to explore, we have the perfect itinerary for you.</p>
            </div>
            <div className='service_grid'>
                <div className='service_card'>
                    <FaMap />
                    <h2>Customized Tours</h2>
                    <p>Embark on a personalized journey crafted just for you. Our team of experienced travel experts will work closely with you to design a custom itinerary that aligns with your interests, preferences, and budget. </p>
                </div>
                <div className='service_card'>
                    <FaGlobe />
                    <h2>Cultural Immersion</h2>
                    <p>mmerse yourself in the rich tapestry of Ethiopian culture with our cultural immersion tours. Witness traditional ceremonies, participate in authentic cooking classes, and engage with local communities to gain a deeper understanding of Ethiopia's diverse heritage.  </p>
                </div>
                <div className='service_card'>
                    <FaHiking />
                    <h2>Adventure Expeditions</h2>
                    <p>Embark on an adrenaline-fueled adventure across Ethiopia's breathtaking landscapes. Trek through the dramatic Simien Mountains, embark on a thrilling safari in the Bale Mountains National Park, or conquer the rugged terrain of the Danakil Depression. </p>
                </div>
                <div className='service_card'>
                    <FaLandmark />
                    <h2>Historical Tours</h2>
                    <p>Trace the footsteps of ancient civilizations with our historical tours. Explore UNESCO World Heritage Sites such as the rock-cut churches of Lalibela, the ancient obelisks of Axum, and the medieval castles of Gondar.  </p>
                </div>
                <div className='service_card'>
                    <FaPrayingHands />
                    <h2>Pilgrimage Journeys</h2>
                    <p>mbark on a spiritual pilgrimage to some of Ethiopia's holiest sites. Follow in the footsteps of pilgrims on the historic route to Lalibela, home to some of the world's most iconic Christian monuments.  </p>
                </div>
                <div className='service_card'>
                    <FaGem />
                    <h2>Luxury Travel</h2>
                    <p>Indulge in luxury and comfort with our exclusive range of luxury travel packages. From boutique hotels and private villas to luxury safaris and helicopter tours, we offer unparalleled luxury experiences that redefine the art of travel. </p>
                </div>
            </div>
        </div>
        <div className="cta_section">
        <div className='cta_content'>
          <div className='cta_text'>
            <h1>EXPERT GUIDES & UNFORGETTABLE ADVENTURES</h1> 
        <button className='destination_button'>Book Tour</button>

            </div>
          <img src={ctaImage} height={300} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default AboutScreen