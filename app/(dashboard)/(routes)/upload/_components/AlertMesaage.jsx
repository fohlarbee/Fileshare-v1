import { AlertCircle } from 'lucide-react'
import React from 'react'

function AlertMesaage({msg}) {
  return (
    <div className='p-4 bg-red-500 mt-5 text-white
    rounded-md gap-5 items-center flex '>
        <AlertCircle/>
        <h2>{msg}</h2>
      
    </div>
  )
}

export default AlertMesaage
