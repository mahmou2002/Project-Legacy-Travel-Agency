import React from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import galleryImages from './galleryImages'

function MasonryImagesGallery() {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}>
        <Masonry gutter='1rem'>
            {
                galleryImages.map((e,i)=>(
                    <img className='masonry_img' src={e} key = {i} alt="gallery Image" style={{'width':'100%', 'display':'block', 'borderRadius':'10px'}}/>
                ))
            }
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImagesGallery
