
const ImageCard = ({imageSrc, altText}: any) => {
  return (
    <div className="border p-[10px] m-[10px]">
     <img 
     className="w-[5rem] h-[5rem]"
     src={imageSrc} alt={altText} />   
    </div>
  )
}

export default ImageCard