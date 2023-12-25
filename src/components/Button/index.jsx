import { Container } from './styles'

export function Button({ title, btnColor, btnBgColor, btnBorder, icon }) {
  return (
    <Container
      btnColor={btnColor}
      btnBgColor={btnBgColor}
      btnBorder={btnBorder}
    >
      {icon && icon}
      {title}
    </Container>
  )
}
