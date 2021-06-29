import Pagination from 'react-js-pagination'

import * as S from './style.js'

const CustomPagination = ({ value, setPageNumber }) => {
  return (
    <S.Wrapper>
      {value && (
        <Pagination
          activePage={value.current_page}
          totalItemsCount={value.total}
          itemsCountPerPage={value.per_page}
          itemClass="page-item"
          linkClass="page-link"
          // pageRangeDisplayed={2}
          onChange={(pageNumber) => setPageNumber(pageNumber)}
        />
      )}
    </S.Wrapper>
  )
}

export default CustomPagination
