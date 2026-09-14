import { useContext, useEffect } from 'react'
import axios from 'axios'
import Header from '../components/Header'
import { userContext } from '../context/userContext'
import ProductListingPage from './ProductListingPage'

const Productspage = () => {

    const {Setuserdata,userdata} = useContext(userContext)



  useEffect(()=>{

    let Token = localStorage.getItem('Token')
    const fetchdata = async () =>{
        try {
            const res = await axios.get('http://localhost:5000/auth/getprofile',
              {headers:{
                Authorization:`Bearer ${Token}`
              }})
              Setuserdata(res.data.userdata)
        } catch (error) { 
          console.log(error)
        }
    }


    fetchdata()
},[])




  return (
    <div>
      <Header/>
            <ProductListingPage/>

    </div>
  )
}

export default Productspage