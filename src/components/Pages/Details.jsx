import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading'
import Items from './Items'

const Details = () => {

    let {id} = useParams()
    const [items,seItems] = useState([])
    const [loading,setLoading] = useState(false)
 
    useEffect(() => {
        const fetchedData = async () => {
            setLoading(true)
            let response = await fetch(`https://fakestoreapi.com/products/${id}`)
            seItems(await response.json())
            setLoading(false)
        }
        fetchedData()
    },[])


  return (
    <div className='details'>
      {
        loading ? <Loading/> : <Items items={items}/>
      }
    </div>
  )
}

export default Details
