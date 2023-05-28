import React from 'react'
import { ThemeStyles } from '../../unitilies/ThemeStyle'
import { BsTrash } from 'react-icons/bs'

const Index = () => {
  const sampleIndex = [
    {
      title: 'Nasa First Rocket to Space',
      added: '3 days ago'
    },
    {
      title: 'What is India in front of India',
      added: '2 days ago'
    },
    {
      title: 'International Space Research Orgination',
      added: '3 days ago'
    },
    {
      title: 'Nasa First Rocket to Space',
      added: '3 days ago'
    },
    {
      title: 'What is India in front of India',
      added: '2 days ago'
    },
    {
      title: 'International Space Research Orgination',
      added: '3 days ago'
    },
    {
      title: 'Nasa First Rocket to Space',
      added: '3 days ago'
    },
    {
      title: 'What is India in front of India',
      added: '2 days ago'
    },
    {
      title: 'International Space Research Orgination',
      added: '3 days ago'
    },
    {
      title: 'Nasa First Rocket to Space',
      added: '3 days ago'
    },
    {
      title: 'What is India in front of India',
      added: '2 days ago'
    },
    {
      title: 'International Space Research Orgination',
      added: '3 days ago'
    },
    {
      title: 'Nasa First Rocket to Space',
      added: '3 days ago'
    },
    {
      title: 'What is India in front of India',
      added: '2 days ago'
    },
    {
      title: 'International Space Research Orgination',
      added: '3 days ago'
    },
  ]
  return (
    <div className='bookmark-index flex-column p-1' style={ThemeStyles.text}>
      <ul className='flex-column'>
        {
          sampleIndex?.map((index, ind) => 
          <li className='flex-wrap'>
            <span>{ind+1}&nbsp; {index?.title}</span>
            <span className='flex-between'>
                {index?.added}
                <div className='flex-between'>
                    <BsTrash id='trash' />
                </div>
            </span>
          </li>)
        }
      </ul>
    </div>
  )
}

export default Index