import styled, { DefaultTheme, css } from 'styled-components'
import { HeadingProps, LineColors } from '.'
import media from 'styled-media-query'

const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,

  lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({
    theme,
    color,
    lineColor,
    size,
    $lineLeft: $lineLeft,
    $lineBottom: $lineBottom
  }) => css`
    color: ${theme.colors[color!]};

    ${$lineLeft && lineColor && wrapperModifiers.lineLeft(theme, lineColor)}
    ${$lineBottom && lineColor && wrapperModifiers.lineBottom(theme, lineColor)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
