import './App.css'
import { RouterProvider,createHashRouter ,createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout'
import CaseStudy from './components/caseStudy';
import ScrollToTop from './ScrollToTop';



const router = createHashRouter([
   
  { path: '/', element:(<><ScrollToTop/><Layout /></>)},
  {path:'/caseStudy',element:(<><CaseStudy/><ScrollToTop/></>)}
])
    
function App() {

  return (
    <RouterProvider router={router}/>    
  )
}

export default App
