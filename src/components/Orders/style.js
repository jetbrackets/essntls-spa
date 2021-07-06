import styled from 'styled-components'

export const OrderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #eee;
`

export const TableRow = styled.tr`
  font-size: 12px;
  font-weight: normal;
  color: #269e97;
`

export const Td = styled.td`
  .progress {
    border-radius: 0 !important;
    height: 8px !important;
  }

  .progress-bar {
    background-color: #269e97 !important;
  }
`

export const GetRealTimeButton = styled.button`
  max-width: 229px;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #269e97;
  border: 1px solid #269e97;
  text-transform: uppercase;
  background: #fff;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 10px;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
  }
`

export const MapContainer = styled.div`
  margin-top: 1rem;
`

export const Location = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  > section {
    margin-bottom: 2.5rem;
    margin-top: 1rem;
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  margin-bottom: 1rem;

  p {
    padding: 0 2rem 0 0;
  }

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
  }
`

export const ItemsContainer = styled.div`
  padding: 0 1.4rem 0 0;

  table {
    align-self: flex-start;
  }

  @media (max-width: 671px) {
    margin-top: 1rem;
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
