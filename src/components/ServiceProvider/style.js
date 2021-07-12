import styled from 'styled-components'

export const TableRow = styled.tr`
  font-size: 12px;
  font-weight: normal;
  color: #269e97;
`

export const Container = styled.div`
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #eee;

  > div {
    display: flex;
    margin-bottom: 1rem;
  }

  .tabPane {
    width: 100%;
  }

  .row {
    width: 100%;
    margin: 0 !important;
  }
`

export const ContainerButtons = styled.div`
  button + button {
    margin-left: 1rem !important;
  }
`

export const BlockButton = styled.button`
  border: 1px solid #269e97;
  padding: 0.5rem 1rem;
  color: #269e97;
  background: #fff;
  text-transform: uppercase;
  font-weight: bold;
  margin-left: auto;

  > svg {
    margin-right: 8px;
  }
`

export const ApproveButton = styled.button`
  border: 1px solid #269e97;
  padding: 0.5rem 1rem;
  color: #269e97;
  background: #fff;
  text-transform: uppercase;
  font-weight: bold;
  margin-left: auto;

  > svg {
    margin-right: 8px;
  }
`

export const Button = styled.button`
  min-width: 150px;
  border: none;
  outline: none;
  border-bottom: 3px solid transparent;
  background: #fff;
  transition: 0.3s ease-in;
  color: #969696;

  &.active {
    border-bottom: 3px solid #269e97;
    color: #269e97;
    font-weight: 600;
  }
`

export const ServiceProviderProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  margin-bottom: 2rem;

  p {
    margin: 8px 0;
  }
`

export const Width = styled.div`
  width: 100%;
`

export const RatingContainer = styled.div`
  margin-top: 1rem;

  h4 {
    font-weight: normal;
  }
`

export const ByStar = styled.div`
  margin-top: 2rem;

  > p {
    font-size: 14px;
    margin-bottom: 0.5rem;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`

export const DescriptionContainer = styled.div`
  margin-top: 1rem;
`

export const HeaderReview = styled.div`
  font-size: 14px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ReviewDescription = styled.div`
  font-size: 14px;
  margin-top: 0.5rem;
`

export const ContainerStars = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 14px;
    height: 14px;
  }
`

export const customStyles = {
  cells: {
    style: {
      padding: '.5rem'
    }
  },
  headCells: {
    style: {
      color: 'var(--primary-color)'
    }
  }
}
