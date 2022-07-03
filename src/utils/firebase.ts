import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc
} from 'firebase/firestore'
import { firestore } from '../configs/firebase'

export const saveItem = async (data: any) => {
  await setDoc(doc(firestore, 'productItems', `${Date.now()}`), data, {
    merge: true
  })
}

export const getAllProductItems = async () => {
  const items = await getDocs(
    query(collection(firestore, 'productItems'), orderBy('id', 'desc'))
  )

  return items.docs.map((doc) => doc.data())
}
