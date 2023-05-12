//import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'

// import { getDocs, collection, query, where } from 'firebase/firestore'
// import { db } from '../../services/firebase/firebaseConfig'

import { getProducts } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading} = useAsync(getProductsWithCategory, [categoryId])

    // const [products, setProducts] = useState([])
    // const [loading, setLoading] = useState(true)


    // useEffect(() => {
    //     setLoading(true)

    //     getProducts(categoryId)
    //         .then(products => {
    //             setProducts(products)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    //         .finally(() => {
    //             setLoading(false)
    //         })
    // }, [categoryId])

    if(loading) {
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    }

    if(error) {
        return (
            <div>
                <h1>Hubo un error</h1>
            </div>
        )
    }

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer