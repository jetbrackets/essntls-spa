import { useState } from 'react'
import * as S from './style'

import { CustomInput } from 'reactstrap'

import { ReactComponent as CancelIcon } from '../../assets/icons/cancel.svg'
import { ReactComponent as CheckIcon } from '../../assets/icons/checkmark-white.svg'

const NewProduct = () => {
  const [image, setImage] = useState({})

  const handlePreview = ({ target }) => {
    setImage({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0]
    })
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
              <S.Input type="text" placeholder="Name" />
            </div>

            <S.Container>
              <div>
                <S.Input type="text" placeholder="Purchase price ($)" />
                <S.Input type="text" placeholder="Sell price ($)" />
              </div>
              <div>
                <S.Input type="text" placeholder="Quantity" />
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
        <S.Button className="add-button">
          <CheckIcon />
          Add
        </S.Button>
      </S.ButtonContainer>
    </>
  )
}

export default NewProduct
