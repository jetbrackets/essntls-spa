import styled, { css } from 'styled-components'

export const TableRow = styled.tr`
  font-size: 12px;
  font-weight: normal;
  color: #269e97;
`

export const ContainerButtons = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 2rem;

  div {
    button {
      margin-right: 8px;
      margin-top: 8px;
    }
  }

  @media (max-width: 759px) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`

const customMediaButton = css`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: column;

  button {
    margin-top: 8px !important;
  }
`

export const Wrapper = styled.div`
  @media (max-width: 1000px) {
    ${customMediaButton}
  }

  @media (max-width: 759px) {
    flex-direction: row;
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

  @media (max-width: 760px) {
    padding: 0.5rem;
  }

  @media (max-width: 430px) {
    padding: 0.25rem;
    font-size: 12px;
  }
`

export const ContainerSwtich = styled.div`
  label {
    display: flex;
    align-items: center;
  }

  span {
    margin-left: 8px;
  }
`
export const customStyles = {
  cells: {
    style: {
      padding: '.5rem'
    }
  },
  headCells: {
    style: {
      color: 'var(--primary-color)'
    }
  }
}
