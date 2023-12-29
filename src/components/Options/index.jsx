import { useState } from 'react'
import { FaEllipsisH } from 'react-icons/fa'

import { DeleteModal } from '../DeleteModal'
import { Container, Select } from './styles'

export function Options({ isActiveOption, onClickItem }) {
  const [modalDelete, setModalDelete] = useState(false)
  return (
    <Container>
      <a onClick={onClickItem}>
        <FaEllipsisH />
      </a>
      {isActiveOption && (
        <Select>
          <a className="editar">Editar</a>
          <a
            className="excluir"
            onClick={() => {
              setModalDelete(true)
            }}
          >
            Excluir
          </a>
          <DeleteModal
            isOpen={modalDelete}
            toggleModal={() => setModalDelete(!modalDelete)}
          ></DeleteModal>
        </Select>
      )}
    </Container>
  )
}
