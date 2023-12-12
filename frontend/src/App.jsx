import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

import NotFound from './NotFound'
import VoucherTable from './Voucher'
import Transactions from './Transactions'
import HomeDashboard from './HomeDashboard'
import FileApp from './FileApp'

// layouts
import Nav from './layouts/Nav'


const Login = () => {
  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/login" element={<Login />}/>
    <Route path="/" element={<Nav />}>
      <Route  index element={<HomeDashboard />} />
      <Route path="vouchers" element={<VoucherTable />} />
      <Route path="transactions" element={<Transactions />} />
      {/* <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="help" element={<HelpLayout />}>
      <Route path="faq" element={<Faq />} />
      <Route path="contact" element={<Contact/>} action={contactAction} />
    </Route> */}
    </Route><Route path="*" element={<NotFound />} />
    <Route path='file-uploader' element={<FileApp />} />
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App