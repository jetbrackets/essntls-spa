import styled from 'styled-components'

export const Container = styled.div`
  width: 300px;
  background: #fff;
  padding: 1rem;
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled.button`
  background: url('/assets/icons/call.svg') center center no-repeat;

  height: 30px;
  width: 48px;
  border: 1px solid #269e97;
  cursor: pointer;
`

export const ProgressInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #269e97;

  p {
    margin: 1rem 0 1rem 0;
  }
`

export const ProgressBar = styled.div`
  width: 100%;
  margin-left: 8px;
  height: 8px;
  background: #269e97;
`

export const DeliveryInfo = styled.div`
  margin-top: 1rem;

  > div {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-gap: 1rem;

    p {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin: 5px 0;
    }
  }
`

export const ViewOrder = styled.a`
  display: block;
  font-weight: bold;
  color: #269e97;
  text-align: center;
  margin-top: 10px;
`
