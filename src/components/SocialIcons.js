import React from 'react'
import {BsTwitter, BsFacebook, BsLinkedin} from 'react-icons/bs'
import { StyledSocialIcons } from './styles/SocialIcons.styled'

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
        <li>
        <a href='https://twitter.com'>
          <BsTwitter />
        </a>
      </li>
      <li>
        <a href='https://facebook.com'>
          <BsFacebook />
        </a>
      </li>
      <li>
        <a href='https://linkedin.com'>
          <BsLinkedin />
        </a>
      </li>        
    </StyledSocialIcons>
  )
}

export default SocialIcons