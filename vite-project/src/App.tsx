import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import Register from "./pages/Register"
import SignIn from "./pages/Signin"
import { useAppContext } from "./contexts/AppContext"
import AddHotel from "./pages/AddHotel"


const App =()=>{
  const {isLoggedin}  = useAppContext();
  return(
    <Router  >
      <Routes>
        <Route path="/" element={<Layout > <p>Home Page</p></Layout>}/>
        <Route path="/search" element={<Layout> <p>Search Page</p></Layout>}/>
        <Route path="/register" element={<Layout><Register/></Layout>}/>
        <Route path="/sign-in" element={<Layout><SignIn/></Layout>}/>

      {isLoggedin&&(
        <>
        <Route 
        path="/my-hotels" element={
          <Layout>
          <AddHotel/>
        </Layout>
        }>
        </Route>
        </>
      )}
      </Routes>
      
    </Router>
  )
}

export default App