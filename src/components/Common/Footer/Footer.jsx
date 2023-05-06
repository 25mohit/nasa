import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { ImNpm } from 'react-icons/im'

const Footer = () => {
  return (
    <div className='footer flex-justify-center'>
      <a href='https://github.com/25mohit' target='_blank'><BsGithub /></a>
      <a href='https://www.linkedin.com/in/agarwal24/' target='_blank'><BsLinkedin /></a>
      <a href='https://twitter.com/mo_hit24' target='_blank'><BsTwitter /></a>
      <a href='https://www.npmjs.com/~mohitagarwal' target='_blank'><ImNpm /></a>
      <a href='https://www.instagram.com/agarwal_._mohit/' target='_blank'><BsInstagram /></a>
    </div>
  )
}

export default Footer