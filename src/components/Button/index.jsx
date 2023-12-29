import { Container } from './styles'

export function Button({
  title,
  btnColor,
  btnBgColor,
  btnBorder,
  icon,
  ...rest
}) {
  return (
    <Container
      $btnColor={btnColor}
      $btnBgColor={btnBgColor}
      $btnBorder={btnBorder}
      {...rest}
    >
      {icon && icon}
      {title}
    </Container>
  )
}
