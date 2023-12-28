import { Container } from './styles'

export function Options({ patientId }) {
  return (
    <Container>
      <a className="editar">Editar</a>
      <a className="excluir">Excluir</a>
    </Container>
  )
}
