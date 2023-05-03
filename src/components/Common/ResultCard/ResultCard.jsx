import moment from 'moment/moment';
import React, { useState } from 'react'

const ResultCard = (data) => {
  const [rst, setRst] = useState(data?.data?.data)

  console.log("data", data?.data, rst);
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
            <span className='flex-between'>
              <span> {d?.center}</span>
              <span> {moment(d?.date_created).format("MMM Do YYYY")}</span>
             </span>
            <div className="keywords-container">
                {
                  d?.keywords?.map((s, inde) => <span key={inde}>{s}</span>)
                }
            </div>
            <p>{d?.description}</p>
          </div>)
        }
      </section>
    </div>
  )
}

export default ResultCard