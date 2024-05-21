import './App.css'
import { RouterProvider,createHashRouter } from 'react-router-dom';
import Layout from './components/layout'
import CaseStudy from './components/caseStudy';

const router = createHashRouter([
  { path: '/', element: <Layout /> },
  { path: '/caseStudy', element: <CaseStudy /> }])
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
