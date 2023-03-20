import { collection, getFirestore, getDocs, where, query } from 'firebase/firestore'
import {app} from "./app";

export const read = async ({ user_uid, category_uid } : { user_uid: string, category_uid: string }) => {
  // 앱을 생성
  const db = getFirestore(app)
  // 컬렉션 참조를 생성
  const ref = collection(db, 'images')
  // 쿼리 객체를 생성
  const qry = query(ref,
    where('user_uid', '==', user_uid),
    where('category_uid', '==', category_uid)
  )
  // 위 쿼리에 맞는 레코드를 추출
  const { docs } = await getDocs(qry)

  // 데이터만 반환
  return docs.map(doc => doc.data())
}
