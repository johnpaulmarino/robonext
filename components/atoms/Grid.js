import React, { Children, cloneElement } from 'react'
import styled from 'styled-components'
import { isEmpty } from 'lodash'
import { L, M, S, XS } from 'styles/breakpoints'
import gridSpacing from 'styles/grid-spacing'

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: ${props => (props.nested ? 0 : gridSpacing.XL.padding)}px;
  padding-right: ${props => (props.nested ? 0 : gridSpacing.XL.padding)}px;
  width: 100%;

  @media screen and (max-width: ${L}px) {
    padding-left: ${props => (props.nested ? 0 : gridSpacing.L.padding)}px;
    padding-right: ${props => (props.nested ? 0 : gridSpacing.L.padding)}px;
  }

  @media screen and (max-width: ${M}px) {
    padding-left: ${props => (props.nested ? 0 : gridSpacing.M.padding)}px;
    padding-right: ${props => (props.nested ? 0 : gridSpacing.M.padding)}px;
  }

  @media screen and (max-width: ${S}px) {
    padding-left: ${props => (props.nested ? 0 : gridSpacing.S.padding)}px;
    padding-right: ${props => (props.nested ? 0 : gridSpacing.S.padding)}px;
  }

  @media screen and (max-width: ${XS}px) {
    padding-left: ${props => (props.nested ? 0 : gridSpacing.XS.padding)}px;
    padding-right: ${props => (props.nested ? 0 : gridSpacing.XS.padding)}px;
  }

  /* @media print {
    display: ${props => (props.hidePrint ? 'none !important' : 'flex')};
    padding-left: ${props => (props.nested ? 0 : gridSpacing.S.padding)}px;
    padding-right: ${props => (props.nested ? 0 : gridSpacing.S.padding)}px;
  } */
`

/**
 * Direct children of a Grid should *only* be Columns.
 * Without any configuration, will automatically set left and right padding to take
 * up (nearly) the entire screen. If the `nested` boolean prop is set, then
 * there won't be any left or right padding (for nested Grids).
 */
const Grid = props => {
  const { children } = props

  let XLcols = 0
  let Lcols = 0
  let Mcols = 0
  let Scols = 0
  let XScols = 0

  return (
    <StyledGrid {...props}>
      {Children.toArray(children).map(child => {
        const XLwidth = child.props.width
        const Lwidth =
          child.props.largeWidth !== undefined
            ? child.props.largeWidth
            : XLwidth
        const Mwidth =
          child.props.medWidth !== undefined ? child.props.medWidth : Lwidth
        const Swidth =
          child.props.smallWidth !== undefined ? child.props.smallWidth : Mwidth
        const XSwidth =
          child.props.xSmallWidth !== undefined
            ? child.props.xSmallWidth
            : Swidth

        XLcols += XLwidth
        Lcols += Lwidth
        Mcols += Mwidth
        Scols += Swidth
        XScols += XSwidth

        const addlProps = {}

        if (XLcols === 12) {
          addlProps.XLlast = true
          XLcols = 0
        }

        if (Lcols === 12) {
          addlProps.Llast = true
          Lcols = 0
        }

        if (Mcols === 12) {
          addlProps.Mlast = true
          Mcols = 0
        }

        if (Scols === 12) {
          addlProps.Slast = true
          Scols = 0
        }

        if (XScols === 12) {
          addlProps.XSlast = true
          XScols = 0
        }

        if (!isEmpty(addlProps)) {
          child = cloneElement(child, Object.assign({}, child.props, addlProps))
        }

        return child
      })}
    </StyledGrid>
  )
}

export default Grid;
