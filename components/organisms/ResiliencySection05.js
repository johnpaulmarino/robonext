import React, { useState, useRef } from 'react'
import styled from 'styled-components'

import { S, M } from '../../../styles/breakpoints'

import sectionTitles from '../../../cms/resiliency/section-titles'
import accordionContent from '../../../cms/resiliency/accordion-content'
import resiliencySlugs from '../../../cms/resiliency/slugs'

import Accordion from '../molecules/accordion'

import AccordionPhone from '../atoms/resiliency-accordion-phone'

import Grid from '../atoms/Grid'
import Column from '../atoms/Column'

import {
  Section,
  StyledSectionTitleContainer,
  SectionContent,
} from '../styled/Section'

import Spacer from '../atoms/Spacer'

const AccordionContainer = styled.div`
  width: 100%;
  padding: 2rem 2rem 12rem;

  @media (max-width: ${M}px) {
    padding: 0;
  }
`

const PhoneContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 8rem;
  display: flex;
  justify-content: center;

  @media (max-width: ${S}px) {
    display: none;
  }
`

const SectionContentInner = ({ accordionContent }) => {
  const [currentAccordion, setCurrentAccordion] = useState(0)
  const [bodyHeight, setBodyHeight] = useState(0)

  const item0 = useRef(null)
  const item1 = useRef(null)
  const item2 = useRef(null)
  const item3 = useRef(null)
  const item4 = useRef(null)
  const item5 = useRef(null)
  const item6 = useRef(null)

  const refs = [item0, item1, item2, item3, item4, item5, item6]

  return (
    <Grid>
      <Column width={7} medWidth={6} smallWidth={12}>
        <AccordionContainer>
          <Accordion
            accordionContent={accordionContent}
            refs={refs}
            currentAccordion={currentAccordion}
            setCurrentAccordion={setCurrentAccordion}
            setBodyHeight={setBodyHeight}
            bodyHeight={bodyHeight}
          />
        </AccordionContainer>
      </Column>
      <Column width={5} medWidth={6} smallWidth={0} align={'top'}>
        <PhoneContainer>
          <AccordionPhone currentPhone={currentAccordion} />
        </PhoneContainer>
      </Column>
    </Grid>
  )
}

export default function Component({ checkSectionVisited }) {
  const section = sectionTitles[5]

  const visited = checkSectionVisited(5)

  return (
    <Section style={{ marginBottom: '3rem' }}>
      <Spacer height={6} id={resiliencySlugs[5]} />
      <StyledSectionTitleContainer
        section={section}
        active={visited}
        sectionNum={5}
      />
      <SectionContent active={visited}>
        <SectionContentInner accordionContent={accordionContent} />
      </SectionContent>
      <Spacer height={10} />
    </Section>
  )
}
