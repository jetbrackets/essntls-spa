import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background: #1e2a36;
  width: 14.375rem;
  height: 100%;

  > div {
    margin-top: calc(4.875rem + 2rem);
    height: calc(100% - 7.875rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;

    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;

    svg {
      margin-right: 8px;
    }
  }
`

export const SidebarItem = styled.div`
  width: 100%;
  position: relative;
  height: 36px;
  display: flex;
  align-items: center;

  a {
    display: block;
    color: #fff;
    font-size: 1rem;
    padding: 0 1rem;
    cursor: pointer;

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
  }
`
