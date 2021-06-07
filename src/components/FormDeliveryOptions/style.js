import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;

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
`

export const CurrentOption = styled.a`
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;

  &:hover {
    background: #f0f0f0;
  }

  svg {
    margin-left: 0.5rem;
  }
`
export const Options = styled.div`
  position: absolute;
  right: 0;
  top: 2.4rem;
  display: block;
  min-width: 165px;
  min-height: 155px;
  height: auto;
  padding: 1rem;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  z-index: 100;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);

  &.active {
    opacity: 1;
    pointer-events: initial;
  }
`

export const Option = styled.a`
  display: block;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }

  &:nth-child(1) {
    margin-top: 0;
  }
`
