import styled from 'styled-components'

export const OrderContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
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
