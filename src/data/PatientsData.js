
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

export function usePatients() {
  return patients
}