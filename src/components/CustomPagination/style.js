import styled from 'styled-components'

export const Wrapper = styled.div`
  a {
    color: var(--primary-color) !important;
  }

  & .active .page-link {
    color: #fff !important;
    background-color: var(--primary-color) !important;
    border-color: var(--primary-color) !important;
  }
`
