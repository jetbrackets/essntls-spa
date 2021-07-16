import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
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
    width: 16px;
    height: 16px;
  }

  &.delete {
    padding: 0.5rem 1rem;
    border-color: #962800;
    color: #962800;
  }

  &.add {
    margin-bottom: 1rem;
  }

  @media (max-width: 760px) {
    padding: 0.5rem;
    width: 50px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin: 0;
    }

    span {
      display: none;
    }
  }

  @media (max-width: 430px) {
    padding: 0.25rem;
    font-size: 12px;
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
