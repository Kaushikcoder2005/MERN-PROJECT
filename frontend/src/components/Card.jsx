import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useProductStore } from '../store/store';
import { ToastContainer, toast } from 'react-toastify';
import Modal from './Modal';

function Card({ name = '', price = '', image = '', id = '' }) {
    const [isOpen, setIsOpen] = useState(false)
    const [updatedProduct, setUpdatedProduct] = useState({ name, price, image, id })
    const { deleteProduct, updateProduct } = useProductStore()
    const notify = (message) => toast.error(message)
    const Successnotify = (message) => toast.success(message)

    const handleDelete = async (pid) => {
        const { success, message } = await deleteProduct(pid)
        if (success) {
            Successnotify(message)
        } else {
            notify(message)
        }
    }
    const handleEdit = () => {
        setIsOpen(!isOpen)
    }

    const handleUpdate = async (pid, updatePro) => {
        // Quick validation
        if (!pid || !updatePro?.name) {
            notify("Invalid product data");
            return;
        }

        const { success, message } = await updateProduct(pid, {
            name: updatePro.name,
            price: updatePro.price,
            image: updatePro.image
        });

        if (success) {
            Successnotify(message);
            setIsOpen(false);
        } else {
            notify(message || "Update failed - check console");
        }
    };


    return (
        <>
            <div className="card text-base-content border-2 border-gray-900 p-1.5 md:w-80 lg:w-72 xl:w-96 shadow-sm hover:cursor-pointer transform hover:translate-y-1 hover:shadow-2xl">

                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleEdit} className="p-2 h-10 rounded-md bg-blue-400 text-white flex items-center justify-center">
                            <FaEdit size={24} className='ml-1 mb-0.5 text-base-content' />
                        </button>
                        <button onClick={() => handleDelete(id)} className="p-2 h-10 rounded-md bg-red-400 text-white flex items-center justify-center">
                            <MdDelete size={24} className='ml-1 mb-0.5 text-base-content' />
                        </button>

                    </div>
                </div>
                {/* modal  */}

            </div>

            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <div className='flex flex-col w-[450px] gap-2 mb-3 '>
                    <input
                        type="text"
                        placeholder='Product Name'
                        className=' h-8 rounded-xl px-2.5 py-5 border-[1px]'
                        value={updatedProduct.name}
                        onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder='Price'
                        className='h-8 rounded-xl px-2.5 py-5 border-[1px]'
                        value={updatedProduct.price}
                        onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}

                    />

                    <input
                        type="text"
                        placeholder='Image_URL'
                        className='h-8 rounded-xl px-2.5 py-5 border-[1px]'
                        value={updatedProduct.image}
                        onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}

                    />
                </div>

                <div className='flex flex-row gap-4 '>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Close
                    </button>
                    <button
                        onClick={() => handleUpdate(id, updatedProduct)}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Update
                    </button>
                </div>
            </Modal>
        </>

    )
}

export default Card
