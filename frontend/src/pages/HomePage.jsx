import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosRocket } from "react-icons/io";
import Card from '../components/Card';
import { useProductStore } from '../store/store';




function HomePage() {

  const { fetchProducts, products } = useProductStore()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])
  console.log(products);
 
  return (
    <div className='flex flex-col gap-3 pt-32 xl:pt-24'>
      
      {/* Header */}
      <div className='flex flex-col justify-center items-center text-2xl gap-6'>
        <div className="flex items-center gap-2 text-3xl font-extrabold text-base-content">
          <h1>Current Products</h1>
          <IoIosRocket className="text-blue-500" />
        </div>
      </div>
    
      {
        products.length > 0? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:px-6 md:px-10">
            {products.map((items,index) => {
              
              return (
                <Card key={index} id={items._id} name={items.name} price={items.price} image={items.image} />
              )
            })}
          </div>
        ) : (
        
            <div className="flex items-center gap-2 text-xl font-medium text-base-content pt-3">
              <h2>No Products Found 😥</h2>
              <NavLink
                to="/createPage"
                className="text-blue-600 hover:underline hover:text-blue-800 transition duration-200"
              >
                Create Product
              </NavLink>
            </div>

        )
      }






    </div>
  )
}

export default HomePage
