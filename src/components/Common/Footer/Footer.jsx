import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { ImNpm } from 'react-icons/im'
import { ThemeStyles } from '../../../unitilies/ThemeStyle'

const Footer = () => {
  return (
    <div className='footer flex-justify-center'>
      <a style={ThemeStyles.text} href='https://github.com/25mohit' target='_blank' rel='Github'><BsGithub /></a>
      <a style={ThemeStyles.text} href='https://www.linkedin.com/in/agarwal24/' target='_blank' rel='Linkedin'><BsLinkedin /></a>
      <a style={ThemeStyles.text} href='https://twitter.com/mo_hit24' target='_blank' rel='Twitter'><BsTwitter /></a>
      <a style={ThemeStyles.text} href='https://www.npmjs.com/~mohitagarwal' target='_blank' rel='NPM'><ImNpm /></a>
      <a style={ThemeStyles.text} href='https://www.instagram.com/agarwal_._mohit/' target='_blank' rel='Instagram'><BsInstagram /></a>
    </div>
  )
}

export default Footer
