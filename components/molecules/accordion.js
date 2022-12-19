import React, { useState, useEffect } from 'react';
import styled, { css, keyframes, createGlobalStyle } from 'styled-components';

import { BLACK, VERYLIGHTGRAY, TEEL } from '@styles/colors';
import TYPE, { TYPE_COLORS } from '@/styles/type';

const Accordion = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const AccordionItem = styled.div`
  border-top: 1px solid ${VERYLIGHTGRAY};
  color: ${BLACK};

  &:last-child {
    border-bottom: 1px solid ${VERYLIGHTGRAY};
  }
`;

const AccordionHeader = styled.button`
  display: flex;
  font-family: ${TYPE.m.font};
  font-weight: ${TYPE.m.weight};
  font-size: ${TYPE.m.size}rem;
  line-height: ${TYPE.m.line};
  color: ${TYPE_COLORS.black};
  margin: 0;
  padding: 1.5rem 0;
  cursor: pointer;
  text-align: left;
  background: none;
  border: none;

  &:focus {
    outline: 0;
  }

  span {
    color: ${TEEL};
    width: 3rem;
    text-align: center;
    flex-shrink: 0;
    font-weight: 900;
  }
`;

const DelayedHeightAuto = keyframes`
  to { height: auto; }
`;

const transitionPeriod = 0.5;

const AccordionBody = styled.div`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height ${transitionPeriod}s;
  visibility: hidden;

  ${({ active, bodyHeight }) =>
    active &&
    css`
      visibility: visible;
      height: ${bodyHeight}px;
      animation: ${DelayedHeightAuto} 0.1s forwards;
      animation-delay: ${transitionPeriod}s;
    `}

  ${({ noJs }) =>
    noJs &&
    css`
      visibility: visible;
      height: auto;
    `}

    a {
    border: 3px solid transparent;
  }

  a:focus {
    border: 3px solid ${TEEL};
  }
`;

const AccordionParagraph = styled.p`
  margin: 0;
  padding: 0 1rem 1.75rem 3rem;
  height: auto;
  font-family: ${TYPE.bodySerif.font};
  font-weight: ${TYPE.bodySerif.weight};
  font-size: ${TYPE.bodySerif.size}rem;
  line-height: ${TYPE.bodySerif.line};
`;

const AccordionList = styled.ul`
  margin-top: 0;
  padding-inline-start: 4.3rem;
  height: auto;
  font-family: ${TYPE.bodySerif.font};
  font-weight: ${TYPE.bodySerif.weight};
  font-size: ${TYPE.bodySerif.size}rem;
  line-height: ${TYPE.bodySerif.line};
  padding-bottom: 12px;
`;

const AccordionListItem = styled.li`
  padding-bottom: 1rem;
`;

const AccordionStyles = createGlobalStyle`
  .acc-header-div {
    border: 1px solid white;
  }
  
  :focus > .acc-header-div {
    text-decoration: underline;
    text-decoration-color: ${TEEL};
  }
`;

export const AccordionItems = ({
  accordionContent,
  refs,
  currentAccordion,
  setCurrentAccordion,
  setBodyHeight,
  bodyHeight,
  noJs,
}) =>
  accordionContent.map(({ header, content, contentBullets }, i) => (
    <AccordionItem key={`accordion-item-${i}`}>
      <AccordionHeader
        onMouseDown={e => e.preventDefault()}
        onClick={() => {
          currentAccordion !== i
            ? setCurrentAccordion(i)
            : setCurrentAccordion(null)
          setBodyHeight(refs[i].current.clientHeight)
        }}
        tabIndex="0"
      >
        <span>{currentAccordion !== i ? '+' : '–'}</span>
        <div className="acc-header-div">{header}</div>
      </AccordionHeader>
      <AccordionBody
        active={currentAccordion === i}
        bodyHeight={bodyHeight}
        noJs={noJs}
      >
        <div ref={refs[i]}>
          <AccordionParagraph
            // ref={refs[i]}
            dangerouslySetInnerHTML={{ __html: content }}
          ></AccordionParagraph>
          {contentBullets ? (
            <AccordionList>
              {contentBullets.map((bullet, i) => (
                <AccordionListItem
                  key={`accordion-bullet-item-${i}`}
                  dangerouslySetInnerHTML={{ __html: bullet }}
                ></AccordionListItem>
              ))}
            </AccordionList>
          ) : null}
        </div>
      </AccordionBody>
    </AccordionItem>
  ));

export default function Component({ accordionContent,
  refs,
  currentAccordion,
  setCurrentAccordion,
  setBodyHeight,
  bodyHeight, }) 
  {
  const [noJs, setNoJs] = useState(true)
  useEffect(() => {
    setNoJs(false)
  }, [])

  return (
    <Accordion>
      <AccordionStyles />
      <AccordionItems
        accordionContent={accordionContent}
        refs={refs}
        currentAccordion={currentAccordion}
        setCurrentAccordion={setCurrentAccordion}
        setBodyHeight={setBodyHeight}
        bodyHeight={bodyHeight}
        noJs={noJs}
      />
    </Accordion>
  )
}
