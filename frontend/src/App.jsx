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
import Report from './Report'

// layouts
import Nav from './layouts/Nav'
import Login from './Login'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/login" element={<Login />}/>
    <Route path="/" element={<Nav />}>
      <Route  index element={<HomeDashboard />} />
      <Route path="vouchers" element={<VoucherTable />} />
      <Route path="transactions" element={<Transactions />} />
      <Route path="reports" element={<Report url={"http://localhost:3000/testdata"} />} />
      <Route path="files" element={<Report url={"http://localhost:3000/files"}/>}/>
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