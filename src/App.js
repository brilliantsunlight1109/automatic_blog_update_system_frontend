import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login, Signup, Home } from "./pages";
import AddStyle from "./pages/style/AddStyle";
import Error from "./pages/Error";
import AddStyleTemplate from "./pages/style/AddStyleTemplate";
import Blog from "./pages/blog/blog";
import AddBlog from "./pages/blog/addBlog";
import Notice from "./pages/notice/notice";
import YourProfile from "./pages/profile/yourProfile";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/add-style" element={<AddStyle />} />
					<Route path="/add-style-template" element={<AddStyleTemplate />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/add-blog" element={<AddBlog />} />
					<Route path="/your-profile" element={<YourProfile />} />
					<Route path="/notice" element={<Notice />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
