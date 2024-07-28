import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineColor?: LineColors
  size?: 'small' | 'medium'
  $lineLeft?: boolean
  $lineBottom?: boolean
}

const Heading = ({
  children,
  color = `white`,
  lineColor = `primary`,
  size = `medium`,
  $lineLeft = false,
  $lineBottom = false
}: HeadingProps) => (
  <S.Wrapper
    size={size}
    lineColor={lineColor}
    color={color}
    $lineLeft={$lineLeft}
    $lineBottom={$lineBottom}
  >
    {children}
  </S.Wrapper>
)

export default Heading
