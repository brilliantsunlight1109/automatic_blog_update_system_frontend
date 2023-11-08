import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
//mui
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
//bootstrap
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
//button
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
//accordion
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//switch
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Switch from "@mui/material/Switch";
//select
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
//textfield
import TextField from "@mui/material/TextField";
//table
import { DataGrid } from "@mui/x-data-grid";

const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl:
		"https://w7.pngwing.com/pngs/8/232/png-transparent-computer-icons-man-avatar-male-login-man-people-monochrome-black-thumbnail.png",
};
const navigation = [
	{ name: "スタイル", href: "#", current: true },
	{ name: "blog", href: "#", current: false },
	{ name: "Reviews", href: "#", current: false },
	{ name: "Sync history", href: "#", current: false },
	{ name: "setting", href: "#", current: false },
	{ name: "notice", href: "#", current: false },
];
const userNavigation = [
	{ name: "Your Profile", href: "#" },
	{ name: "Settings", href: "#" },
	{ name: "Sign out", href: "#" },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Home = () => {
	const navigate = useNavigate();
	const [cookies, removeCookie] = useCookies([]);
	const [username, setUsername] = useState("");
	const [verifyname, setVerifyname] = useState("");

	const [key, setKey] = useState("home");

	//switch
	const [state, setState] = useState({
		gilad: false,
		jason: false,
		antoine: false,
	});
	const handleChange = (event) => {
		setState({
			...state,
			[event.target.name]: event.target.checked,
		});
	};
	//select
	const [age, setAge] = useState("");

	const handleChange_select = (event) => {
		setAge(event.target.value);
	};
	//tab

	useEffect(() => {
		const verifyCookie = async () => {
			if (!cookies.token) {
				navigate("/");
			}
			const { data } = await axios.post(
				"http://localhost:4000",
				{},
				{ withCredentials: true }
			);
			const { status, user } = data;
			setUsername(user);
			console.log(user);
			return status
				? setVerifyname(user)
				: (removeCookie("token"), navigate("/"));
		};
		verifyCookie();
	}, [cookies, navigate, removeCookie]);
	const Logout = () => {
		removeCookie("token");
		navigate("/");
	};

	const columns = [
		{ field: "id", headerName: "番号", type: "number", width: 70 },
		{ field: "photograph", headerName: "写真", width: 200 },
		{ field: "style_name", headerName: "スタイル名", type: "text", width: 160 },
		{
			field: "stylelist",
			headerName: "スタイリスト",
			type: "text",
			width: 100,
		},
		{ field: "coupon", headerName: "クーポン", type: "text", width: 100 },
		{
			field: "original_ID",
			headerName: "オリジナルID/コピーID ",
			type: "text",
			width: 240,
		},
		{
			field: "Sync_start_date",
			headerName: "同期開始日/同期停止日",
			type: "text",
			width: 230,
		},
		{
			field: "Sync_start_time",
			headerName: "同期開始時間/同期間隔",
			type: "text",
			width: 220,
		},
		{
			field: "Last_Sync_time",
			headerName: "最終同期時刻/次回同期時刻",
			type: "text",
			width: 220,
		},
		{
			field: "situation_MODE",
			headerName: "状態/MODE",
			type: "text",
			width: 150,
		},
		// {
		// 	field: "fullName",
		// 	headerName: "Full name",
		// 	description: "This column has a value getter and is not sortable.",
		// 	sortable: false,
		// 	width: 160,
		// 	valueGetter: (params) =>
		// 		`${params.row.firstName || ""} ${params.row.lastName || ""}`,
		// },
	];

	const rows = [
		{
			id: 1,
			photograph: <div>sdfgfgsddfsdf</div>,
			style_name: "Jon",
			stylelist: "asd",
			coupon: "asd",
			original_ID: "asd",
			Sync_start_date: "sd",
			Sync_start_time: "asdf",
			Last_Sync_time: "da",
			situation_MODE: "sdfa",
		},
		{ id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
		{ id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
		{ id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
		{ id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 34 },
		{ id: 6, lastName: "Melisandre", firstName: "asd", age: 150 },
		{ id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
		{ id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
		{ id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 10, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 11, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 12, lastName: "Snow", firstName: "Jon", age: 35 },
		{ id: 13, lastName: "Lannister", firstName: "Cersei", age: 42 },
		{ id: 14, lastName: "Lannister", firstName: "Jaime", age: 45 },
		{ id: 15, lastName: "Stark", firstName: "Arya", age: 16 },
		{ id: 16, lastName: "Targaryen", firstName: "Daenerys", age: 34 },
		{ id: 17, lastName: "Melisandre", firstName: "asd", age: 150 },
		{ id: 18, lastName: "Clifford", firstName: "Ferrara", age: 44 },
		{ id: 19, lastName: "Frances", firstName: "Rossini", age: 36 },
		{ id: 20, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 21, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 22, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 23, lastName: "Snow", firstName: "Jon", age: 35 },
		{ id: 24, lastName: "Lannister", firstName: "Cersei", age: 42 },
		{ id: 25, lastName: "Lannister", firstName: "Jaime", age: 45 },
		{ id: 26, lastName: "Stark", firstName: "Arya", age: 16 },
		{ id: 27, lastName: "Targaryen", firstName: "Daenerys", age: 34 },
		{ id: 28, lastName: "Melisandre", firstName: "asd", age: 150 },
		{ id: 29, lastName: "Clifford", firstName: "Ferrara", age: 44 },
		{ id: 30, lastName: "Frances", firstName: "Rossini", age: 36 },
		{ id: 31, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 32, lastName: "Roxie", firstName: "Harvey", age: 65 },
		{ id: 33, lastName: "Roxie", firstName: "Harvey", age: 65 },
	];

	return (
		<>
			<div className="container-xl min-h-screen">
				<div className="min-h-full">
					<Disclosure as="nav" className="bg-gray-800">
						{({ open }) => (
							<>
								<div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
									<div className="flex h-16 items-center justify-between">
										<div className="flex items-center">
											<div className="flex-shrink-0">
												<img
													className="w-12 h-auto"
													src="/logo/6.png"
													alt="Your Company"
												/>
											</div>
											<div className="hidden md:block">
												<div className="ml-10 flex items-baseline space-x-4">
													{navigation.map((item) => (
														<a
															key={item.name}
															href={item.href}
															// onClick={Logout}
															className={classNames(
																item.current
																	? "bg-gray-900 text-white"
																	: "text-gray-300 hover:bg-gray-700 hover:text-white",
																"rounded-md px-3 py-2 text-lg font-medium hover:no-underline"
															)}
															aria-current={item.current ? "page" : undefined}
														>
															{item.name}
														</a>
													))}
												</div>
											</div>
										</div>
										<div className="hidden md:block">
											<div className="ml-4 flex items-center md:ml-6">
												<button
													type="button"
													className="relative text-gray-400 hover:text-white pr-1 active:outline-none active:outline-offset-0"
												>
													{verifyname}
												</button>

												<Menu as="div" className="relative ml-3">
													<div>
														<Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
															<span className="absolute -inset-1.5" />
															<span className="sr-only">Open user menu</span>
															<img
																className="h-8 w-8 rounded-full"
																src={user.imageUrl}
																alt=""
															/>
														</Menu.Button>
													</div>
													<Transition
														as={Fragment}
														enter="transition ease-out duration-100"
														enterFrom="transform opacity-0 scale-95"
														enterTo="transform opacity-100 scale-100"
														leave="transition ease-in duration-75"
														leaveFrom="transform opacity-100 scale-100"
														leaveTo="transform opacity-0 scale-95"
													>
														{/* <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
															{userNavigation.map((item) => (
																<Menu.Item key={item.name}>
																	{({ active }) => (
																		<a
																			href={item.href}
																			className={classNames(
																				active ? "bg-gray-100" : "",
																				"block px-4 py-2 text-lg text-gray-700"
																			)}
																		>
																			{item.name}
																		</a>
																	)}
																</Menu.Item>
															))}
														</Menu.Items> */}
														<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
															<Menu.Item>
																<button
																	onClick={Logout}
																	className="block text-left w-full px-4 py-2 text-lg text-gray-700 active:bg-gray-300"
																>
																	Your Profile
																</button>
															</Menu.Item>
															{/* <Menu.Item>
																<button
																	onClick={Logout}
																	className="block text-left w-full px-4 py-2 text-lg text-gray-700 active:bg-gray-300"
																>
																	Setting
																</button>
															</Menu.Item> */}
															<Menu.Item>
																<button
																	onClick={Logout}
																	className="block text-left w-full px-4 py-2 text-lg text-gray-700 active:bg-gray-300"
																>
																	Logout
																</button>
															</Menu.Item>
														</Menu.Items>
													</Transition>
												</Menu>
											</div>
										</div>
										<div className="-mr-2 flex md:hidden">
											{/* Mobile menu button */}
											<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
												<span className="absolute -inset-0.5" />
												<span className="sr-only">Open main menu</span>
												{open ? (
													<XMarkIcon
														className="block h-6 w-6"
														aria-hidden="true"
													/>
												) : (
													<Bars3Icon
														className="block h-6 w-6"
														aria-hidden="true"
													/>
												)}
											</Disclosure.Button>
										</div>
									</div>
								</div>

								<Disclosure.Panel className="md:hidden">
									<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
										{navigation.map((item) => (
											<Disclosure.Button
												key={item.name}
												as="a"
												href={item.href}
												className={classNames(
													item.current
														? "bg-gray-900 text-white"
														: "text-gray-300 hover:bg-gray-700 hover:text-white",
													"block rounded-md px-3 py-2 text-base font-medium"
												)}
												aria-current={item.current ? "page" : undefined}
											>
												{item.name}
											</Disclosure.Button>
										))}
									</div>
									<div className="border-t border-gray-700 pb-3 pt-4">
										<div className="flex items-center px-5">
											<div className="flex-shrink-0">
												<img
													className="h-10 w-10 rounded-full"
													src={user.imageUrl}
													alt=""
												/>
											</div>
											<div className="ml-3">
												<div className="text-base font-medium leading-none text-white">
													{user.name}
												</div>
												<div className="text-sm font-medium leading-none text-gray-400">
													{user.email}
												</div>
											</div>
											<button
												type="button"
												className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
											>
												<span className="absolute -inset-1.5" />
												<span className="sr-only">View notifications</span>
												<BellIcon className="h-6 w-6" aria-hidden="true" />
											</button>
										</div>
										<div className="mt-3 space-y-1 px-2">
											{userNavigation.map((item) => (
												<Disclosure.Button
													key={item.name}
													as="a"
													href={item.href}
													className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
												>
													{item.name}
												</Disclosure.Button>
											))}
										</div>
									</div>
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>

					<header className="bg-white shadow">
						<div className="mx-4 max-w-full px-4 py-6 sm:px-6 lg:px-8">
							<h1 className="text-3xl font-bold tracking-tight text-gray-900">
								スタイル
							</h1>
						</div>
					</header>
					<main>
						<div className="px-16 max-w-full py-6 sm:px-6 lg:px-8 bg-[#9ca3af0d] min-h-[50.6rem]">
							<Tabs
								id="controlled-tab-example"
								activeKey={key}
								onSelect={(k) => setKey(k)}
								className="mb-3"
							>
								<Tab eventKey="home" title="スタイル">
									<div className="container-xl flex justify-center">
										
									</div>
									
								</Tab>
								<Tab eventKey="profile" title="テンプレート">
									Tab content for Profile
								</Tab>
							</Tabs>
						</div>
					</main>
				</div>
			</div>
		</>
	);
};

export default Home;
