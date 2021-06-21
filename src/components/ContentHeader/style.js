import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Title = styled.h2`
  color: #1e2a36;
`
