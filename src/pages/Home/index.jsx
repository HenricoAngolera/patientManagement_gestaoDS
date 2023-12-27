import gestaoDsLogo from '../../assets/ds vertical secundaria 1.png'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Container } from './styles'

export function Home() {
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
                <th>Nome</th>
                <th>CPF</th>
                <th>Data de nascimento</th>
                <th>E-mail</th>
                <th>Cidade</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>fulano</td>
                <td>9999999</td>
                <td>99/99/9999</td>
                <td>exemplo@exemplo.com</td>
                <td>Santana do não</td>
                <td>...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </Container>
  )
}
