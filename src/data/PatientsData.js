let patients = [
  {
    id: crypto.randomUUID(),
    name: 'fulano',
    cpf: '9999999',
    birthDay: '99-99-9999',
    email: 'teste@gestaods.com.br',
    city: 'Santana do não'
  }
]

export function addPatient(patient) {
  const patientData = {
    id: crypto.randomUUID(),
    email: 'teste@gestaods.com.br',
    ...patient
  }
  patients.push(patientData)
}

export function removePatient(patientId) {
  let patientsInList = patients.filter(patient => patient.id != patientId)

  patients = patientsInList
}

export function findPatient(patientId) {
  let patientFound = patients.filter(patient => patient.id == patientId)

  return patientFound[0]
  console.log(patientFound[0])
}

export function usePatients() {
  return patients
}
