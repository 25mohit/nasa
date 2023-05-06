import React, { useEffect, useState } from 'react'
import LayoutMain from '../../Common/Layout/LayoutMain'
import { fetchTechport } from '../../../unitilies/API/API'
import TechportResultCard from '../../Common/TechportResultCard/TechportResultCard'

const TechPortView = () => {
    const techportID = ["117135", "94844", "117129", "117130", "106666", "106617", "106706", "12235"]

    const [search, setSearch] = useState('')

    const [techPortData, setTechPortData] = useState([])

    useEffect(() => {
      fetchTechport(setTechPortData, 117135)
    },[])
  
    console.log("techPortData", techPortData);
  return (
    <LayoutMain>
        <div className="techport-view ">
            <header>
                <p>To Perform a search about NASA's Techport, you need to search by entering NASA's Project ID, you can find
                    All ID's here <a className='visit-link' to=''>view all project id's</a>
                </p>
                <p>Some example ID's as bellow. You can Perform a search by Entering these ID's</p>
                <div className="keywords-container">
                    {
                        techportID?.map((id, index) =><span key={index} onClick={() => setSearch(id)}>{id}</span> )
                    }
                </div>
            </header>
            <input type="text" value={search} onClick={(e) => setSearch(e.target.value)} />
            <div className="techport-container flex-column">
                <TechportResultCard techPortData={techPortData}/>
            </div>
        </div>
    </LayoutMain>
  )
}

export default TechPortView