import styled from 'styled-components'

export const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 4.875rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: start;
  border-radius: 0px 0px 0px 156px;
  z-index: 100;
`

export const BrandContainer = styled.div`
  width: 18.375rem;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Brand = styled.a`
  padding: 1rem;
  cursor: pointer;
  display: block;
`
