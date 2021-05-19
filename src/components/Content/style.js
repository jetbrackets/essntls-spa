import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4.875rem;
  margin-left: 18.375rem;
  padding: 1.25rem 2.5rem;
  width: calc(100% - 18.375rem);
`

export const Description = styled.div``

export const ContainerMap = styled.div`
  background: #fff;
  padding: 1rem;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 75% auto;
  grid-gap: 0.5rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

export const Map = styled.div``

export const ActiveCustomers = styled.div`
  > h2 {
    padding: 0 1rem;
    margin-bottom: 1.25rem;
    color: #1e2a36;
  }

  > div {
    @media (max-width: 1100px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export const ContainerCustomers = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  align-items: start;
  justify-content: start;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: #eeeeee;
  }
`

export const Image = styled.img`
  margin-right: 1rem;
  margin-top: 3px;
  height: 45px;
  width: 45px;
`

export const Username = styled.h3`
  font-size: 14px;
  line-height: 167.2%;
  font-weight: normal;
`

export const DetailsCustomers = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    flex-direction: row;

    @media (max-width: 1100px) {
      flex-direction: column;
    }
  }
`

export const DeliveriesCounting = styled.p`
  font-size: 10px;
  line-height: 13px;
  color: #969696;
  margin-left: 0.75rem;

  @media (max-width: 1100px) {
    margin-left: 0px;
  }
`

export const DeliveryStatus = styled.p`
  font-weight: normal;
  font-size: 10px;
  line-height: 167.2%;
  color: #1e2a36;

  > span {
    color: #46bea5;
  }
`
