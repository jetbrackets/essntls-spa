import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import * as S from './style'

import { ADD_PRODUCT, GET_PRODUCT, EDIT_PRODUCT } from '../../service/api'

import { CustomInput } from 'reactstrap'

import { ReactComponent as CancelIcon } from '../../assets/icons/cancel.svg'
import { ReactComponent as CheckIcon } from '../../assets/icons/checkmark-white.svg'

const NewProduct = () => {
  const [image, setImage] = useState({})
  const [name, setName] = useState('')
  const [stock, setStock] = useState('')
  const [price, setPrice] = useState('')
  const [purchasePrice, setPurchasePrice] = useState('')

  const token = window.localStorage.getItem('token')
  const param = useParams()

  const { id } = param

  const handlePreview = ({ target }) => {
    setImage({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0]
    })
  }

  const navigate = useNavigate()

  const handleNewProduct = async (body) => {
    body = {
      name,
      stock,
      price,
      purchase_price: purchasePrice,
      status: 1,
      image: null
    }

    const { url, options } = ADD_PRODUCT(body, token)
    const response = await fetch(url, options)
    const json = await response.json()

    if (response.ok) navigate('/inventory')

    return json
  }

  const handleProduct = useCallback(
    async (id) => {
      const { url, options } = GET_PRODUCT(token, id)
      const response = await fetch(url, options)
      const json = await response.json()

      setName(json.name)
      setStock(json.stock)
      setPrice(json.price)
      setPurchasePrice(json.purchase_price)
    },
    [token]
  )

  const handleUpdateProduct = async (id) => {
    const body = {
      name,
      stock,
      price,
      purchase_price: purchasePrice,
      status: 1,
      image: null
    }

    const { url, options } = EDIT_PRODUCT(token, body, id)
    const response = await fetch(url, options)
    const json = await response.json()

    if (response.ok) navigate('/inventory')

    return json
  }

  const refreshImage = () => setImage({})

  useEffect(() => {
    if (id) {
      handleProduct(id)
    }
  }, [handleProduct, id])

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
              <S.Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </div>

            <S.Container>
              <div>
                <S.Input
                  type="text"
                  placeholder="Purchase price ($)"
                  value={purchasePrice}
                  onChange={({ target }) => setPurchasePrice(target.value)}
                />
                <S.Input
                  type="text"
                  placeholder="Sell price ($)"
                  value={price}
                  onChange={({ target }) => setPrice(target.value)}
                />
              </div>
              <div>
                <S.Input
                  type="text"
                  placeholder="Quantity"
                  value={stock}
                  onChange={({ target }) => setStock(target.value)}
                />
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
        {id ? (
          <S.Button
            className="add-button"
            onClick={() => handleUpdateProduct(id)}
          >
            <CheckIcon />
            Update
          </S.Button>
        ) : (
          <S.Button className="add-button" onClick={handleNewProduct}>
            <CheckIcon />
            Add
          </S.Button>
        )}
      </S.ButtonContainer>
    </>
  )
}

export default NewProduct
