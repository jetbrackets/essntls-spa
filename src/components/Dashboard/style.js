import styled from 'styled-components'

export const Wrapper = styled.div`
  background: white;
  margin-top: 1rem;
  padding: 1rem;

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 0.5rem;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`

export const MapContainer = styled.div``

export const ActiveContainer = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
      margin-top: 1.5rem;
      grid-column: 1;
      grid-auto-flow: dense;
    }
  }
`

export const ActiveList = styled.div`
  > div {
    width: 100%;
  }
`
