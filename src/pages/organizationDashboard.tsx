import {Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} from 'react-router-dom';
   import MainLayout from '../layouts/mainLayout';
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
       
        
      </Route>
    )
  )
const DashBoard = () => {
  return <RouterProvider router={router}/>
}

export default DashBoard