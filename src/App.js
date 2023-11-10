import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login, Signup, Home } from "./pages";
import Add_style from "./pages/style/Add_style";
import Error from "./pages/Error";
import Add_style_template from "./pages/style/Add_style_template";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/add_style" element={<Add_style />} />
					<Route path="/add_style_template" element={<Add_style_template />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

// function App() {
// 	return (
// 	  <div className="App">
// 		 <BrowserRouter>
// 			<Routes>
// 			  <Route path="/" element={<Login />} />

// 			  <Route path="/home" element={
// 				 <>
// 					<Stylenav />
// 					<Home />
// 				 </>
// 			  } />

// 			  <Route path="/signup" element={<Signup />} />

// 			  <Route path="*" element={<Error />} />
// 			</Routes>
// 		 </BrowserRouter>
// 	  </div>
// 	);
//  }

export default App;
