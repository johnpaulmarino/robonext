import React from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';
//import { useNavigate } from "react-router-dom";
import Logo from 'components/atoms/Logo';
import ShareButtons from 'components/atoms/ShareButtons';
import TYPE, { TYPE_COLORS } from 'styles/type';
import { S } from 'styles/breakpoints';
import { BLACK, WHITE, SEAGREEN, MEDIUMGRAY } from 'styles/colors';
import menuIcon from 'public/static/menu/menu.png';
import Image from 'next/image';

const StyledContainer = styled.div`
  position: fixed;
  align-items: center;
  background: #fff;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.06);
  display: flex;
  height: 68px;
  justify-content: space-between;
  left: 0;
  margin: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Progress = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 10px 0 0;
  padding: 0;
  width: 70%;
  @media screen and (max-width: ${S}px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  cursor: pointer;
  padding: 22px 20px 4px;
  @media screen and (min-width: ${S + 1}px) {
    display: none;
  }
`;

const Bar = styled.div`
  width: 100%;
  position: relative;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${props =>
    props.currentSection === props.sectionNumber ? SEAGREEN : MEDIUMGRAY};
  background-image: ${props =>
    props.currentSection === props.sectionNumber
      ? `url("/static/horizontal-dr/white-speckle.png")`
      : null};
  cursor: pointer;
  color: ${props =>
    props.currentSection === props.sectionNumber
      ? TYPE_COLORS.white
      : TYPE_COLORS.grey};
  display: flex;
  font-family: ${TYPE.m.font};
  font-weight: ${TYPE.m.weight};
  font-size: ${TYPE.labelTiny.size}rem;
  height: 20px;
  justify-content: center;
  overflow: visible;
  margin: 0 auto;
  text-align: center;
`;

const BarCover = styled.div`
  position: absolute;
  background-color: ${WHITE};
  height: 20px;
  transform: ${props =>
    props.active === 'clicked'
      ? 'translateY(-4px)!important'
      : 'translateY(-4px)'};
  transition: all 0.2s ease-in-out;
  width: 100%;
`;

const BarNumber = styled.div`
  position: relative;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

const BarTitle = styled.div`
  position: absolute;
  background-color: ${WHITE};
  color: ${BLACK};
  flex-shrink: 0;
  font-family: ${TYPE.label.font};
  font-weight: ${TYPE.label.weight};
  font-size: ${TYPE.labelTiny.size}rem;
  letter-spacing: ${TYPE.labelTiny.letterSpacing}px;
  opacity: ${props => (props.active === 'clicked' ? '0!important' : '0')};
  text-transform: uppercase;
  top: 20px;
  transform: translateY(-2px);
  transition: opacity 0.1s, transform 0.1s ease-in;
  white-space: nowrap;
  @media screen and (max-width: 1146px) {
    right: ${props => (props.isLast ? '-40px' : null)};
  }
  @media screen and (max-width: 900px) {
    right: ${props => (props.isLast ? '-20px' : null)};
    left: ${props => (props.isFirst ? '-20px' : null)};
  }
`;

const BarContainer = styled.a`
  width: 100%;
  background: none;
  text-decoration: none;
  position: relative;
  align-items: center;
  bottom: 7px;
  cursor: pointer;
  display: flex;
  height: 60px;
  padding: 0 0 0 10px;
  outline: none;
  border: none !important;
  &:hover ${BarCover} {
    transform: translateY(-20px);
  }
  &:focus ${BarCover} {
    transform: translateY(-20px);
  }
  &:hover ${BarNumber} {
    opacity: 1;
  }
  &:focus ${BarNumber} {
    opacity: 1;
  }
  &:hover ${BarTitle} {
    opacity: 1;
    transform: translateY(1px);
    transition: ${props =>
      props.active === 'clicked'
        ? 'opacity 0.1s ease-in!important, transform 0.1s ease-in!important'
        : 'opacity 0.7s ease-in, transform 0.3s ease-in'};
  }
  &:focus ${BarTitle} {
    opacity: 1;
    transform: translateY(1px);
    transition: ${props =>
      props.active === 'clicked'
        ? 'opacity 0.1s ease-in!important, transform 0.1s ease-in!important'
        : 'opacity 0.7s ease-in, transform 0.3s ease-in'};
  }
  &:focus ${Bar} {
    outline: none;
  }
`;

class NavBar extends React.Component {
  
  state = {
    active: null,
  }

  turnOnActive = () => {
    this.setState({ active: 'clicked' })
  }

  turnOffActive = () => {
    if (this.state.active) {
      this.setState({ active: null })
    }
    return null
  }

  accessibleFocus = index => {
    index === 0
      ? document.querySelector('#toc-card-1').focus()
      : document.querySelector(`#section-title-${index}`).focus()
  }
  
  render() {
    const { navigateSection, currentSection, sectionTitles, slugs } = this.props;
    const { active } = this.state;
    return (
      <StyledContainer>
        <Logo />

        <Progress>
          {sectionTitles.map((section, index) => {
            return (
              <BarContainer
                href={`#${slugs[index]}`}
                onMouseDown={e => e.preventDefault()}
                onClick={e => {
                  e.preventDefault()
                  const eventDetail = e.detail
                  this.turnOnActive()
                  navigateSection(index, () => {
                    const navigateHash = `#${slugs[index]}`
                    navigateHash === window.location.hash
                      ? document.querySelector(navigateHash).scrollIntoView()
                      : navigate(navigateHash)
                    if (eventDetail === 0) this.accessibleFocus(index)
                  })
                }}
                key={`navbar-${index}`}
                onMouseLeave={() => this.turnOffActive()}
                active={active}
              >
                <Bar currentSection={currentSection} sectionNumber={index}>
                  <BarNumber>{`0${index}`}</BarNumber>
                  <BarTitle
                    active={active}
                    isLast={index === sectionTitles.length - 1}
                    isFirst={index === 0}
                  >
                    {section.title}
                  </BarTitle>
                </Bar>

                <BarCover active={active} />
              </BarContainer>
            )
          })}
        </Progress>
        <div style={{ display: 'flex' }}>
          <Hamburger
            onClick={() => {
              document.getElementById('table-of-contents').scrollIntoView()
            }}
          >
            <Image src={menuIcon} width="30" alt="Menu" />
          </Hamburger>
          <ShareButtons />
        </div>
      </StyledContainer>
    )
  }
}

export default NavBar;
