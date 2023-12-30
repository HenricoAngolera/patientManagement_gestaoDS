import { Container } from './styles'

export function Select({ label, labelTitle, children, ...rest }) {
  return (
    <Container>
      {label && <label htmlFor={labelTitle}>{labelTitle}:</label>}
      <select id={labelTitle} {...rest}>
        {children}
      </select>
    </Container>
  )
}
