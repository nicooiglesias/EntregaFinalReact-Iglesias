export const createAdaptedProductFromFirestore = (doc) => {
    const data = doc.data()

    const productAdapted = {
        id: doc.id,
        nombre: data.nombre,
        imgpicture: data.imgpicture,
        precio: data.precio,
        stock: data.stock,
        categoria: data.categoria,
    }

    return productAdapted
}