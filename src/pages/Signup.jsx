import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
	const navigate = useNavigate();
	const [inputValue, setInputValue] = useState({
		email: "",
		username: "",
		style_tokyo_id: "",
		password: "",
		confirm_password: "",
		salon_id: "",
		salon_password: "",
		salon_confirm_password: "",
	});
	const {
		email,
		password,
		username,
		confirm_password,
		style_tokyo_id,
		salon_id,
		salon_password,
		salon_confirm_password,
	} = inputValue;
	const [alarm, setAlarm] = useState("");
	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setInputValue({
			...inputValue,
			[name]: value,
		});
	};

	const handleError = (err) => {
		console.log(err);
		setAlarm(err);
	};
	const handleSuccess = (msg) => {
		console.log(msg);
		setAlarm(msg);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { data } = await axios.post(
				"http://localhost:4000/signup",
				{
					...inputValue,
				},
				{ withCredentials: true }
			);
			const { success, message } = data;
			if (success) {
				handleSuccess(message);
				setTimeout(() => {
					navigate("/");
				}, 0);
			} else {
				handleError(message);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						className="mx-auto w-8/12 h-8/12"
						// src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						src="/logo/4.png"
						alt="Your Company"
					/>
					<h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						ユーザー登録
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={handleSubmit}>
						<div>
							<label
								htmlFor="email"
								className="block text-md font-bold leading-6 text-gray-900"
							>
								メールアドレス
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="text"
									placeholder="例: a@gmail.com"
									value={email}
									onChange={handleOnChange}
									className="break-keep block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-md font-bold leading-6 text-gray-900"
							>
								ユーザー名
							</label>
							<div className="mt-2">
								<input
									name="username"
									type="text"
									value={username}
									placeholder="例: tanaka"
									onChange={handleOnChange}
									className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-md font-bold leading-6 text-gray-900"
							>
								Style Tokyo User ID
							</label>
							<div className="mt-2">
								<input
									name="style_tokyo_id"
									type="text"
									value={style_tokyo_id}
									placeholder="例: abc123"
									onChange={handleOnChange}
									className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="email"
									className="block text-md font-bold leading-6 text-gray-900"
								>
									パスワード
								</label>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									placeholder="例: 1234567890"
									value={password}
									onChange={handleOnChange}
									className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="email"
									className="block text-md font-bold leading-6 text-gray-900"
								>
									パスワード確認
								</label>
							</div>
							<div className="mt-2">
								<input
									id="confirm_password"
									name="confirm_password"
									type="password"
									placeholder="例: 1234567890"
									value={confirm_password}
									onChange={handleOnChange}
									className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-md font-bold leading-6 text-gray-900"
							>
								Salon Board ID
							</label>
							<div className="mt-2">
								<input
									name="salon_id"
									type="text"
									value={salon_id}
									placeholder="例: abc123"
									onChange={handleOnChange}
									className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="email"
									className="block text-md font-bold leading-6 text-gray-900"
								>
									Salon Board パスワード
								</label>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="salon_password"
									type="password"
									placeholder="例: 1234567890"
									value={salon_password}
									onChange={handleOnChange}
									className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="email"
									className="block text-md font-bold leading-6 text-gray-900"
								>
									Salon Board パスワード確認
								</label>
							</div>
							<div className="mt-2">
								<input
									id="confirm_password"
									name="salon_confirm_password"
									type="password"
									placeholder="例: 1234567890"
									value={salon_confirm_password}
									onChange={handleOnChange}
									className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								ユーザー登録
							</button>
						</div>
					</form>

					<div>
						<p className="mt-10 text-center text-sm text-violet-600">
							<a
								href="/"
								className="font-semibold leading-6 text-violet-600 hover:text-violet-500"
							>
								ログインに移行
							</a>
						</p>
					</div>

					<p className="mt-10 text-center text-sm text-red-600">
						<a className="font-semibold leading-6 text-red-600 hover:text-red-500">
							{alarm}
						</a>
					</p>
				</div>
			</div>
		</>
	);
};

export default Signup;
