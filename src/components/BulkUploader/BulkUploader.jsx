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
    const reader = new FileReader() //eslint-disable-line

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

  function handleDragOver (e) {
    e.preventDefault()
  }

  function handleDrop (e) {
    e.preventDefault()
    const file = e.dataTransfer.files[0]

    if (file) {
      const reader = new FileReader() //eslint-disable-line

      reader.onloadend = () => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          userImgUrl: reader.result
        }))
      }

      reader.readAsDataURL(file)
    }
  }

  function handleAvatarClick () {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  console.log(formData)

  return (
    <div
      className='bulk-loader' onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={formData.userImgUrl ? { backgroundImage: `url(${formData.userImgUrl})` } : {}}
    >
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
