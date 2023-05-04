import React, { useEffect, useState } from 'react'
import fetchAPI from '../../../unitilies/API/API'
import spaceImage from '../../../assets/space.png'
import SearchForm from '../../Helpers/SearchForm/SearchForm'
import ResultCard from '../../Common/ResultCard/ResultCard'

const Home = ({ setShowRaining }) => {
    const [apiData, setApiData] = useState()
    const [toogleHome, setToogleHome] = useState(false)

    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        console.log(fetchAPI(setApiData));
        if(searchText.length > 3){
          setToogleHome(true)
          setShowRaining(true)
        } else if(searchText ==''){
          setToogleHome(false)
        }
    },[searchText])
    console.log(apiData?.collection?.items);
  
  return (
    <div className='home flex-column'>
      <div className="hero flex-justify-center">
        {!toogleHome && <div className="section">
              
              {/* <img src={spaceImage} alt="" /> */}
          </div> }
          <div className="search">
              <SearchForm setSearchText={setSearchText}/>
          </div>
      </div>
      <div className="result-container">
        <h2 style={{textAlign: 'right'}}>Total {apiData?.collection?.items?.length} Results Found</h2>
        {
          apiData?.collection?.items?.slice(0,10)?.map((dt, ind) =>
          <ResultCard key={ind} data={dt}/>
          )
        }
      </div>
    </div>
  )
}

export default Home