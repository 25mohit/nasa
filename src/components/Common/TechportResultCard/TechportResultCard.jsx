import { RxTrackNext } from 'react-icons/rx'
import { MdOutlineNavigateNext } from 'react-icons/md'

const TechportResultCard = ({ techPortData }) => {
    const dt = techPortData

  return (
    <div className='techport-result-card flex-column'>
        <header className='flex-column'>
            <h2 className='flex-center'>{dt?.title} <MdOutlineNavigateNext id='title-icon'/>{dt?.projectId}</h2>
            <div className='flex-center keywords-container'>
                <span>{dt?.releaseStatusString}</span>
                <span>Total {dt?.viewCount} Views</span>
                <a href={dt?.website} target='_blank' className='visit-link'>Visit Website</a>
            </div>
            <div className='flex-center' style={{gap: '1.95rem'}}>
                <span><b>Start Date : </b>{dt?.startDateString}</span>
                <span><b>End Date : </b>{dt?.endDateString}</span>
                <span><b>Last Updated on : </b>{dt?.lastUpdated}</span>
            </div>
            <div className="row">
                <h4>Lead Organization Detail</h4>
                <p><b>Name : </b>{dt?.leadOrganization?.organizationName} ({dt?.leadOrganization?.acronym})</p>
                <p><b>Type : </b>{dt?.leadOrganization?.organizationTypePretty}</p>
                <p className='flex-center'><b>Location : </b>
                    <span>&nbsp;{dt?.leadOrganization?.city}</span>,
                    <span>&nbsp;{dt?.leadOrganization?.country?.name}</span>
                </p>
                <p><b>State Territory : </b>{dt?.leadOrganization?.stateTerritory?.abbreviation} {dt?.leadOrganization?.stateTerritory?.name}, {dt?.leadOrganization?.stateTerritory?.country?.abbreviation}</p>
            </div>
            <div dangerouslySetInnerHTML={{__html: dt?.description}}></div>
        </header>
        <div className="row">
            <h4>Benifits</h4>
            <div dangerouslySetInnerHTML={{__html: dt?.benefits}}></div>
        </div>
        <div className="row">
            <h4>Destinations</h4>
            {
                dt?.destinations?.map((des, ind) => 
                    <div key={ind} className='dt-row'>
                       <p>{des?.description} : {des?.lkuCodeType?.description}</p>
                    </div>
                    )
            }
        </div>
        <div className="row">
            <h4>Images / Videos</h4>
            <p>{dt?.primaryImage?.description}</p>
        </div>
        <div className="row">
            <h4>Library Items</h4>
            {
                dt?.libraryItems?.map((lbr, ind) => 
                    <div key={ind} className='flex-column dt-row'>
                        <p><b>{ind+1}. Caption : </b>{lbr?.caption}</p>
                        <p><b>Description : </b>{lbr?.description}</p>
                        <p><b>File : </b>{lbr?.file?.fileName}</p>
                    </div>
                )
            }
        </div>
        <div className="row">
            <h4>Primary Taxonomy Nodes</h4>
            {
                dt?.primaryTaxonomyNodes?.map((tax, ind) => 
                    <div key={ind} className='flex-column dt-row'>
                        <p><b>{ind+1}. Title : </b>{tax?.title} <b>{tax?.code}</b></p>
                        <p><b>Defination : </b>{tax?.definition}</p>
                    </div>
                )
            }
        </div>
        <div className="row">
            <h4>Principal Investigators</h4>
            {
                dt?.principalInvestigators?.map((pri, ind) => 
                    <div className='dt-row' key={ind}>
                        <p><b>{ind+1}. Name : </b>{pri?.fullNameInverted}</p>
                        <p><b>Email : </b>{pri?.primaryEmail} ({pri?.publicEmail ? 'Public Email' : ''})</p>
                        <p><b>Contact ID : </b>{pri?.contactId}</p>
                    </div>
                    )
            }
        </div>
        <div className="row">
            <h4>Program</h4>
            <div className='dt-row'>
                <p><b>Title : </b>{dt?.program?.title} ({dt?.program?.acronym})</p>
                <p><b>Status : </b>{dt?.program?.active ? 'Active Currently' : 'Does not Active Currently'}</p>
                <div dangerouslySetInnerHTML={{__html: dt?.program?.description}}></div>
                <h4><RxTrackNext />&nbsp; &nbsp;Parent Program</h4>
                <p><b>Title : </b>{dt?.program?.parentProgram?.title} ({dt?.program?.parentProgram?.acronym})</p>
                <p><b>Status : </b>{dt?.program?.parentProgram?.active ? 'Active Currently' : 'Does not Active Currently'}</p>
                <h4><RxTrackNext />&nbsp; &nbsp;Responsible MD</h4>
                <p><b>Title : </b>{dt?.program?.parentProgram?.responsibleMd?.organizationName} ({dt?.program?.parentProgram?.responsibleMd?.acronym})</p>
                <p><b>City : </b>{dt?.program?.parentProgram?.responsibleMd?.city} </p>
                <p><b>Type : </b>{dt?.program?.parentProgram?.responsibleMd?.organizationTypePretty}</p>
            </div>
        </div>
        <div className="row">
            <h4>Program Managers</h4>
            {
                dt?.programManagers?.map((prg, ind) => 
                    <div key={ind} className='dt-row'>
                        <p><b>{ind+1}. Name : </b>{prg?.fullNameInverted}</p>
                        <p><b>Contact ID : </b>{prg?.contactId}</p>
                        <p><b>Email : </b>{prg?.primaryEmail} ({prg?.publicEmail ? 'Public Email' : ''})</p>
                    </div>
                )
            }
        </div>
        <div className="row">
            <h4>Project Managers</h4>
            {
                dt?.projectManagers?.map((prg, ind) => 
                    <div key={ind} className='dt-row'>
                        <p><b>{ind+1}. Name : </b>{prg?.fullNameInverted}</p>
                        <p><b>Contact ID : </b>{prg?.contactId}</p>
                        <p><b>Email : </b>{prg?.primaryEmail} ({prg?.publicEmail ? 'Public Email' : ''})</p>
                    </div>
                )
            }
        </div>
        <div className="row">
            <h4>Responsible MD</h4>
            <div className='dt-row'>
                <p><b>Name : </b>{dt?.responsibleMd?.organizationName} ({dt?.responsibleMd?.acronym})</p>
                <p><b>City : </b>{dt?.responsibleMd?.city}</p>
                <p><b>Type : </b>{dt?.responsibleMd?.organizationTypePretty} </p>
            </div>
        </div>
        <div className="row">
            <h4>States with Work</h4>
            {
                dt?.statesWithWork?.map((work, indx) => 
                    <div key={indx} className='dt-row'>
                        <p><b>{indx+1}. Name : </b>{work?.name} {work?.abbreviation}</p>
                        <p><b>Country : </b>{work?.country?.name} {work?.country?.abbreviation}</p>
                    </div>
                )
            }
        </div>
        <div className="row">
            <h4>Supported Missions</h4>
            <p><b>Description : </b>{dt?.supportedMission?.description}</p>
            <div className="dt-row">
                <h4><RxTrackNext />&nbsp;&nbsp;IKU</h4>
                <p><b>Description : </b>{dt?.supportedMission?.lkuCodeType?.description}</p>
            </div>
        </div>
    </div>
  )
}

export default TechportResultCard