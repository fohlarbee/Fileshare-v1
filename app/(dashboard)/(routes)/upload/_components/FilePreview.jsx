import Image from 'next/image'
import React from 'react'
import { X } from  'lucide-react'

function FilePreview({file, removeFile}) {
  return (
    <div className='flex items-center mt-5 gap-2
    justify-between border rounded-md p-2 border-main'>
        <div className='flex items-center p-2'>
            <Image src='/file.svg' width={50} height={50} 
            alt='preview' className='text-main'/>
            <div className='text-left'>
                <h2>{file.name.slice(0,15)}</h2>
                <h2 className='text-[12px] text-gray-400'>{file?.type} / {(file.size/1024/1024).toFixed(2) < 1 ? 'less than 1Mb' :(file.size/1024/1024).toFixed(2) + 'Mb'}</h2>
            </div>

        </div>
       
        < X className='text-main cursor-pointer' onClick={() => removeFile()}/>
      
    </div>
  )
}

export default FilePreview
