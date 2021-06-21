import styled, { css } from 'styled-components'

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

  @media (max-width: 960px) {
    ${(props) =>
      !props.inDashboard &&
      css`
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        text-align: center;
      `}
  }
`

export const Info = styled.div`
  margin-left: 8px;

  > p {
    margin: 0px;
  }

  span {
    font-size: 12px;
    color: #969696;
    margin-left: 4px;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-wrap: nowrap;
    /* flex: 1; */
  }

  @media (max-width: 760px) {
    ${(props) =>
      !props.inDashboard &&
      css`
        flex-direction: column;
      `}

    div {
      margin-top: 4px;
    }
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
