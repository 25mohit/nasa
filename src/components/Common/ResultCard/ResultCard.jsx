import moment from 'moment/moment';
import React, { useState } from 'react'
import { BsFillCameraFill } from 'react-icons/bs'
import { FaUserAstronaut } from 'react-icons/fa'

const ResultCard = (data) => {
  const [rst, setRst] = useState(data?.data?.data)

  console.log("data", data?.data);
  return (
    <div className='result-card'>
      <div className="img-container">
        {
          data?.data?.links?.map((img, ind) => <img key={ind} src={img?.href} />)
        }
      </div>
      <section className='section'>
        {
          rst?.map((d, ind) => 
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
            <p>{d?.description}</p>
            <p>{d?.description_508}</p>
          </div>)
        }
      </section>
    </div>
  )
}

export default ResultCard