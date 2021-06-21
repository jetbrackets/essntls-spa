import styled from 'styled-components'

export const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 4.875rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0px 0px 0px 156px;
  z-index: 100;

  @media (max-width: 760px) {
    border-radius: 0px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  }
`

export const BrandContainer = styled.div`
  width: 18.375rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 760px) {
    width: 13rem;
  }

  @media (max-width: 520px) {
    width: 10rem;
  }
`

export const Brand = styled.a`
  padding: 1rem;
  cursor: pointer;
  display: block;
`

export const Menu = styled.ul`
  display: none;

  a {
    display: block;
    padding: 0.5rem;
  }

  @media (max-width: 760px) {
    display: block;
    position: absolute;
    width: 100%;
    top: 4.875rem;
    right: 0px;
    background: #1e2a36;
    transition: 0.6s;
    z-index: 1000;
    height: 0px;
    visibility: hidden;
    overflow-y: hidden;

    div {
      margin-top: 2.5rem;
    }

    a {
      color: #fff;
      text-align: center;
      font-size: 20px;

      &.active {
        color: var(--primary-color);
      }
    }

    &.active {
      height: calc(100vh - 4.875rem);
      visibility: visible;
      overflow-y: auto;
    }
  }
`

export const MobileNavigation = styled.nav`
  button {
    display: none;
  }

  @media (max-width: 760px) {
    button {
      display: flex;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: none;
      background: none;
      cursor: pointer;
      gap: 0.5rem;

      span {
        border-top: 2px solid;
        width: 25px;

        &::after,
        &::before {
          content: '';
          display: block;
          width: 25px;
          height: 2px;
          background: currentColor;
          margin-top: 5px;
          transition: 0.3s;
          position: relative;
        }
      }
    }

    &.active {
      span {
        border-top-color: transparent;
        &::before {
          transform: rotate(135deg);
        }
        &::after {
          transform: rotate(-135deg);
          top: -7px;
        }
      }
    }
  }
`
