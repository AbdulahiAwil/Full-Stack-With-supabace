import { Route, Routes } from "react-router"
import HomePage from "./Pages/HomePage"
import ArticlesPage from "./Pages/ArticlesPage"
import ArticlePage from "./Pages/ArticlePage"
import SingInPage from "./Pages/SingInPage"
import SingUpPage from "./Pages/SingUpPage"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { useState } from "react"

function App() {


  return (
    <div>
      {/* Header */}
      <Header />

        <main>
          <Routes>
            {/* Puplic Routes */}
            <Route path="/" element = {<HomePage />}/>
            <Route path="articles" element={<ArticlesPage />}/>
            <Route path="/article/:id" element={<ArticlePage />}/>

            {/* unauthanticated routes(redirect to home if logged in ) */}

            <Route path="singin" element={<SingInPage/>} />
            <Route path="singup" element={<SingUpPage />} />
          </Routes>
        </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
