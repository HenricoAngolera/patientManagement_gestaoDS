import { IoIosSearch } from 'react-icons/io'

import { Container } from './styles'

export function Input({
  label,
  labelTitle,
  searchColor = false,
  icon,
  textPosition,
  ...rest
}) {
  return (
    <Container>
      {label && <label htmlFor={labelTitle}>{labelTitle}:</label>}
      <div className="input-box" $textPosition={textPosition}>
        {icon && <IoIosSearch />}
        <input id={labelTitle} $searchcolor={searchColor} {...rest} />
      </div>
    </Container>
  )
}
