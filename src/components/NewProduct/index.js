import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './style'

import { ADD_PRODUCT } from '../../service/api'

import { CustomInput } from 'reactstrap'

import { ReactComponent as CancelIcon } from '../../assets/icons/cancel.svg'
import { ReactComponent as CheckIcon } from '../../assets/icons/checkmark-white.svg'

const NewProduct = () => {
  const [image, setImage] = useState({})
  const [name, setName] = useState('')
  const [stock, setStock] = useState('')
  const [price, setPrice] = useState('')
  const [purchasePrice, setPurchasePrice] = useState('')

  const handlePreview = ({ target }) => {
    setImage({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0]
    })
  }

  const navigate = useNavigate()

  const handleNewProduct = async (body, token) => {
    token = window.localStorage.getItem('token')

    body = {
      name, stock, price, purchase_price: purchasePrice, status: 1, image: null
    }

    const {url, options} = ADD_PRODUCT(body, token)
    const response = await fetch(url, options)
    const json = await response.json()

    if(response.ok) navigate('/inventory')

    return json
  }

  const refreshImage = () => setImage({})

  return (
    <>
      <S.Wrapper>
        <S.PreviewContainer>
          {!image.preview && <label htmlFor="image">Select image</label>}
          <input type="file" id="image" onChange={handlePreview} />
          {image.preview && (
            <S.Preview
              style={{ backgroundImage: `url('${image.preview}')` }}
            ></S.Preview>
          )}
          {image.preview && <button onClick={refreshImage}>Refresh</button>}
        </S.PreviewContainer>
        <div>
          <form>
            <div>
              <S.Input type="text" placeholder="Name" value={name} onChange={({target}) => setName(target.value)} />
            </div>

            <S.Container>
              <div>
                <S.Input type="text" placeholder="Purchase price ($)" value={purchasePrice} onChange={({target}) => setPurchasePrice(target.value)}/>
                <S.Input type="text" placeholder="Sell price ($)" value={price} onChange={({target}) => setPrice(target.value)}/>
              </div>
              <div>
                <S.Input type="text" placeholder="Quantity" value={stock} onChange={({target}) => setStock(target.value)}/>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox"
                  label="Active Product"
                />
              </div>
            </S.Container>
          </form>
        </div>
      </S.Wrapper>
      <S.ButtonContainer>
        <S.Button onClick={() => window.history.back()}>
          <CancelIcon />
          Cancel
        </S.Button>
        <S.Button className="add-button" onClick={handleNewProduct}>
          <CheckIcon />
          Add
        </S.Button>
      </S.ButtonContainer>
    </>
  )
}

export default NewProduct
