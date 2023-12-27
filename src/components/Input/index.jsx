import { IoIosSearch } from 'react-icons/io'

import { Container } from './styles'

export function Input({ label, labelTitle, searchColor, icon, ...rest }) {
  return (
    <Container>
      {label && <label htmlFor={labelTitle}>{labelTitle}</label>}
      <div className="input-box">
        {icon && <IoIosSearch />}
        <input id={labelTitle} $searchColor={searchColor} {...rest} />
      </div>
    </Container>
  )
}
