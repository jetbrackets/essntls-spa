import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 42px;
    width: 42px;
    flex: 1;
  }
`

export const Info = styled.div`
  margin-left: 8px;

  span {
    display: ${(props) => (props.isVisible === true ? 'block' : 'none')};
    font-size: 12px;
    color: #969696;
  }
`
