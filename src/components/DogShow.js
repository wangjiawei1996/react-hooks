import React, { useState, useEffect } from 'react';
import axios from 'axios'
const DogShow = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false)
  const style = {
    width: 200
  }
  useEffect(() => {
    setLoading(true)
    axios.get('https://dog.ceo/api/breeds/image/random').then(result => {
      setUrl(result.data.message)
      setLoading(false)
    })
  })
  return (
    <>
      {loading ? <p>🐶读取中</p> : <img src={url} alt="dog" style={style} />}
    </>
  )
}
export default DogShow