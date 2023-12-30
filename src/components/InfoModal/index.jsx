import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

import userImg from '../../assets/img_placeh.png'

import { Input } from '../Input'
import { Button } from '../Button'
import { Select } from '../Select'

import { Container } from './styles'

export function InfoModal({ isOpen, toggleModal }) {
  const [showContact, setShowContact] = useState(false)
  if (isOpen) {
    return (
      <Container>
        <div>
          <div className="header-modal">
            <div className="nav">
              <a
                className={!showContact && 'active'}
                onClick={() => setShowContact(false)}
              >
                Informações básicas
              </a>
              <a
                className={showContact && 'active'}
                onClick={() => setShowContact(true)}
              >
                Contato
              </a>
            </div>
            <IoMdClose onClick={toggleModal} />
          </div>
          {showContact ? (
            <div className="contact-modal">
              <div className="input-wrapper">
                <Input
                  type="number"
                  label
                  labelTitle="CEP"
                  placeholder="Digite"
                />
                <Input
                  type="text"
                  label
                  labelTitle="Cidade"
                  placeholder="Digite"
                />
                <Input type="text" label labelTitle="UF" placeholder="Digite" />
                <Input
                  type="text"
                  label
                  labelTitle="Endereço"
                  placeholder="Digite"
                />
                <Input
                  type="number"
                  label
                  labelTitle="Número"
                  placeholder="Digite"
                />
                <Input
                  type="text"
                  label
                  labelTitle="Bairro"
                  placeholder="Digite"
                />
                <Input
                  type="text"
                  label
                  labelTitle="Complemento"
                  placeholder="Digite"
                />
              </div>
              <div className="button-modal">
                <Button
                  title="Salvar"
                  btnColor={({ theme }) => theme.COLORS.BACKGROUND2}
                  btnBgColor={({ theme }) => theme.COLORS.BLUE}
                />
              </div>
            </div>
          ) : (
            <div className="info-modal">
              <div className="content-modal">
                <img src={userImg} alt="Imagem genérica avatar de usuário." />
                <div className="input-wrapper">
                  <Input
                    type="text"
                    label
                    labelTitle="Paciente"
                    placeholder="Digite"
                  />
                  <Input
                    type="text"
                    label
                    labelTitle="Apelido"
                    placeholder="Digite"
                  />
                  <Input
                    type="text"
                    label
                    labelTitle="Nacionalidade"
                    placeholder="Digite"
                  />
                  <Input type="date" label labelTitle="Nascimento" />
                  <Input
                    type="number"
                    label
                    labelTitle="CPF"
                    placeholder="Digite"
                  />
                  <Input
                    type="number"
                    label
                    labelTitle="RG"
                    placeholder="Digite"
                  />
                  <Select label labelTitle="Genero">
                    <option value="">Sem Filtro</option>
                    <option value="">Masculino</option>
                    <option value="">Feminino</option>
                    <option value="">Não binário</option>
                    <option value="">Prefiro não informar</option>
                  </Select>
                  <Select label labelTitle="Estado Civil">
                    <option value="">Sem Filtro</option>
                    <option value="">Solteiro(a)</option>
                    <option value="">Relação estável</option>
                    <option value="">Casado(a)</option>
                    <option value="">Viúvo(a)</option>
                  </Select>
                </div>
                <div className="textarea-box">
                  <label htmlFor="obs">Observações Adicionais</label>
                  <textarea id="obs"></textarea>
                </div>
              </div>
              <div className="button-modal">
                <Button
                  title="Próximo"
                  btnColor={({ theme }) => theme.COLORS.BACKGROUND2}
                  btnBgColor={({ theme }) => theme.COLORS.BLUE}
                />
              </div>
            </div>
          )}
        </div>
      </Container>
    )
  }
  return null
}
