import styled from 'styled-components'

export const TableItems = styled.div`
  max-height: ${(props) => props.customHeight};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #269e97;
    border-radius: 4px;
  }

  tr {
    font-size: 14px;

    td {
      font-size: 14px;
    }
  }
`
