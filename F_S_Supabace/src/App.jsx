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
import ArticleEditorPage from "./Pages/ArticleEditorPage"
import ManageArticlePage from "./Pages/ManageArticlePage"
import ProfilePage from "./Pages/ProfilePage"
import ProtectedRoute from "./Components/ProtectedRoute"

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

            {/* Protected route */}

            <Route path="/editor" 
            element={ 
              <ProtectedRoute>
                 <ArticleEditorPage />
              </ProtectedRoute>
           
            } />
            <Route path="/editor/:id" 
            element={ 
              <ProtectedRoute>
                 <ArticleEditorPage />
              </ProtectedRoute>
           
            } />
            <Route path="/manage-articles" 
            element={
              <ProtectedRoute>
                <ManageArticlePage />
              </ProtectedRoute> 
            
            } />
            <Route path="/profile" 
            element={
              <ProtectedRoute>
                 <ProfilePage />
              </ProtectedRoute> 
           

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
