import imgItem from '../assets/images/logo.jpg'

function ImgItem({ altText = "Imagen de producto" }) {
  return (
    <img src={imgItem} alt={altText} />
  )
}

export default ImgItem
