import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background: #1e2a36;
  width: 18.375rem;
  height: 100vh;
  z-index: -100;

  > div {
    margin-top: calc(4.875rem + 2rem);
  }
`

export const SidebarItem = styled.div`
  width: 100%;
  position: relative;
  height: 36px;

  a {
    display: block;
    color: #fff;
    font-size: 1.5rem;
    margin-top: 0.55rem;
    padding: 0 1.5rem;
  }

  &.active {
    &::after {
      content: '';
      width: 8px;
      height: 36px;
      display: block;
      background: #46bea5;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`
