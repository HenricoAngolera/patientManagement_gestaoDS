import { IoMdClose } from 'react-icons/io'

import modalImg from '../../assets/imageModalD.png'
import { Button } from '../Button'

import { Container } from './styles'

export function DeleteModal({ isOpen, toggleModal }) {
  if (isOpen) {
    return (
      <Container>
        <div>
          <div className="header-modal">
            <h3>Excluir paciente?</h3>
            <IoMdClose onClick={toggleModal} />
          </div>
          <div className="content-modal">
            <img src={modalImg} alt="" />
            <p>Tem certeza que deseja excluir o paciente selecionado?</p>
            <b>Essa ação não poderá ser desfeita.</b>
          </div>
          <div className="buttons-modal">
            <Button
              onClick={toggleModal}
              title="Cancelar"
              btnColor={({ theme }) => theme.COLORS.BLUE}
              btnBgColor={({ theme }) => theme.COLORS.BACKGROUND2}
              btnBorder
            />
            <Button
              title="Excluir"
              btnColor={({ theme }) => theme.COLORS.BACKGROUND2}
              btnBgColor={({ theme }) => theme.COLORS.RED}
            />
          </div>
        </div>
      </Container>
    )
  }
  return null
}
