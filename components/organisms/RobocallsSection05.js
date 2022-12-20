import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { S, M } from 'styles/breakpoints';
import SPACING from 'styles/spacing';

import sectionTitles from 'cms/robocalls/section-titles';
import accordionContent from 'cms/robocalls/accordion-content';
import roboSlugs from 'cms/robocalls/slugs';

import Accordion from 'components/molecules/accordion';

import AccordionPhone from 'components/atoms/robocalls-accordion-phone';

import Grid from 'components/atoms/Grid';
import Column from 'components/atoms/Column';

import {
  Section,
  StyledSectionTitleContainer,
  SectionContent,
} from 'components/styled/Section';

import Spacer from 'components/atoms/Spacer';

const AccordionContainer = styled.div`
  width: 100%;
  padding: 2rem 2rem 16rem;

  @media (max-width: ${M}px) {
    padding: 0;
  }
`;

const PhoneContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 8rem;
  display: flex;
  justify-content: center;
  /* padding: ${SPACING.l}rem; */

  @media (max-width: ${S}px) {
    display: none;
  }
`;

const PhoneContainerInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export default function Component({ checkSectionVisited }) {
  const section = sectionTitles[5];
  const [currentAccordion, setCurrentAccordion] = useState(0);
  const [bodyHeight, setBodyHeight] = useState(0);

  const item0 = useRef(null);
  const item1 = useRef(null);
  const item2 = useRef(null);
  const item3 = useRef(null);
  const item4 = useRef(null);
  const item5 = useRef(null);
  const item6 = useRef(null);

  const refs = [item0, item1, item2, item3, item4, item5, item6];

  const visited = checkSectionVisited(5);

  return (
    <Section style={{ marginBottom: '3rem' }}>
      <Spacer height={5} id={roboSlugs[5]} />
      <StyledSectionTitleContainer
        section={section}
        active={visited}
        largeMaxWidth={780}
        medMaxWidth={600}
        smallMaxWidth={600}
        sectionNum={5}
      />
      <SectionContent active={visited}>
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
              <PhoneContainerInner>
                <AccordionPhone currentPhone={currentAccordion} />
              </PhoneContainerInner>
            </PhoneContainer>
          </Column>
        </Grid>
      </SectionContent>
    </Section>
  )
}
