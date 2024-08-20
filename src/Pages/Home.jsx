import React from 'react'
import CategoryNav from '../Components/CategoryNav/CategoryNav'
import DataProvider from '../Context/DataContext'
import Products from '../Components/Products/Products'

const Home = () => {
  return (
    <div className='homeParentDiv pt-16'>
        <CategoryNav/>
        <DataProvider>
          <Products/>
        </DataProvider>
        </div>
  )
}

export default Home