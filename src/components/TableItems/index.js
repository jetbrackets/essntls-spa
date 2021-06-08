import * as S from './style'

const TableItems = ({ children, customHeight }) => {
  return (
    <S.TableItems customHeight={customHeight} className={`table-responsive `}>
      <table className="table table-striped">
        <tbody>{children}</tbody>
      </table>
    </S.TableItems>
  )
}

export default TableItems
