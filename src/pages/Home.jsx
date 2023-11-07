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

const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl:
		"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
	{ name: "style", href: "#", current: true },
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

	useEffect(() => {
		const verifyCookie = async () => {
			if (!cookies.token) {
				navigate("/login");
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
				: (removeCookie("token"), navigate("/login"));
		};
		verifyCookie();
	}, [cookies, navigate, removeCookie]);
	const Logout = () => {
		removeCookie("token");
		navigate("/login");
	};
	return (
		<>
			<div className="container-xl">
				<div className="min-h-full">
					<Disclosure as="nav" className="bg-gray-800">
						{({ open }) => (
							<>
								<div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
									<div className="flex h-16 items-center justify-between">
										<div className="flex items-center">
											<div className="flex-shrink-0">
												<img
													className="h-8 w-8"
													src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
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
																"rounded-md px-3 py-2 text-lg font-medium"
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
													className="relative  text-gray-400 hover:text-white pr-4"
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
								Style
							</h1>
						</div>
					</header>
					<main>
						<div className="mx-16 max-w-full py-6 sm:px-6 lg:px-8">
							<Tabs
								id="controlled-tab-example"
								activeKey={key}
								onSelect={(k) => setKey(k)}
								className="mb-3"
							>
								<Tab eventKey="home" title="Home">
									Tab content for Home
								</Tab>
								<Tab eventKey="profile" title="Profile">
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
