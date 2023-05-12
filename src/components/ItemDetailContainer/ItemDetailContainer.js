import './ItemDetailContainer.css'
// import { useState, useEffect } from 'react'
// import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

//import { getDoc, doc } from 'firebase/firestore'
//import { db } from '../../services/firebase/firebaseConfig'

//import { createAdaptedProductFromFirestore } from '../../adapters/createAdaptedProductFromFirestore'
import { getProductById } from '../../services/firebase/firestore/products'
import { useAsync } from '../../hooks/useAsync'

const ItemDetailContainer = () => {
    const { itemId } = useParams()

    const getProductWithId = () => getProductById(itemId)

    const { data: product, error, loading} = useAsync(getProductWithId, [itemId])

    // const [product, setProduct] = useState()
    // const [loading, setLoading] = useState(true)



    // useEffect(() => {
    //     setLoading(true)

    //     const productRef = doc(db, 'products', itemId)

    //     getDoc(productRef)
    //         .then(snapshot => {
    //             console.log(snapshot)
    //             const productAdapted = createAdaptedProductFromFirestore(snapshot)
    //             setProduct(productAdapted)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    //         .finally(() => {
    //             setLoading(false)
    //         })
    // }, [itemId])

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

    return(
        <div >
            <ItemDetail  {...product} />
        </div>
    )
}

export default ItemDetailContainer