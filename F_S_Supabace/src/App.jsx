import { Route, Routes } from "react-router"
import HomePage from "./Pages/HomePage"
import ArticlesPage from "./Pages/ArticlesPage"
import ArticlePage from "./Pages/ArticlePage"
import SingInPage from "./Pages/SingInPage"
import SingUpPage from "./Pages/SingUpPage"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import { useState } from "react"
import { AuthProvider } from "./context/AuthContext"
import AnAuthenticatedRoute from "./Components/AnAuthenticatedRoute"

function App() {


  return (
    <AuthProvider>
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

            <Route path="/singin" 
            element={
            <AnAuthenticatedRoute>
               <SingInPage />
            </AnAuthenticatedRoute>
           } />
            <Route path="/singup" 
            element={
              <AnAuthenticatedRoute>
              <SingUpPage />
              </AnAuthenticatedRoute>
            } />
          </Routes>
        </main>

      {/* Footer */}
      <Footer />
    </div>
    </AuthProvider>
  )
}

export default App
