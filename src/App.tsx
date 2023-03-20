import { DocumentData } from "firebase/firestore";
import {useEffect, useState} from 'react'
import {read} from "./firebase/read";
import './App.css'

function App() {
  const [docs, setDocs] = useState<DocumentData[]>([])

  useEffect(() => {
    read({
      user_uid: 'Dsdkvjdijwdjwis',
      category_uid: 'Aikijwdjvjkjfkckls'
    }).then(docs => setDocs(docs))
  }, [])

  return (
    <div className="App">
      {
        docs.map(item => <>{JSON.stringify(item, null, 2)}</>)
      }
    </div>
  )
}

export default App
