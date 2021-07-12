import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #eee;

  > div {
    display: flex;
    margin-bottom: 1rem;

    button {
      margin-left: auto;
    }
  }

  .tabPane {
    width: 100%;
  }

  .row {
    width: 100%;
    margin: 0 !important;
  }
`

export const BlockButton = styled.button`
  border: 1px solid #269e97;
  padding: 0.5rem 1rem;
  color: #269e97;
  background: #fff;
  text-transform: uppercase;
  font-weight: bold;

  > svg {
    margin-right: 8px;
  }
`

export const Button = styled.button`
  min-width: 150px;
  border: none;
  outline: none;
  border-bottom: 3px solid transparent;
  background: #fff;
  transition: 0.3s ease-in;
  color: #969696;

  &.active {
    border-bottom: 3px solid #269e97;
    color: #269e97;
    font-weight: 600;
  }
`

export const CustomerProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  margin-bottom: 2rem;

  p {
    margin: 8px 0;
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
