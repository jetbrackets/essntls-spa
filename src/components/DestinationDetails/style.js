import styled from 'styled-components'

export const CircleContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 1rem;
    display: block;
  }

  p {
    margin: 0;
    font-size: 14px;
  }

  &:nth-child(2) {
    margin-top: 2rem;
  }
`
