import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login, Signup, Home } from "./pages";
import AddStyle from "./pages/style/AddStyle";
import Error from "./pages/Error";
import AddStyleTemplate from "./pages/style/AddStyleTemplate";
import Blog from "./pages/blog/blog";
import AddBlog from "./pages/blog/addBlog";
import Notice from "./pages/notice/notice";
import StyleSetting from "./pages/stylesetting/styleSetting";
import Review from "./pages/review/review";
import SyncHistory from "./pages/synchistory/synchistory";
import UpdateStyle from "./pages/style/UpdateStyle";
import UpdateBlog from "./pages/blog/updateBlog";

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
					<Route path="/setting" element={<StyleSetting />} />
					<Route path="/notice" element={<Notice />} />
					<Route path="/review" element={<Review />} />
					<Route path="/sync-history" element={<SyncHistory />} />
					<Route path="/update-style" element={<UpdateStyle />} />
					<Route path="/update-blog" element={<UpdateBlog />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
