import userImg from '../../assets/img_placeh.png'

import { Input } from '../Input'
import { Button } from '../Button'
import { Select } from '../Select'

import { Container } from './styles'

export function InfoModal({ isOpen, toggleModal }) {
  if (isOpen) {
    return (
      <Container>
        <div>
          <div className="header-modal">
            <a>Informações básicas</a>
            <a>Contato</a>
          </div>
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
              <Input type="number" label labelTitle="RG" placeholder="Digite" />
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
              <textarea id="obs" resize="false"></textarea>
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
      </Container>
    )
  }
  return null
}
