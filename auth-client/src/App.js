import { useState, useEffect } from 'react';
import { Route, Routes} from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Profile } from './pages/Profile';
import { Admin } from './pages/Admin';
import { EditUser} from './pages/EditUser';
import { Todos } from './pages/Todos';

import { userContext } from './userContext';
import axios from 'axios';

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    
    axios.get('/api/user/user', {withCredentials: true})
    .then(res => {
      console.log(res)
      setData(res.data)
    })
  }, [])

  let route = (
    <Routes>
        <Route path="/" element={ <Home/> } exact />
        <Route path="/login" element={ <Login/> }/>
        <Route path="/signup" element={ <SignUp/> } />
    </Routes>
  )

  if (data) {

    route = (
      <Routes>
        <Route path="/" element={ <Home/> } exact />
        <Route path="/login" element={ <Login/> }/>
        <Route path="/signup" element={ <SignUp/> } />
        <Route path="/profile" element={ <Profile/> } />
      </Routes>
      )

      if (data.role === "Admin") {
        route = (
        <Routes>
          <Route path="/" element={ <Home/> } exact />
          <Route path="/login" element={ <Login/> }/>
          <Route path="/signup" element={ <SignUp/> } />
          <Route path="/profile" element={ <Profile/> } />
          <Route path="/admin" element={ <Admin/> } />
          <Route path="/admin/edituser" element={ <EditUser/> } />
          <Route path="/todos" element={ <Todos/> } />
        </Routes>
        )
      }
  }

  return (
    <userContext.Provider value={{data, setData}}>
      <div className="h-full">
        <Layout>
          {route}
        </Layout>
      </div>
    </userContext.Provider>
  );
}

export default App;
