import React, { Suspense } from 'react'
import styled from 'styled-components'
import { Waypoint } from 'react-waypoint'
import { navigate } from '@reach/router'

import Metadata from '../components/meta'
import metadata from '../../cms/resiliency/metadata'

import Layout from '../components/layouts/layout'
import Navbar from './../components/organisms/Navbar'
import Header from './../components/organisms/header-new'
import TableOfContents from '../components/organisms/TableOfContents'
import Footer from './../components/organisms/Footer'

import A11ySkip from '../components/atoms/a11y-skip'

import Section01 from './../components/organisms/ResiliencySection01'
import Section02 from './../components/organisms/ResiliencySection02'
import Section02Breaker from '../components/organisms/ResiliencySection02Breaker'
import Section03 from './../components/organisms/ResiliencySection03'
import Section04 from './../components/organisms/ResiliencySection04'
import Section05 from './../components/organisms/ResiliencySection05'

import headerTitles from '../../cms/resiliency/header-titles'
import sectionTitles from '../../cms/resiliency/section-titles'
import resiliencySlugs from '../../cms/resiliency/slugs'

import backgroundVideoImage from '../../static/background-images/resiliency-video-poster.jpg'
import backgroundImageMobile from '../../static/background-images/resiliency-mobile-header.jpg'

const Main = styled.main``

class Resiliency extends React.Component {
  state = {
    currentSection: null,
    visitedSections: [],
  }

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
    window.history.pushState({}, '', `#${resiliencySlugs[sectionNum]}`)
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
      process.env.GATSBY_PAGE === 'RESILIENCY' ||
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
                    navigate(`#${resiliencySlugs[1]}`)
                    document.querySelector('#section-title-1').focus()
                  })
                }
                href="#section-title-1"
              />
              <A11ySkip
                text={'Go to Table of Contents'}
                navigate={() =>
                  this.navigateSection(0, () => {
                    navigate(`#${resiliencySlugs[0]}`)
                    document.querySelector('#toc-card-1').focus()
                  })
                }
                href="#toc-card-1"
              />
              <Navbar
                sectionTitles={sectionTitles}
                currentSection={this.state.currentSection}
                setCurrentSection={this.setCurrentSection}
                slugs={resiliencySlugs}
                navigateSection={this.navigateSection}
              />
              <Header
                page={'resiliency'}
                headerTitles={headerTitles}
                backgroundVideoUrl={
                  'https://player.vimeo.com/external/351483312.hd.mp4?s=d12122aae0c572d486c95a31d30cb21be0aa8c65&profile_id=175'
                }
                videoTitle={'Aerial view of neighborhood showing powerlines'}
                backgroundVideoImage={backgroundVideoImage}
                backgroundImage={backgroundImageMobile}
              />
              <Waypoint
                topOffset="300px"
                bottomOffset="300px"
                onEnter={() => this.handleOnEnter(0)}
                onLeave={props =>
                  props.currentPosition === 'below'
                    ? this.setState({ currentSection: null })
                    : this.setState({ currentSection: 1 })
                }
                fireOnRapidScroll={false}
              >
                <div>
                  <TableOfContents
                    sectionTitles={sectionTitles}
                    page={'resiliency'}
                    setCurrentSection={this.setCurrentSection}
                    slugs={resiliencySlugs}
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
                  onLeave={wpObj =>
                    wpObj.currentPosition === 'below'
                      ? null
                      : this.setState({ currentSection: 2 })
                  }
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
                  onLeave={wpObj =>
                    wpObj.currentPosition === 'below'
                      ? null
                      : this.setState({ currentSection: 3 })
                  }
                >
                  <div>
                    <Section02 checkSectionVisited={this.checkSectionVisited} />
                    <Section02Breaker />
                  </div>
                </Waypoint>

                <Waypoint
                  topOffset="300px"
                  bottomOffset="300px"
                  onEnter={() => this.handleOnEnter(3)}
                  fireOnRapidScroll={false}
                  onLeave={wpObj =>
                    wpObj.currentPosition === 'below'
                      ? null
                      : this.setState({ currentSection: 4 })
                  }
                >
                  <div>
                    <Section03 checkSectionVisited={this.checkSectionVisited} />
                  </div>
                </Waypoint>

                <Waypoint
                  topOffset="300px"
                  bottomOffset="300px"
                  onEnter={() => this.handleOnEnter(4)}
                  fireOnRapidScroll={false}
                  onLeave={wpObj =>
                    wpObj.currentPosition === 'below'
                      ? null
                      : this.setState({ currentSection: 5 })
                  }
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
                  onLeave={wpObj =>
                    wpObj.currentPosition === 'below' ? null : null
                  }
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

export default Resiliency
