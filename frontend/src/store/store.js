import { create } from "zustand"

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),


    
    createProducts: async (newProduct) => {
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            return {
                success: false,
                message: "Please fill all the fields."
            }
        }
        const res = await fetch("https://mern-project-o5xp.onrender.com/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        const data = await res.json()
        set((state) => ({ products: [...state.products, data.data] }))
        return {
            success: true,
            message: "Product created succesfully."
        }
    },


    
    fetchProducts: async () => {
        const res = await fetch("https://mern-project-o5xp.onrender.com/products")
        const data = await res.json()
        set({ products: data.data })
    },



    deleteProduct: async (pid) => {
        const res = await fetch(`https://mern-project-o5xp.onrender.com/products/delete/${pid}`, {
            method: "DELETE",
        });
        const data = await res.json();

        if (!data.success) return { success: false, message: data.message };

        // update the ui immediately, without needing a refresh
        set((state) => ({ products: state.products.filter((product) => product._id !== pid) }));
        return { success: true, message: data.message };
    },



    updateProduct: async (pid, updatedProduct) => {
        try {
            const res = await fetch(`https://mern-project-o5xp.onrender.com/products/${pid}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedProduct),
            });

            const data = await res.json();

            // If response is bad OR if we don't get back the updated product
            if (!res.ok || !data.success) {
                console.error("Update failed:", data);
                return {
                    success: false,
                    message: data.message || "Update failed - no data returned"
                };
            }

            // SAFEST APPROACH - use the data we sent if response is missing _id
            const finalProduct = data.data?._id
                ? data.data
                : { ...updatedProduct, _id: pid };

            set((state) => ({
                products: state.products.map((product) =>
                    product._id === pid ? finalProduct : product
                ),
            }));

            return {
                success: true,
                message: data.message || "Product updated successfully"
            };
        } catch (error) {
            console.error("Update crashed:", error);
            return {
                success: false,
                message: "Server error. Please try again later."
            };
        }
    },
}))

