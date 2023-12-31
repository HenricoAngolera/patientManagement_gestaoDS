import { useState, useEffect } from 'react'
import { IoMdClose } from 'react-icons/io'

import userImg from '../../assets/img_placeh.png'

import { Input } from '../Input'
import { Button } from '../Button'
import { Select } from '../Select'

import { addPatient, editPatient } from '../../data/PatientsData'

import { api } from '../../services/api'

import { Container } from './styles'

export function InfoModal({
  isOpen,
  toggleModal,
  closeOptions,
  patientEdit,
  patientId
}) {
  const [showContact, setShowContact] = useState(false)

  const [viaApiAddress, setViaApiAddress] = useState({})

  const [name, setName] = useState(patientEdit ? patientEdit.name : '')
  const [surname, setSurname] = useState(patientEdit ? patientEdit.surname : '')
  const [nationality, setNationality] = useState(
    patientEdit ? patientEdit.nationality : ''
  )
  const [birthDay, setBirthDay] = useState(
    patientEdit ? patientEdit.birthDay : ''
  )
  const [cpf, setCpf] = useState(patientEdit ? patientEdit.cpf : '')
  const [rg, setRg] = useState(patientEdit ? patientEdit.rg : '')
  const [gender, setGender] = useState(patientEdit ? patientEdit.gender : '')
  const [maritalStatus, setMaritalStatus] = useState(
    patientEdit ? patientEdit.maritalStatus : ''
  )
  const [addObs, setAddObs] = useState(patientEdit ? patientEdit.addObs : '')

  const [cep, setCep] = useState(patientEdit ? patientEdit.cep : '')
  const [city, setCity] = useState(patientEdit ? patientEdit.city : '')
  const [uf, setUf] = useState(patientEdit ? patientEdit.uf : '')
  const [address, setAddress] = useState(patientEdit ? patientEdit.address : '')
  const [houseNumber, setHouseNumber] = useState(
    patientEdit ? patientEdit.houseNumber : ''
  )
  const [neighborhood, setNeighborhood] = useState(
    patientEdit ? patientEdit.neighborhood : ''
  )
  const [complement, setComplement] = useState(
    patientEdit ? patientEdit.complement : ''
  )

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

  function updatePatient() {
    editPatient(patient, patientId)
    toggleModal()
  }

  async function completeAddress() {
    const { data } = await api.get(`/${cep}/json`)
    const { bairro, complemento, localidade, logradouro, uf } = data
    setViaApiAddress({ bairro, complemento, localidade, logradouro, uf })
  }

  useEffect(() => {
    setShowContact(false)
  }, [])

  useEffect(() => {
    completeAddress()
  }, [cep])

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
                  onBlur={completeAddress}
                  defaultValue={patientEdit ? cep : ''}
                />
                <Input
                  type="text"
                  label
                  labelTitle="Cidade"
                  placeholder="Digite"
                  onChange={e => setCity(e.target.value)}
                  value={viaApiAddress.localidade}
                  defaultValue={patientEdit ? city : ''}
                />
                <Input
                  type="text"
                  label
                  labelTitle="UF"
                  placeholder="Digite"
                  onChange={e => setUf(e.target.value)}
                  value={viaApiAddress.uf}
                  defaultValue={patientEdit ? uf : ''}
                />
                <Input
                  type="text"
                  label
                  labelTitle="Endereço"
                  placeholder="Digite"
                  onChange={e => setAddress(e.target.value)}
                  value={viaApiAddress.logradouro}
                  defaultValue={patientEdit ? address : ''}
                />
                <Input
                  type="number"
                  label
                  labelTitle="Número"
                  placeholder="Digite"
                  onChange={e => setHouseNumber(e.target.value)}
                  defaultValue={patientEdit ? houseNumber : ''}
                />
                <Input
                  type="text"
                  label
                  labelTitle="Bairro"
                  placeholder="Digite"
                  onChange={e => setNeighborhood(e.target.value)}
                  value={viaApiAddress.bairro}
                  defaultValue={patientEdit ? neighborhood : ''}
                />
                <Input
                  type="text"
                  label
                  labelTitle="Complemento"
                  placeholder="Digite"
                  onChange={e => setComplement(e.target.value)}
                  value={viaApiAddress.complemento}
                  defaultValue={patientEdit ? complement : ''}
                />
              </div>
              <div className="button-modal">
                <Button
                  title="Salvar"
                  btnColor={({ theme }) => theme.COLORS.BACKGROUND2}
                  btnBgColor={({ theme }) => theme.COLORS.BLUE}
                  onClick={() => {
                    patientEdit ? updatePatient() : savePatient()
                    closeOptions(null)
                  }}
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
                    defaultValue={patientEdit ? name : ''}
                  />
                  <Input
                    type="text"
                    label
                    labelTitle="Apelido"
                    placeholder="Digite"
                    onChange={e => setSurname(e.target.value)}
                    defaultValue={patientEdit ? surname : ''}
                  />
                  <Input
                    type="text"
                    label
                    labelTitle="Nacionalidade"
                    placeholder="Digite"
                    onChange={e => setNationality(e.target.value)}
                    defaultValue={patientEdit ? nationality : ''}
                  />
                  <Input
                    type="date"
                    label
                    labelTitle="Nascimento"
                    onChange={e => setBirthDay(e.target.value)}
                    defaultValue={patientEdit ? birthDay : ''}
                  />
                  <Input
                    type="number"
                    label
                    labelTitle="CPF"
                    placeholder="Digite"
                    onChange={e => setCpf(e.target.value)}
                    defaultValue={patientEdit ? cpf : ''}
                  />
                  <Input
                    type="number"
                    label
                    labelTitle="RG"
                    placeholder="Digite"
                    onChange={e => setRg(e.target.value)}
                    defaultValue={patientEdit ? rg : ''}
                  />
                  <Select
                    onChange={e => setGender(e.target.value)}
                    label
                    labelTitle="Genero"
                    defaultValue={patientEdit ? gender : ''}
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
                    defaultValue={patientEdit ? maritalStatus : ''}
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
                    defaultValue={patientEdit ? addObs : ''}
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
