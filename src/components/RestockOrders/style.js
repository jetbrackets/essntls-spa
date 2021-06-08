import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 1rem;
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

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 2rem;
`

export const PrintButton = styled.button`
  background: #269e97;
  padding: 0.5rem 2rem;
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  border: 1px solid #269e97;
  outline: none;

  svg {
    margin-right: 8px;
  }
`
export const OptionsButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: 1px solid #269e97;
  outline: none;
  background: #fff;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`

export const MapContainer = styled.div`
  margin-top: 1rem;
`

export const Location = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > section {
    margin-bottom: 2.5rem;
    margin-top: 1rem;
  }
`

export const ItemsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
