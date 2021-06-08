import styled from 'styled-components'

export const Wrapper = styled.a`
  width: 100%;
  display: flex;
  padding: ${(props) => (props.inDashboard === true ? '0.5rem' : '0px')};
  cursor: ${(props) => (props.inDashboard === true ? 'pointer' : 'auto')};

  img {
    height: 42px;
    width: 42px;
  }

  &:hover {
    background: ${(props) => (props.inDashboard === true ? '#eee' : 'none')};
  }
`

export const Info = styled.div`
  margin-left: 8px;

  span {
    font-size: 12px;
    color: #969696;
    margin-left: 4px;
  }
`
export const Status = styled.p`
  margin-top: 5px;
  font-size: 12px;

  display: ${(props) => (props.inDashboard === true ? 'block' : 'none')};

  span {
    color: #269e97;
  }
`
