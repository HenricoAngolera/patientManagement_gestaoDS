import { FaEllipsisH } from 'react-icons/fa'

import { Container, Select } from './styles'

export function Options({ isActiveOption, onClickItem }) {
  return (
    <Container>
      <a onClick={onClickItem}>
        <FaEllipsisH />
      </a>
      {isActiveOption && (
        <Select>
          <a className="editar">Editar</a>
          <a className="excluir">Excluir</a>
        </Select>
      )}
    </Container>
  )
}
