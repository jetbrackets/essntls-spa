import { useState } from 'react'

import * as S from './style'

import { ReactComponent as ArrowDow } from '../../assets/icons/arrow-down.svg'

const FormDeliveryOptions = () => {
  const [activeDropDown, setActiveDropDown] = useState(false)

  function handleSelected({ target }) {
    console.log(target.classList.add('ok'))
  }

  return (
    <S.Wrapper>
      <input type="text" />
      <S.FilterDeliveryOptions>
        <S.CurrentOption onClick={() => setActiveDropDown(!activeDropDown)}>
          All
          <ArrowDow />
        </S.CurrentOption>
        <S.Options className={activeDropDown ? 'active' : ''}>
          <S.Option onClick={handleSelected}>All</S.Option>
          <S.Option>In Route</S.Option>
          <S.Option>Awaiting acceptance</S.Option>
          <S.Option>Completed</S.Option>
          <S.Option>Canceled</S.Option>
        </S.Options>
      </S.FilterDeliveryOptions>
    </S.Wrapper>
  )
}

export default FormDeliveryOptions
