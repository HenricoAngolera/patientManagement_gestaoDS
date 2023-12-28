import { useState } from 'react'
import { HiMiniArrowsUpDown } from 'react-icons/hi2'

import gestaoDsLogo from '../../assets/ds vertical secundaria 1.png'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Options } from '../../components/Options'
import { Container } from './styles'

export function Home() {
  const [activeOption, setActiveOption] = useState(null)

  const patients = [
    {
      id: crypto.randomUUID(),
      name: 'fulano',
      cpf: '9999999',
      birthday: '99/99/9999',
      email: 'teste@gestaods.com.br',
      city: 'Santana do não'
    },
    {
      id: crypto.randomUUID(),
      name: 'fulano',
      cpf: '9999999',
      birthday: '99/99/9999',
      email: 'teste@gestaods.com.br',
      city: 'Santana do não'
    },
    {
      id: crypto.randomUUID(),
      name: 'fulano',
      cpf: '9999999',
      birthday: '99/99/9999',
      email: 'teste@gestaods.com.br',
      city: 'Santana do não'
    }
  ]

  function handleClick(id) {
    setActiveOption(() => (activeOption === id ? null : id))
  }

  return (
    <Container>
      <div className="logo">
        <img
          src={gestaoDsLogo}
          alt="logo da gestãoDS, é um estetoscópio roxo acima de Gestão escrita em cinza, e DS escrito em roxo"
        />
      </div>
      <main>
        <div className="menuBar">
          <h2>Listagem de pacientes</h2>
          <div className="actions">
            <Input type="text" placeholder="Digite" searchColor icon />
            <Button
              title="Adicionar paciente"
              btnBgColor={({ theme }) => theme.COLORS.BLUE}
              btnColor={({ theme }) => theme.COLORS.BACKGROUND2}
            />
          </div>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>
                  Nome{' '}
                  <a className="blue">
                    <HiMiniArrowsUpDown />
                  </a>
                </th>
                <th>
                  CPF{' '}
                  <a className="blue">
                    <HiMiniArrowsUpDown />
                  </a>
                </th>
                <th>
                  Data de nascimento{' '}
                  <a className="blue">
                    <HiMiniArrowsUpDown />
                  </a>
                </th>
                <th>
                  E-mail{' '}
                  <a className="blue">
                    <HiMiniArrowsUpDown />
                  </a>
                </th>
                <th>
                  Cidade{' '}
                  <a className="blue">
                    <HiMiniArrowsUpDown />
                  </a>
                </th>
                <th>
                  Ações{' '}
                  <a className="blue">
                    <HiMiniArrowsUpDown />
                  </a>
                </th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={patient.id}>
                  <td className="blue">{patient.name}</td>
                  <td>{patient.cpf}</td>
                  <td>{patient.birthday}</td>
                  <td>{patient.email}</td>
                  <td>{patient.city}</td>
                  <td>
                    <Options
                      onClickItem={() => handleClick(index)}
                      isActiveOption={index === activeOption}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </Container>
  )
}
