import React, { useEffect } from 'react'

export default function UseTitle(data) {
  useEffect(()=>{
    document.title=data
  })
}
