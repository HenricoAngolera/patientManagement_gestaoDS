import { useState } from 'react'
import { FaEllipsisH } from 'react-icons/fa'

import { DeleteModal } from '../DeleteModal'
import { InfoModal } from '../InfoModal'

import { Container, Select } from './styles'

export function Options({
  isActiveOption,
  onClickItem,
  patientId,
  onCloseOptions
}) {
  const [modalDelete, setModalDelete] = useState(false)
  const [modalInfo, setModalInfo] = useState(false)
  return (
    <Container>
      <a onClick={onClickItem}>
        <FaEllipsisH />
      </a>
      {isActiveOption && (
        <Select>
          <a
            className="editar"
            onClick={() => {
              setModalInfo(true)
            }}
          >
            Editar
          </a>
          <InfoModal
            closeOptions={onCloseOptions}
            isOpen={modalInfo}
            toggleModal={() => setModalInfo(!modalInfo)}
          />
          <a
            className="excluir"
            onClick={() => {
              setModalDelete(true)
            }}
          >
            Excluir
          </a>
          <DeleteModal
            closeOptions={onCloseOptions}
            isOpen={modalDelete}
            toggleModal={() => setModalDelete(!modalDelete)}
            patientId={patientId}
          ></DeleteModal>
        </Select>
      )}
    </Container>
  )
}
