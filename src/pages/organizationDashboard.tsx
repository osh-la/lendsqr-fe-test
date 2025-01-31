import {Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} from 'react-router-dom';
   import MainLayout from '../layouts/mainLayout';
   import Users from '../components/users';
   import UserDetails from '../components/userDetails';
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Users/>}/>
        <Route path="users/:id" element={<UserDetails />} />
      </Route>
    )
  )
const DashBoard = () => {
  return <RouterProvider router={router}/>
}

export default DashBoard