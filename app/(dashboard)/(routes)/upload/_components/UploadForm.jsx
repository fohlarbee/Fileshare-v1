import React, {useState} from 'react'
import AlertMessage from './AlertMesaage'
import FilePreview from  './FilePreview'
import ProgressBar from './ProgressBar'
import { useContext } from 'react'
import { fileContext } from '@/app/layout'

function UploadForm({ uploadClick, progress}) {
    const [uploaded, setUploaded] = useState(null);
    const [errorMsg, setErrorMeg] = useState(null)
    const {file, setFile} = useContext(fileContext)
    function onFileSelect(file){
        setErrorMeg(null)

        if(file && file.size > 2000000){
            setErrorMeg('Maximum file size is 2Mb');
            setFile(null)
        }    
        else
            setFile(file)
            
    
    }
         
  return (
    <div className='text-center'>
        
<div className="flex items-center justify-center w-full">
    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-main border-dashed rounded-lg cursor-pointer bg-blue-70 dark:hover:bg-bray-50 dark:bg-gray-70 hover:bg-gray-50 dark:border-main dark:hover:border-main dark:hover:bg-blue-50">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-12 h-12 mb-4 text-main dark:text-main" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-lg md:text-2xl text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or 
            <strong className='text-main'> drag </strong>
            and  
           <strong className='text-main'> drop</strong></p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 2MB)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden"
        onChange={(e) => onFileSelect(e.target.files[0])} />
    </label>
</div> 
    { errorMsg && <AlertMessage msg={errorMsg}/>}
      {file && <FilePreview file={file} removeFile={() => setFile(null)}/>}
   {progress > 0 ? <ProgressBar progress={progress}/>
: <button disabled={!file} className='p-2 bg-main text-white w-[40%]
    rounded-md mt-5 disabled:bg-gray-300' onClick={() => uploadClick(file)}>Upload</button>} 
    </div>
  )
}

export default UploadForm
