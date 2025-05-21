import React, { useState } from 'react'
import { useProductStore } from '../store/store';
import { ToastContainer, toast } from 'react-toastify';

function CreatePage() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  })
  // toaster
  const notify = (message) => toast.error(message)
  const Successnotify = (message) => toast.success(message)

// Producst creation by frontend
  const { createProducts } = useProductStore()

  const handleAddProducts = async () => {
    const { success, message } = await createProducts(newProduct)
    if (!success) {
      notify(message)
    } else {
      Successnotify(message)
    }
    setNewProduct({name:"",price:"",image:""})
  }
// 

  return (
    <>
      <div className='flex flex-col w-[500px] gap-5 pt-24'>
        <input
          type="text"
          placeholder='Product Name'
          className=' h-8 rounded-xl px-2.5 py-5 border-[1px]'
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="text"
          placeholder='Price'
          className='h-8 rounded-xl px-2.5 py-5 border-[1px]'
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />

        <input
          type="text"
          placeholder='Image_URL'
          className='h-8 rounded-xl px-2.5 py-5 border-[1px]'
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />

        <button onClick={handleAddProducts} className="btn btn-soft btn-accent rounded-xl">Add New Products</button>

      </div>
    </>
  )
}

export default CreatePage
