import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  margin-bottom: 1rem;

  > input {
    background: #fff;
    padding: 8px 16px 8px 12px;
    border: 1px solid #969696;

    font-size: 14px;
    line-height: 16px;
  }
`

export const FilterDeliveryOptions = styled.div`
  margin-left: 0.5rem;

  select {
    border: 0;
    background: none;
    outline: none;
    cursor: pointer;
    text-transform: capitalize;
  }
`
