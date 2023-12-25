import { useState } from "react"
import Banner from "./components/Banner"
import Filter from "./components/Filter"
import Footer from "./components/Footer"
import Header from "./components/Header"
import LoginModal from "./components/LoginModal"
import Main from "./components/Main"


function App() {
 const [Modal,setModal]=useState(false)
  return (
    <div className={Modal?'overflow-hidden h-screen':''}>
     <Header login={()=>setModal(!Modal)}/>
      {Modal && <LoginModal close={()=>setModal(!Modal)} />}
     <Filter />
     <Main />
     <Banner />
     <Footer />
    </div>
  )
}

export default App
