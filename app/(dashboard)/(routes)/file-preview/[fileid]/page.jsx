'use client'
import { app } from '@/firebaseConfig'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'


function FilePreview({params}) {
    const [fileInfo, setFileInfo] = useState()

    async function getFileDetails(){
        const db = getFirestore(app)
        const docRef = doc(db, 'Fileshare', params?.fileid)
        const docSnap = await getDoc(docRef)
        
        if(docSnap.exists()){
            setFileInfo(docSnap.data())
        }
        else
            alert('Error while retriving file')

    }

    useEffect(() => {
      params?.fileid &&  getFileDetails()
       
    }, [])
    

  return (
    <div>
        <h2>filepreview</h2>
      
    </div>
  )
}

export default FilePreview
