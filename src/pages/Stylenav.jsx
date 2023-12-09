import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
//mui
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
//redux
import { useDispatch } from "react-redux";
import {
	setUsername,
	setUserSalonId,
	setId,
} from "../store/actions/setUserDetails";

const user = {
	name: "Tom Cook",
	email: "tom@example.com",
	imageUrl:
		"https://w7.pngwing.com/pngs/8/232/png-transparent-computer-icons-man-avatar-male-login-man-people-monochrome-black-thumbnail.png",
};
const navigation = [
	{ name: "スタイル", href: "/home", current: false },
	{ name: "ブログ", href: "/blog", current: false },
	{ name: "口コミ", href: "/review", current: false },
	{ name: "同期履歴", href: "sync-history", current: false },
	{ name: "設定", href: "/setting", current: false },
	{ name: "お知らせ", href: "/notice", current: false },
];
const userNavigation = [
	{ name: "Your Profile", href: "/profile" },
	{ name: "Logout", href: "/logout" },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Stylenav = () => {
	const navigate = useNavigate();
	const [cookies, removeCookie] = useCookies([]);
	// const [username, setUsername] = useState("");
	const [verifyname, setVerifyname] = useState("");

	//redux
	const dispatch = useDispatch();

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
			const { status, username, user_salon_id, id } = data;
			console.log("style-nav-username", username);
			console.log("style-user_salon_id", user_salon_id);
			console.log("style-id", id);
			if (status) {
				dispatch(setUsername(username));
				dispatch(setUserSalonId(user_salon_id));
				dispatch(setId(id));
			}
			return status
				? setVerifyname(username)
				: (removeCookie("token"), navigate("/"));
		};
		verifyCookie();
	}, [cookies, navigate, removeCookie, dispatch]);
	const Logout = () => {
		removeCookie("token");
		navigate("/");
	};
	const YourProfile = () => {
		navigate("/your-profile");
	};

	return (
		<>
			<div className="container-xl min-h-fit">
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
												<div className="ml-10 flex items-baseline space-x-4 max-lg:hidden">
													{navigation.map((item) => (
														<a
															key={item.name}
															href={item.href}
															// onClick={Logout}
															className={classNames(
																item.current
																	? "bg-gray-900 text-white"
																	: "text-gray-300 hover:bg-gray-700 hover:text-white whitespace-nowrap",
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
																	onClick={YourProfile}
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
													"block rounded-md px-3 py-2 text-base font-medium hover:no-underline"
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
											{/* {userNavigation.map((item) => (
												<Disclosure.Button
													key={item.name}
													as="a"
													href={item.href}
													className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white hover:no-underline"
												>
													{item.name}
												</Disclosure.Button>
											))} */}
											<Disclosure.Button
												onClick={Logout}
												className="block text-left w-full rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white hover:no-underline"
											>
												Your Profile
											</Disclosure.Button>
											<Disclosure.Button
												onClick={Logout}
												className="block text-left w-full rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white hover:no-underline"
											>
												Logout
											</Disclosure.Button>
										</div>
									</div>
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				</div>
			</div>
		</>
	);
};

export default Stylenav;
