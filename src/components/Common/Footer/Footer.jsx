import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer flex-justify-center'>
      <a href='https://github.com/25mohit' target='_blank'><BsGithub /></a>
      <a href='' target='_blank'><BsLinkedin /></a>
      <a href='' target='_blank'><BsTwitter /></a>
      <a href='' target='_blank'><BsFacebook /></a>
      <a href='' target='_blank'><BsInstagram /></a>
    </div>
  )
}

export default Footer