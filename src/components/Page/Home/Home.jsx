import React, { useEffect, useState } from 'react'
import fetchAPI from '../../../unitilies/API/API'
import spaceImage from '../../../assets/space.png'
import SearchForm from '../../Helpers/SearchForm/SearchForm'

const Home = () => {
    const [apiData, setApiData] = useState()

    // useEffect(() => {
    //     console.log(fetchAPI(setApiData));
    // },[])
    console.log(apiData);
  return (
    <div className='home flex-between'>
        <div className="hero flex-center">
            k
            {/* <img src={spaceImage} alt="" /> */}
        </div>
        <div className="search">
            <SearchForm />
        </div>
        <div className="content">
            
        </div>
    </div>
  )
}

export default Home