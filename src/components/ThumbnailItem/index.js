// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {imageThumbNailUrl, isColorChange, isChangeImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageThumbNailUrl

  const clickChangeImage = () => {
    isChangeImage(id)
  }

  const imageDull = isColorChange ? 'normal' : 'imageBackColor'

  return (
    <li className="list-images">
      <button type="button" className="buttonImage">
        <img
          alt={thumbnailAltText}
          src={thumbnailUrl}
          className={`normal ${imageDull}`}
          onClick={clickChangeImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
