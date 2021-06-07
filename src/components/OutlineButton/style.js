import styled from 'styled-components'

export const OutlineButton = styled.button`
  width: 229px;
  height: 36px;
  padding: 8px 24px 7px;
  border: 1px solid #269e97;
  color: #269e97;
  background: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.9rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #f3fcfc;
  }
`
