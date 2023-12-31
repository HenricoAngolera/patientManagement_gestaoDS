import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

import userImg from '../../assets/img_placeh.png'

import { Input } from '../Input'
import { Button } from '../Button'
import { Select } from '../Select'

import { addPatient } from '../../data/PatientsData'

import { Container } from './styles'

export function InfoModal({ isOpen, toggleModal }) {
  const [showContact, setShowContact] = useState(false)

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [nationality, setNationality] = useState('')
  const [birthDay, setBirthDay] = useState('')
  const [cpf, setCpf] = useState('')
  const [rg, setRg] = useState('')
  const [gender, setGender] = useState('')
  const [maritalStatus, setMaritalStatus] = useState('')
  const [addObs, setAddObs] = useState('')

  const [cep, setCep] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')
  const [address, setAddress] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [complement, setComplement] = useState('')

  const patient = {
    name,
    surname,
    nationality,
    birthDay,
    cpf,
    rg,
    gender,
    maritalStatus,
    addObs,
    cep,
    city,
    uf,
    address,
    houseNumber,
    neighborhood,
    complement
  }

  function savePatient() {
    addPatient(patient)
    toggleModal()
  }

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
                  onChange={e => setCep(e.target.value)}
                />
                <Input
                  type="text"
                  label
                  labelTitle="Cidade"
                  placeholder="Digite"
                  onChange={e => setCity(e.target.value)}
                />
                <Input
                  type="text"
                  label
                  labelTitle="UF"
                  placeholder="Digite"
                  onChange={e => setUf(e.target.value)}
                />
                <Input
                  type="text"
                  label
                  labelTitle="Endereço"
                  placeholder="Digite"
                  onChange={e => setAddress(e.target.value)}
                />
                <Input
                  type="number"
                  label
                  labelTitle="Número"
                  placeholder="Digite"
                  onChange={e => setHouseNumber(e.target.value)}
                />
                <Input
                  type="text"
                  label
                  labelTitle="Bairro"
                  placeholder="Digite"
                  onChange={e => setNeighborhood(e.target.value)}
                />
                <Input
                  type="text"
                  label
                  labelTitle="Complemento"
                  placeholder="Digite"
                  onChange={e => setComplement(e.target.value)}
                />
              </div>
              <div className="button-modal">
                <Button
                  title="Salvar"
                  btnColor={({ theme }) => theme.COLORS.BACKGROUND2}
                  btnBgColor={({ theme }) => theme.COLORS.BLUE}
                  onClick={() => savePatient()}
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
                    onChange={e => setName(e.target.value)}
                  />
                  <Input
                    type="text"
                    label
                    labelTitle="Apelido"
                    placeholder="Digite"
                    onChange={e => setSurname(e.target.value)}
                  />
                  <Input
                    type="text"
                    label
                    labelTitle="Nacionalidade"
                    placeholder="Digite"
                    onChange={e => setNationality(e.target.value)}
                  />
                  <Input
                    type="date"
                    label
                    labelTitle="Nascimento"
                    onChange={e => setBirthDay(e.target.value)}
                  />
                  <Input
                    type="number"
                    label
                    labelTitle="CPF"
                    placeholder="Digite"
                    onChange={e => setCpf(e.target.value)}
                  />
                  <Input
                    type="number"
                    label
                    labelTitle="RG"
                    placeholder="Digite"
                    onChange={e => setRg(e.target.value)}
                  />
                  <Select
                    onChange={e => setGender(e.target.value)}
                    label
                    labelTitle="Genero"
                  >
                    <option value="">Sem Filtro</option>
                    <option value="mas">Masculino</option>
                    <option value="fem">Feminino</option>
                    <option value="not-b">Não binário</option>
                    <option value="no">Prefiro não informar</option>
                  </Select>
                  <Select
                    onChange={e => setMaritalStatus(e.target.value)}
                    label
                    labelTitle="Estado Civil"
                  >
                    <option value="">Sem Filtro</option>
                    <option value="sin">Solteiro(a)</option>
                    <option value="rel">Relação estável</option>
                    <option value="mar">Casado(a)</option>
                    <option value="wid">Viúvo(a)</option>
                  </Select>
                </div>
                <div className="textarea-box">
                  <label htmlFor="obs">Observações Adicionais</label>
                  <textarea
                    onChange={e => setAddObs(e.target.value)}
                    id="obs"
                  ></textarea>
                </div>
              </div>
              <div className="button-modal">
                <Button
                  title="Próximo"
                  btnColor={({ theme }) => theme.COLORS.BACKGROUND2}
                  btnBgColor={({ theme }) => theme.COLORS.BLUE}
                  onClick={() => setShowContact(true)}
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
