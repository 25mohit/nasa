import React, { useState } from 'react'
import { ThemeStyles } from '../../unitilies/ThemeStyle'
import { BsFillBookmarkHeartFill, BsFillCameraFill } from 'react-icons/bs'
import moment from 'moment'
import { FaUserAstronaut } from 'react-icons/fa'

const BookmarkBody = () => {
    
  const sampleData = {
    center
: 
"JPL",
date_created
: 
"2008-01-17T18:00:11Z",
description
: 
"Delhi is the second largest metropolis in India, with a population of 16 million and is located in northern India along the banks of the Yamuna River. This image was acquired by NASA Terra satellite on September 22, 2003."
,description_508
: 
"Delhi is the second largest metropolis in India, with a population of 16 million and is located in northern India along the banks of the Yamuna River. This image was acquired by NASA Terra satellite on September 22, 2003."
,keywords
: 
["Earth", "Terra"],
media_type
: 
"image",
nasa_id
: 
"PIA10621",
secondary_creator
: 
"NASA/GSFC/METI/ERSDAC/JAROS, and U.S./Japan ASTER Science Team",
title
: 
"Delhi, India"
  }
  const [rst, setRst] = useState({link:"https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000585/GSFC_20171208_Archive_e000585~thumb.jpg", data: [sampleData]})
      console.log("data", rst);
    
      const addBookmarkHandler = (bookmarkData) => {
        console.log("bookmarkData", bookmarkData);
      }
      
  return (
    <div className='bookmark-body p-1'  style={ThemeStyles.text}>
        <div className='result-card bookmark'>
        {/* <BsFillBookmarkHeartFill id='bookmark-icon' onClick={() => addBookmarkHandler(data?.data)}/> */}
      <div className="img-container">
       <img src={rst?.link} loading='lazy'/>
      </div>
      <section className='section'>
        {
          rst?.data?.map((d, ind) => 
          <div key={ind} className='panel'>
            <h2>{d?.title}</h2>
            <span className='flex-between' style={{margin: '0.5rem 0'}}>
              <span>Center : {d?.center}</span>
              <span> {d?.location}</span>
              <span> {moment(d?.date_created).format("MMM Do YYYY")}</span>
             </span>
             { d?.photographer && <span className='flex-center' style={{gap: '0.5rem', marginBottom: '0.2rem'}}><BsFillCameraFill />{d?.photographer}</span>}
            <div className="keywords-container">
                {
                  d?.keywords?.map((s, inde) => <span key={inde}>{s}</span>)
                }
            </div>
            {d?.secondary_creator && <h4> <FaUserAstronaut />  {d?.secondary_creator}</h4>}
            {
              d?.album?.map((al, inde) => <span key={inde}>{al}</span>)
            }
            <p>{d?.description?.slice(0,300)} {d?.description.length > 300 && '....'} {d?.description.length > 300 && <span className='read-more'>Read More</span>}</p>
            {d?.description.length < 300 && <p>{d?.description_508}</p> }
          </div>)
        }
      </section>
    </div>
    </div>
  )
}

export default BookmarkBody