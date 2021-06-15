import { Routes, Route } from 'react-router-dom'

import * as S from './style'

import InventoryOverview from '../InventoryOverview'
import NewProduct from '../NewProduct'

const InventoryComponent = () => {
  return (
    <>
      <S.Wrapper>
        <Routes>
          <Route path="/" element={<InventoryOverview />} />
          <Route path="new-product" element={<NewProduct />} />
        </Routes>
      </S.Wrapper>
    </>
  )
}

export default InventoryComponent
