import { getDocs, collection, query, where, getDoc, doc } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { createAdaptedProductFromFirestore } from '../../../adapters/createAdaptedProductFromFirestore'

export const getProducts = (id) => {
    // return new Promise((resolve, reject) => {
        const productsRef = id 
            ? query(collection(db, 'productos'), where('categoria', '==', id))
            : collection(db, 'productos')

        return getDocs(productsRef)
            .then(snapshot => {
                console.log(snapshot)
                const productsAdapted = snapshot.docs.map(doc => {
                    return createAdaptedProductFromFirestore(doc)
                })
                return productsAdapted
            })
            .catch(error => {
                return error
            })
    // })
}

export const getProductById = (id) => {
    const productRef = doc(db, 'productos', id)

    return getDoc(productRef)
        .then(snapshot => {
            const productAdapted = createAdaptedProductFromFirestore(snapshot)
           return productAdapted
        })
        .catch(error => {
            return error
        })

}