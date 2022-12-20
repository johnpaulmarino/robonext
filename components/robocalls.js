import React, { Suspense } from 'react';
import { Waypoint } from 'react-waypoint';
import styled from 'styled-components';
import { navigate } from '@reach/router';

import Metadata from 'components/meta';
import metadata from 'cms/robocalls/metadata';


import Layout from 'components/layouts/layout';
import Navbar from 'components/organisms/Navbar';
import Header from 'components/organisms/header-new';
import TableOfContents from 'components/organisms/TableOfContents';
import Footer from 'components/organisms/Footer';

import A11ySkip from 'components/atoms/a11y-skip';

import Section01 from 'components/organisms/RobocallsSection01';
import Section02 from 'components/organisms/RobocallsSection02';
import Section03 from 'components/organisms/RobocallsSection03';
import Section03Breaker from 'components/organisms/RobocallsSection03Breaker';
import Section04 from 'components/organisms/RobocallsSection04';
import Section05 from 'components/organisms/RobocallsSection05';

import headerTitles from 'cms/robocalls/header-titles';
import sectionTitles from 'cms/robocalls/section-titles';
import roboSlugs from 'cms/robocalls/slugs';
import backgroundVideoImage from 'public/static/background-images/robo-video-poster.jpg';


const Main = styled.main``;

class Robocalls extends React.Component {
  state = { currentSection: null, visitedSections: [] }

  // This is causing hydration issue on mount
  // componentDidMount() {
  //   this.setState({ visitedSections: [] })
  // }

  setCurrentSection = sectionNum => {
    const currentSection = sectionNum
    this.setState({ currentSection })
  }

  handleOnEnter = sectionNum => {
    this.setCurrentSection(sectionNum)
    this.visitSection(sectionNum)
  }

  visitSection = sectionNum => {
    const sections = [...this.state.visitedSections]
    sections.push(sectionNum)
    const visitedSections = [...new Set(sections)]
    this.setState({ visitedSections })
  }

  checkSectionVisited = sectionNum => {
    return !!this.state.visitedSections.includes(sectionNum)
  }

  filterVisitedSections = sectionNum => {
    const sections = [...this.state.visitedSections]
    return sections.filter(section => section !== sectionNum)
  }

  navigateSection = (sectionNum, navigate) => {
    const visitedSections = this.filterVisitedSections(sectionNum)
    if (sectionNum === this.state.currentSection) {
      this.setState({ currentSection: sectionNum, visitedSections }, () => {
        navigate()
        setTimeout(() => this.visitSection(sectionNum), 1)
      })
    } else {
      this.setState({ currentSection: sectionNum, visitedSections }, navigate)
    }
  }

  render() {
    const renderPage =
      process.env.GATSBY_PAGE === 'ROBOCALLS' ||
      process.env.GATSBY_PAGE === 'DEV'
    return (
      renderPage && (
        <Suspense fallback={<h1>Loading content</h1>}>
          <Layout>
            <Metadata metadata={metadata(process.env.GATSBY_BASE_URL)} />
            <div>
              <A11ySkip
                text={'Skip to Main Content'}
                navigate={() =>
                  this.navigateSection(1, () => {
                    navigate(`#${roboSlugs[1]}`)
                    document.querySelector('#section-title-1').focus()
                  })
                }
                href="#section-title-1"
              />
              <A11ySkip
                text={'Go to Table of Contents'}
                navigate={() =>
                  this.navigateSection(0, () => {
                    navigate(`#${roboSlugs[0]}`)
                    document.querySelector('#toc-card-1').focus()
                  })
                }
                href="#toc-card-1"
              />
              <Navbar
                sectionTitles={sectionTitles}
                currentSection={this.state.currentSection}
                setCurrentSection={this.setCurrentSection}
                slugs={roboSlugs}
                navigateSection={this.navigateSection}
              />
              <Header
                page={'robocalls'}
                headerTitles={headerTitles}
                videoTitle={'Phone with animated incoming robocalls'}
                backgroundVideoImage={backgroundVideoImage}
                backgroundImage={backgroundVideoImage}
                backgroundVideoUrl={
                  'https://player.vimeo.com/external/354035296.hd.mp4?s=4367cda87574d20e6627e171747aed4202753b20&profile_id=169'
                }
              />
              <Waypoint
                topOffset="300px"
                bottomOffset="300px"
                onEnter={() => this.handleOnEnter(0)}
                onLeave={props => {
                  if (props.currentPosition === 'below') {
                    this.setState({ currentSection: null })
                  }
                }}
                fireOnRapidScroll={false}
              >
                <div>
                  <TableOfContents
                    sectionTitles={sectionTitles}
                    page={'robocalls'}
                    setCurrentSection={this.setCurrentSection}
                    slugs={roboSlugs}
                    navigateSection={this.navigateSection}
                  />
                </div>
              </Waypoint>
              <Main>
                <Waypoint
                  topOffset="300px"
                  bottomOffset="300px"
                  onEnter={() => this.handleOnEnter(1)}
                  fireOnRapidScroll={false}
                >
                  <div>
                    <Section01 checkSectionVisited={this.checkSectionVisited} />
                  </div>
                </Waypoint>
                <Waypoint
                  topOffset="300px"
                  bottomOffset="300px"
                  onEnter={() => this.handleOnEnter(2)}
                  fireOnRapidScroll={false}
                >
                  <div>
                    <Section02 checkSectionVisited={this.checkSectionVisited} />
                  </div>
                </Waypoint>
                <Waypoint
                  topOffset="300px"
                  bottomOffset="300px"
                  onEnter={() => this.handleOnEnter(3)}
                  fireOnRapidScroll={false}
                >
                  <div>
                    <Section03 checkSectionVisited={this.checkSectionVisited} />
                    <Section03Breaker />
                  </div>
                </Waypoint>
                <Waypoint
                  topOffset="300px"
                  bottomOffset="300px"
                  onEnter={() => this.handleOnEnter(4)}
                  fireOnRapidScroll={false}
                >
                  <div>
                    <Section04 checkSectionVisited={this.checkSectionVisited} />
                  </div>
                </Waypoint>
                <Waypoint
                  topOffset="300px"
                  bottomOffset="300px"
                  onEnter={() => this.handleOnEnter(5)}
                  fireOnRapidScroll={false}
                >
                  <div>
                    <Section05 checkSectionVisited={this.checkSectionVisited} />
                  </div>
                </Waypoint>
              </Main>
              <Footer />
            </div>
          </Layout>
        </Suspense>
      )
    )
  }
}

export default Robocalls;
