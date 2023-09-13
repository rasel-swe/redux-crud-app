import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'
import Navbar from '../layouts/Navbar'
import AddBook from '../features/books/AddBook'
import EditBook from '../features/books/EditBook'
import ViewBooks from '../features/books/ViewBooks'

const Index = () => {
  return (
    <BrowserRouter>
    <Navbar />
   <main>
   <Routes>
        <Route path='/' element ={<HomePage />} />
        <Route path='/add-book' element ={<AddBook />} />
        <Route path='/edit-book' element ={<EditBook />} />
        <Route path='/show-books' element ={<ViewBooks />} />
        <Route path='*' element =  {<ErrorPage />} />
    </Routes>
   </main>
    </BrowserRouter>
  )
}

export default Index
