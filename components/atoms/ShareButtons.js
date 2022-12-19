import React from 'react';
import styled from 'styled-components';
import { SMALL } from '@/styles/spacing';
import { BLACK, TEEL } from '@/styles/colors';

import linkNaked from '@/static/social-icons/link-naked.svg';
import facebookNaked from '@/static/social-icons/facebook-naked.svg';
import mailNaked from '@/static/social-icons/mail-naked.svg';
import twitterNaked from '@/static/social-icons/twitter-naked.svg';
import linkedInNaked from '@/static/social-icons/linkedin-naked.svg';
import share from '@/static/share.svg';
import Image from 'next/image';

const ShareOpener = styled.div`
  position: relative;
  background-color: ${props => props.backgroundColor || BLACK};
  background-image: url(${share});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 36%;
  cursor: pointer;
  height: 68px;
  width: 68px;
  z-index: 2;
  transition: 0.3s all;

  &:hover {
    opacity: 1;
    background-color: ${TEEL};
  }
`;

const ShareList = styled.div`
  background: #fff;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.06);
  opacity: ${props => (props.active ? 1 : 0)};
  position: absolute;
  text-align: center;
  top: 100%;
  transform: translateY(${props => (props.active ? 0 : '-100%')});
  transition: 0.3s transform, 0.3s opacity;
  width: 100%;
  z-index: 1;
`;

const Link = styled.a`
  cursor: pointer;
  display: ${props => (props.inline ? 'inline-block' : 'block')};
  opacity: 0.6;
  padding: ${SMALL}px;
  transition: 0.3s opacity;

  &:hover {
    opacity: 1;
  }
`;

const SmallMessage = styled.span`
  font-size: 11px;
`;

function popup(e) {
  e.preventDefault()
  if (!e.currentTarget) return
  window.open(
    e.currentTarget.href,
    '_blank',
    'location=yes,height=570,width=520,scrollbars=yes,status=yes'
  )
}

class ShareButtons extends React.Component {
  state = {
    dropdownActive: false,
    url: '',
  }

  componentDidMount() {
    this.setState({
      message: '',
      url: window.location.href,
    })
    window.addEventListener('scroll', this.closeDropdownWithDelay)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.closeDropdownWithDelay)
  }

  setDropdown = dropdownActive => () => {
    this.setState({ message: '', dropdownActive })
  }

  closeDropdownWithDelay = () => setTimeout(this.setDropdown(false), 100)

  copy = e => {
    const container = e.currentTarget.parentNode
    const el = document.createElement('textarea')
    el.innerHTML = window.location.href

    container.appendChild(el)
    el.select()
    document.execCommand('copy')
    container.removeChild(el)

    this.setState({
      message: 'Link copied to clipboard!',
    })
  }

  render() {
    const { title = '' } = this.props

    const { dropdownActive, message, url } = this.state

    return (
      <div style={{ position: 'relative' }}>
        <ShareOpener
          backgroundColor={this.props.backgroundColor}
          onClick={this.setDropdown(!dropdownActive)}
        />
        <ShareList active={dropdownActive}>
          <Link as="span" className="copy" onClick={this.copy}>
            <Image src={linkNaked} alt="link" />
          </Link>
          {message ? <SmallMessage>{message}</SmallMessage> : null}
          <Link
            onClick={popup}
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          >
            <Image src={facebookNaked} alt="facebook" />
          </Link>
          <Link
            href={`mailto:?subject=${encodeURIComponent(
              title
            )}&body=${encodeURIComponent(url)}`}
          >
            <Image src={mailNaked} alt="mail" />
          </Link>
          <Link
            onClick={popup}
            href={`https://twitter.com/intent/tweet?url=${url}&text=${encodeURIComponent(
              title
            )}`}
          >
            <Image src={twitterNaked} alt="twitter" />
          </Link>
          <Link
            onClick={popup}
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`}
          >
            <Image src={linkedInNaked} alt="linkedin" />
          </Link>
        </ShareList>
      </div>
    )
  }
}

export default ShareButtons
