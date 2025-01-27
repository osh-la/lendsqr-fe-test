import {Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} from 'react-router-dom';
   import MainLayout from '../layouts/mainLayout';
   import Users from '../components/users';
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Users/>}/>
      </Route>
    )
  )
const DashBoard = () => {
  return <RouterProvider router={router}/>
}

export default DashBoard