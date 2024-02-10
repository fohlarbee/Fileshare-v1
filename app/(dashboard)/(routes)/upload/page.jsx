'use client'
import React, {useContext, useEffect, useState} from 'react'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import UploadForm from './_components/UploadForm'
import {app} from '../../../../firebaseConfig'

import { fileContext } from '@/app/layout';
import { useUser } from '@clerk/nextjs';
import {generateRandomString} from '../../../_utils/GenerateRandomString'
import { useRouter } from 'next/navigation';




function Upload() {
  const [progress, setProgress] = useState(0)



  const {file, setFile} = useContext(fileContext)
  const [fileId, setFileId] = useState()
  const [fileUrl, setFileUrl] = useState(null)


  const {user} = useUser();
  const router = useRouter()

  useEffect(() => {
      const docId = generateRandomString().toString()  
    setFileId(docId)

  },[])
    
 

  // save file im firestire
  async function saveFile(file, fileUrl){

      //firestorage instance
    const db = getFirestore(app);
    await setDoc(doc(db, 'Fileshare', fileId), {
      fileName: file.name,
      fileType: file.type,
      fileSize: file.size,
      fileUrl,
      id: fileId,
      userNmae: user.fullName,
      userEmail:user.primaryEmailAddress.emailAddress,
      passward:'',
      shortUrl:  process.env.NEXT_PUBLIC_BASE_URL + fileId

   })


  }

  
 function uploadFile (file){
    const storage = getStorage(app);
    const metadata = {
      contentType: file.type
    };
    const imageRef = ref(storage,'Fileshare/'+ file?.name);
    const uploadTask = uploadBytesResumable(imageRef, file, file.type);

    uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setProgress(progress)

   progress === 100 && getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      setFileUrl(downloadURL)

    }).then(() => {
      saveFile(file, fileUrl)
    }).then(() => {
      setFile(null)
      setProgress(0)
    }).then(() => {
      setTimeout(() => {
        router.push('/file-preview/' + fileId)
      }, 4000)
    })
   
  
  })
   


    
    
    
  }
  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center m-5'>
        Start <strong className='text-main'>Uplaoding</strong> files
         and <strong className='text-main'>share</strong> it</h2>
      <UploadForm uploadClick={(file) => uploadFile(file)} progress={progress}/>
        
      
    </div>
  )
}

export default Upload


// setFile(null)
//         setTimeout(() => {
//           setProgress(0)

//         }, 5000)