import { useEffect, useState  } from 'react'
import UseEffectHour from './composants/useEffectTimer'
import Header from './composants/layouts/header'
import { Routes, Route, NavLink, Outlet, useParams } from 'react-router-dom'
import TestRoute from './composants/layouts/test.Route'
import NotFoundPage from './composants/layouts/notFoundPage'
import Products from './composants/layouts/products'
import GridLoader from "react-spinners/GridLoader";



function App() {
  // react-spinners
  const [loading, setLoading] = useState(true)

  // for the timer
  const [showTimer, setShowTimer] = useState(false)
  const [timeTampon, setTimeTampon] = useState(0)
  function handleShowTimer() {
    setShowTimer(!showTimer)
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  function Item(){
    let { ids } = useParams()
    return <p> id : {ids}</p>
  }

  return (
    <div id='page'>
      <Header onClick={handleShowTimer} showTimer={showTimer} setShowTimer={setShowTimer} />
        
        <h1>App</h1>
        
        {/* react-spinners */}
        {loading ? <GridLoader color={'#36d7b7'} loading={loading} size={50} /> :
        
        <Routes>
          {/* <Route path='/' element={ <div>Home</div> } /> */}
          <Route path='/' element={showTimer && <UseEffectHour setTimeTampon={setTimeTampon} timeTampon={timeTampon} />} />
          <Route path='test' element={ loading ? <GridLoader color={'#36d7b7'} loading={loading} size={50} /> : <TestRoute /> } />
          <Route path='products' element={ <Products /> }>
            <Route path='list' element={ <div>
              <h1>list of products</h1>
              <ul>
                <li>
                  <NavLink to="1985"> item </NavLink>
                </li>
              </ul>
              <Outlet />
            </div> } >
              <Route path=':ids' element={ <Item /> } />
            </Route>
            <Route path='new' element={ <div>new</div> } />
          </Route>
          <Route path='*' element={ <NotFoundPage /> } />
        </Routes>
        
        }
    </div>
  )
}


export default App 


