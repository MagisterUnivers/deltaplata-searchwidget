import { useRef, useState } from 'react'
import { ReactComponent as UploadSVG } from '../../assets/svg/upload.svg'
import './BulkUploader.style.scss'

export function BulkUploader () {
  const fileInputRef = useRef(null)
  const [formData, setFormData] = useState({
    userImgUrl: null
  })

  function handleImageUpload (e) {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onloadend = () => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        userImgUrl: reader.result
      }))
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }

  function handleAvatarClick () {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <div className='bulk-loader'>
      <div className='bulk-loader__content-wrapper'>
        <UploadSVG width={125} height={125} className='bulk-loader__icon' onClick={handleAvatarClick} />
        <p className='bulk-loader__subtext'>Max 20MB (CSV/XLSX)</p>

        <input
          type='file'
          accept='image/*'
          // accept=".csv, .xlsx"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={handleImageUpload}
        />
      </div>
    </div>
  )
}
