import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;

  background: white;

  table {
    margin-top: 1rem;
  }
`

export const TableRow = styled.tr`
  font-size: 12px;
  font-weight: normal;
  color: #269e97;
`

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    button + button {
      margin-left: 1rem;
    }
  }
`
export const Button = styled.button`
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  background: white;
  cursor: pointer;

  svg {
    margin-right: 8px;
  }
`
