import React from 'react';
import Vision from './Projctttt/Vision';
import { Navbar } from './Projctttt/Navbar';
import About from './Projctttt/About';
import Contact from './Projctttt/Contact';




function App() {
  return (
    <div className="App">
      {/* <hr/>
      <h2>--------------------
        output of useContext Hooks
        --------------------</h2>
      <UserContext.Provider value={"Dipyaa"}>
        <AddressContext.Provider value={"Junnar"}>
          <ComponentC/>
        </AddressContext.Provider>
      </UserContext.Provider>
      <hr/>
      <h1>--------------------</h1>
      <h2>React Routing</h2>
      <h1>--------------------</h1> */}
      

      {/* <LocationDisplay/><br/> */}
      {/* <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='*' element={<Nomatch/>}></Route>
        </Routes><br/> */}

        
        {/* <hr></hr>
        <h1>Specifing and Reading Dynamic Paramenter Using useParams </h1>
        <hr></hr>
        <Routes>
          <Route path="/page/:id" element={<BlogPost/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path='about' element={<About/>}></Route>
          </Routes>
          <hr></hr> */}

          <Vision></Vision>
          <Navbar></Navbar>
         

     
    </div>
  );
}

export default App;