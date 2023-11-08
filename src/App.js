import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login, Signup, Home } from "./pages";
import Error from "./pages/Error";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;