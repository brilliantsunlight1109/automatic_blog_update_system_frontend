import React from "react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Stylenav from "../Stylenav";
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
//App Bar
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
//card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Fullscreen, WidthFull } from "@mui/icons-material";
//bootstrap textarea
import Form from "react-bootstrap/Form";
//upload
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
//Radio Group
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
//checkbox
import Checkbox from "@mui/material/Checkbox";
import StyleTemplate from "./StyleTemplate";
//checkbox-select

const AddStyle = () => {
	//tab
	const [key, setKey] = useState("home");
	const [show, setShow] = useState({
		selectedImage1: "",
		selectedImage2: "",
		selectedImage3: "",
	});
	const navigate = useNavigate();

	//const
	const [data, setData] = useState({
		update_stop: false,
		internal_memo: "",
		stylist_comment: "",
		style_name: "",
		styling_arrangement_point: "",
		sync_date_start: "",
		sync_date_end: "",
		sync_start_time: "",
		sync_interval: "",
		post_mode: "",
		selectedImage1: null,
		selectedImage2: null,
		selectedImage3: null,
		front: "",
		front1: "",
		front2: "",
		stylist_name: "",
		sex: "female",
		length: "",
		color: "",
		style_image: "",
		style_menu_perm: false,
		style_menu_straight_perm: false,
		extensions: false,
		coupon: "",
		hair_amount_few: true,
		hair_amount_usually: true,
		hair_amount_many: true,
		hair_type_soft: true,
		hair_type_usually: true,
		hair_type_hard: true,
		thickness_thin: true,
		thickness_usually: true,
		thickness_thick: true,
		habit_none: true,
		habit_bit: true,
		habit_strong: true,
		face_type_round_shape: true,
		face_type_inverted_triangle: true,
		face_type_egg_shapped: true,
		face_type_base: true,
		face_type_square: true,
		menu_content: "",
	});

	//switch

	const updateStop = (e) => {
		setData((data) => ({ ...data, [e.target.name]: e.target.checked }));
	};

	//textarea

	const handleChangeTextarea = (e) => {
		setData((data) => ({ ...data, [e.target.name]: e.target.value }));
	};

	//sync_date
	const handleChangeSyncDate = (e) => {
		setData((data) => ({ ...data, [e.target.name]: e.target.value }));
	};

	//sync_time
	const handleChangeSyncTime = (e) => {
		setData((data) => ({ ...data, [e.target.name]: e.target.value }));
	};

	//select
	const handleChangeSelect = (e) => {
		setData((data) => ({ ...data, [e.target.name]: e.target.value }));
	};

	const handleChangeRadio = (key) => (e) => {
		setData((data) => ({ ...data, [key]: e.target.value }));
	};

	const handleChangeCheckbox = (e) => {
		setData((data) => ({ ...data, [e.target.name]: e.target.checked }));
	};

	//select_post_mode
	// console.log("update_stop:", data.update_stop);
	// console.log("internal_memo:",data.internal_memo);
	// console.log("stylist_comment:",data.stylist_comment);
	// console.log("style_name:",data.style_name);
	// console.log("styling_arrangement_point:",data.styling_arrangement_point);

	// console.log("sync_date_start:",data.sync_date_start);
	// console.log("sync_date_end:",data.sync_date_end);
	// console.log("sync_start_time:",data.sync_start_time);
	// console.log("sync_interval:",data.sync_interval);
	// console.log("post_mode:",data.post_mode);

	// console.log("selectedImage1:", data.selectedImage1);
	// console.log("selectedImage2:", data.selectedImage2);
	// console.log("selectedImage3:", data.selectedImage3);

	// console.log("front:",data.front);
	// console.log("front1:",data.front1);
	// console.log("front2:",data.front2);

	// console.log("stylist_name:",data.stylist_name);
	// console.log("sex:",data.sex);
	// console.log("length:",data.length);
	// console.log("color:",data.color);
	// console.log("style_image:",data.style_image);
	// console.log("style_menu_perm:",data.style_menu_perm);
	// console.log("style_menu_straight_perm:",data.style_menu_straight_perm);
	// console.log("extensions:",data.extensions);
	// console.log("coupon:",data.coupon);

	// console.log("hair_amount_few:",data.hair_amount_few);
	// console.log("hair_amount_usually:",data.hair_amount_usually);
	// console.log("hair_amount_many:",data.hair_amount_many);
	// console.log("hair_amount_few:",data.hair_amount_few);
	// console.log("hair_amount_usually:",data.hair_amount_usually);
	// console.log("hair_amount_many:",data.hair_amount_many);
	// console.log("hair_type_soft:",data.hair_type_soft);
	// console.log("hair_type_usually:",data.hair_type_usually);
	// console.log("hair_type_hard:",data.hair_type_hard);
	// console.log("thickness_thin:",data.thickness_thin);
	// console.log("thickness_usually:",data.thickness_usually);
	// console.log("thickness_thick:",data.thickness_thick);
	// console.log("habit_none:",data.habit_none);
	// console.log("habit_bit:",data.habit_bit);
	// console.log("habit_strong:",data.habit_strong);
	// console.log("face_type_round_shape:",data.face_type_round_shape);
	// console.log("face_type_inverted_triangle:",data.face_type_inverted_triangle);
	// console.log("face_type_egg_shapped:",data.face_type_egg_shapped);
	// console.log("face_type_base:",data.face_type_base);
	// console.log("face_type_square:",data.face_type_square);
	// console.log("menu_content:",data.menu_content);

	// console.log(data.selectedImage1);
	// console.log(data);

	//fileUpload
	const VisuallyHiddenInput = styled("input")({
		clip: "rect(0 0 0 0)",
		clipPath: "inset(50%)",
		height: 1,
		overflow: "hidden",
		position: "absolute",
		bottom: 0,
		left: 0,
		whiteSpace: "nowrap",
		width: 1,
	});

	// const handleFileChange = (key) => (event) => {
	// 	const file = event.target.files[0];

	// 	if (file) {
	// 		const reader = new FileReader();
	// 		reader.onload = () => {
	// 			const image = reader.result;

	// 			setData((data) => ({
	// 				...data,
	// 				[key]: image,
	// 			}));
	// 		};
	// 		reader.readAsDataURL(file);
	// 	}
	// };

	const handleFileChange = (key) => (e) => {
		const file = e.target.files[0];
		setData((data) => ({
			...data,
			[key]: file,
		}));
		setShow((data) => ({
			...data,
			[key]: URL.createObjectURL(file),
		}));
		// setData((data) => ({
		// 	...data,
		// 	[key]: e.target.files[0],
		// }));
		// setShow(URL.createObjectURL(e.target.files[0]));
	};

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const handleChange_select = (event) => {
		setAge(event.target.value);
	};

	//upload

	//checked
	const [checked, setChecked] = useState(true);

	const handleChange_checked1 = (event) => {
		setChecked(event.target.checked);
	};

	const handleChange_checked2 = (event) => {
		setChecked(event.target.checked);
	};

	const handleChange_checked3 = (event) => {
		setChecked(event.target.checked);
	};

	const [age, setAge] = useState("");
	console.log(data.selectedImage1);
	console.log(data.selectedImage2);
	console.log(data.selectedImage3);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("update_stop", data.update_stop);
		formData.append("internal_memo", data.internal_memo);
		formData.append("stylist_comment", data.stylist_comment);
		formData.append("style_name", data.style_name);
		formData.append(
			"styling_arrangement_point",
			data.styling_arrangement_point
		);
		formData.append("sync_date_start", data.sync_date_start);
		formData.append("sync_date_end", data.sync_date_end);
		formData.append("sync_start_time", data.sync_start_time);
		formData.append("sync_interval", data.sync_interval);
		formData.append("post_mode", data.post_mode);
		formData.append("selectedImage1", data.selectedImage1);
		formData.append("selectedImage2", data.selectedImage2);
		formData.append("selectedImage3", data.selectedImage3);
		formData.append("front", data.front);
		formData.append("front1", data.front1);
		formData.append("front2", data.front2);
		formData.append("stylist_name", data.stylist_name);
		formData.append("sex", data.sex);
		formData.append("length", data.length);
		formData.append("color", data.color);
		formData.append("style_image", data.style_image);
		formData.append("style_menu_perm", data.style_menu_perm);
		formData.append("style_menu_straight_perm", data.style_menu_straight_perm);
		formData.append("extensions", data.extensions);
		formData.append("coupon", data.coupon);
		formData.append("hair_amount_few", data.hair_amount_few);
		formData.append("hair_amount_usually", data.hair_amount_usually);
		formData.append("hair_amount_many", data.hair_amount_many);
		formData.append("hair_type_soft", data.hair_type_soft);
		formData.append("hair_type_usually", data.hair_type_usually);
		formData.append("hair_type_hard", data.hair_type_hard);
		formData.append("thickness_thin", data.thickness_thin);
		formData.append("thickness_usually", data.thickness_usually);
		formData.append("thickness_thick", data.thickness_thick);
		formData.append("habit_none", data.habit_none);
		formData.append("habit_bit", data.habit_bit);
		formData.append("habit_strong", data.habit_strong);
		formData.append("face_type_round_shape", data.face_type_round_shape);
		formData.append(
			"face_type_inverted_triangle",
			data.face_type_inverted_triangle
		);
		formData.append("face_type_egg_shapped", data.face_type_egg_shapped);
		formData.append("face_type_base", data.face_type_base);
		formData.append("face_type_square", data.face_type_square);
		formData.append("menu_content", data.menu_content);
		console.log("formData: ", formData);

		axios
			.post("http://localhost:4000/api/style", formData)
			.then((res) => {
				setData({
					update_stop: false,
					internal_memo: "",
					stylist_comment: "",
					style_name: "",
					styling_arrangement_point: "",
					sync_date_start: "",
					sync_date_end: "",
					sync_start_time: "",
					sync_interval: "",
					post_mode: "",
					selectedImage1: "",
					selectedImage2: "",
					selectedImage3: "",
					front: "",
					front1: "",
					front2: "",
					stylist_name: "",
					sex: "female",
					length: "",
					color: "",
					style_image: "",
					style_menu_perm: false,
					style_menu_straight_perm: false,
					extensions: false,
					coupon: "",
					hair_amount_few: true,
					hair_amount_usually: true,
					hair_amount_many: true,
					hair_type_soft: true,
					hair_type_usually: true,
					hair_type_hard: true,
					thickness_thin: true,
					thickness_usually: true,
					thickness_thick: true,
					habit_none: true,
					habit_bit: true,
					habit_strong: true,
					face_type_round_shape: true,
					face_type_inverted_triangle: true,
					face_type_egg_shapped: true,
					face_type_base: true,
					face_type_square: true,
					menu_content: "",
				});
				console.log(res.data.message);
				setShow({
					selectedImage1: "",
					selectedImage2: "",
					selectedImage3: "",
				});
			})
			.catch((err) => {
				console.log("Error couldn't create Style");
				console.log(err.message);
			});
	};

	return (
		<>
			<div className="container-xl min-h-screen">
				<div className="min-h-full">
					<Stylenav />
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
									<div className="container-xl m-auto">
										<form onSubmit={handleSubmit}>
											<div className="flex flex-col justify-center items-center w-full">
												<Box
													sx={{ flexGrow: 1 }}
													className="w-full max-w-5xl pt-6 mx-auto"
												>
													<AppBar position="static" className="rounded-t-lg">
														<Toolbar>
															{/* <IconButton
															size="large"
															edge="start"
															color="inherit"
															aria-label="menu"
															sx={{ mr: 2 }}
														> */}
															{/* <MenuIcon className="mr-6" /> */}
															{/* </IconButton> */}
															<Typography
																variant="h6"
																component="div"
																sx={{ flexGrow: 1 }}
															>
																スタイルテンプレート
															</Typography>
															{/* <Button color="inherit">Login</Button> */}
														</Toolbar>
													</AppBar>
													<Card className="flex justify-center w-full">
														<CardContent className="rounded-tr-none">
															<div className="flex justify-center items-center gap-x-16 pb-3 pt-4">
																<Box sx={{ minWidth: 300 }}>
																	<FormControl fullWidth>
																		<InputLabel id="demo-simple-select-label">
																			未選択
																		</InputLabel>
																		<Select
																			labelId="demo-simple-select-label"
																			id="demo-simple-select"
																			value={age}
																			label="未選択"
																			onChange={handleChange}
																		>
																			<MenuItem value={10}>未選択</MenuItem>
																			<MenuItem value={20}>
																				【仮登録用】
																			</MenuItem>
																		</Select>
																	</FormControl>
																</Box>
																<Box
																	sx={{ minWidth: 300 }}
																	className="flex justify-center items-center"
																>
																	<Button
																		variant="contained"
																		className="py-3 w-full"
																	>
																		テンプレートを反映
																	</Button>
																</Box>
															</div>
														</CardContent>
													</Card>
												</Box>
											</div>
											{/* <div className="mt-24 flex justify-center gap-x-14">
												<Box
													sx={{ minWidth: 300 }}
													className="flex justify-center items-center"
												>
													<Button
														variant="contained"
														className="py-3 w-72 text-4xl"
													>
														一覧へ戻る
													</Button>
												</Box>
												<Box
													sx={{ minWidth: 300 }}
													className="flex justify-center items-center"
												>
													<Button variant="contained" className="py-3 w-72">
														追加
													</Button>
												</Box>
											</div> */}
											<div className="flex flex-col justify-center items-center w-full">
												<Box
													sx={{ flexGrow: 1 }}
													className="w-full max-w-5xl mx-auto pt-12"
												>
													<AppBar position="static" className="rounded-t-lg">
														<Toolbar>
															{/* <IconButton
															size="large"
															edge="start"
															color="inherit"
															aria-label="menu"
															sx={{ mr: 2 }}
														> */}
															{/* <MenuIcon className="mr-6" /> */}
															{/* </IconButton> */}
															<Typography
																variant="h6"
																component="div"
																sx={{ flexGrow: 1 }}
															>
																同期設定
															</Typography>
															{/* <Button color="inherit">Login</Button> */}
														</Toolbar>
													</AppBar>
													<Card className="flex justify-start w-full">
														<CardContent className="rounded-tr-none">
															<div className="flex justify-start pl-20 pb-3 pt-3 w-full flex-col">
																<Box>
																	<FormControl
																		component="fieldset"
																		variant="standard"
																	>
																		{/* <FormLabel component="legend">
																		Assign responsibility
																	</FormLabel> */}
																		<FormGroup>
																			<FormControlLabel
																				control={
																					<Switch
																						checked={data.update_stop}
																						onChange={updateStop}
																						name="update_stop"
																					/>
																				}
																				label="更新停止"
																			/>
																		</FormGroup>

																		{/* <FormHelperText>Be careful</FormHelperText> */}
																	</FormControl>
																</Box>
																<Box>
																	<div className="mb-2 mt-1">内部メモ</div>
																	<FormGroup className="w-[40rem]">
																		<Form.Control
																			as="textarea"
																			rows={3}
																			className="w-full"
																			name="internal_memo"
																			onChange={handleChangeTextarea}
																			value={data.internal_memo}
																		/>
																	</FormGroup>
																</Box>
																<Box>
																	<div className="mt-3 mb-3">同期期間</div>
																	<div className="flex flex-row pb-2">
																		<input
																			type="date"
																			name="sync_date_start"
																			onChange={handleChangeSyncDate}
																			value={data.sync_date_start}
																			className="block mr-6 w-44 rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
																		/>

																		<input
																			type="date"
																			name="sync_date_end"
																			onChange={handleChangeSyncDate}
																			value={data.sync_date_end}
																			className="block w-44 rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
																		/>
																	</div>
																</Box>
																<Box>
																	<div className="mt-3 mb-3">同期開始時間</div>
																	<div>
																		<input
																			type="time"
																			name="sync_start_time"
																			onChange={handleChangeSyncTime}
																			value={data.sync_start_time}
																			className=" block w-44 rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
																		/>
																	</div>
																</Box>
																<Box>
																	<div className="mt-3 mb-3">同期間隔</div>
																	<div>
																		<FormControl className="w-ull">
																			<InputLabel
																				id="demo-simple-select-label"
																				className="w-44"
																			>
																				同期間隔
																			</InputLabel>
																			<Select
																				labelId="demo-simple-select-label"
																				id="demo-simple-select"
																				name="sync_interval"
																				value={data.sync_interval}
																				label="同期間隔"
																				onChange={handleChangeSelect}
																				className="w-44"
																			>
																				<MenuItem value={"1回のみ"}>
																					1回のみ
																				</MenuItem>
																				<MenuItem value={"1時間"}>
																					1時間
																				</MenuItem>
																				<MenuItem value={"2時間"}>
																					2時間
																				</MenuItem>
																				<MenuItem value={"3時間"}>
																					3時間
																				</MenuItem>
																				<MenuItem value={"4時間"}>
																					4時間
																				</MenuItem>
																				<MenuItem value={"6時間"}>
																					6時間
																				</MenuItem>
																				<MenuItem value={"8時間"}>
																					8時間
																				</MenuItem>
																				<MenuItem value={"12時間"}>
																					12時間
																				</MenuItem>
																				<MenuItem value={"1日"}>1日</MenuItem>
																				<MenuItem value={"1週間"}>
																					1週間
																				</MenuItem>
																			</Select>
																		</FormControl>
																	</div>
																</Box>
																<Box>
																	<div className="mt-3 mb-3">投稿モード</div>
																	<div>
																		<FormControl className="w-48">
																			<InputLabel
																				id="demo-simple-select-label"
																				className="w-44"
																			>
																				投稿モード
																			</InputLabel>
																			<Select
																				labelId="demo-simple-select-label"
																				id="demo-simple-select"
																				value={data.post_mode}
																				label="投稿モード"
																				onChange={handleChangeSelect}
																				className="w-44"
																				name="post_mode"
																			>
																				<MenuItem value={"ADD"}>ADD</MenuItem>
																				<MenuItem value={"DEL"}>DEL</MenuItem>
																			</Select>
																		</FormControl>
																	</div>
																</Box>
																<Box>
																	<Typography
																		level="body-sm"
																		className="ml-3 mt-3 mb-3 text-slate-400"
																	>
																		前回の同期で追加したスタイルを削除してから追加を行うモードです
																	</Typography>
																</Box>
															</div>
														</CardContent>
													</Card>
												</Box>
											</div>
											<div className="flex flex-col justify-center items-center w-full">
												<Box
													sx={{ flexGrow: 1 }}
													className="w-full max-w-5xl pt-12 mx-auto"
												>
													<AppBar position="static" className="rounded-t-lg">
														<Toolbar>
															{/* <IconButton
															size="large"
															edge="start"
															color="inherit"
															aria-label="menu"
															sx={{ mr: 2 }}
														> */}
															{/* <MenuIcon className="mr-6" /> */}
															{/* </IconButton> */}
															<Typography
																variant="h6"
																component="div"
																sx={{ flexGrow: 1 }}
															>
																スタイル画像
															</Typography>
															{/* <Button color="inherit">Login</Button> */}
														</Toolbar>
													</AppBar>
													<Card className="flex justify-center w-full">
														<CardContent className="rounded-tr-none w-full">
															<div className="flex justify-around items-center pb-3 pt-4 w-full">
																<Box
																	sx={{ minWidth: 200 }}
																	className="flex justify-between flex-col h-[24.5rem]"
																>
																	<div>
																		<FormControl fullWidth>
																			<InputLabel id="demo-simple-select-label">
																				未選択
																			</InputLabel>
																			<Select
																				labelId="demo-simple-select-label"
																				id="demo-simple-select"
																				value={data.front}
																				label="未選択"
																				onChange={handleChangeSelect}
																				name="front"
																			>
																				<MenuItem value={"Front"}>
																					Front
																				</MenuItem>
																			</Select>
																		</FormControl>
																	</div>

																	<div className="flex justify-center items-center pt-5 pb-5">
																		<img
																			src={show.selectedImage1}
																			// src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
																			className="w-40 h-40"
																		/>
																	</div>
																	<div className="flex justify-center items-center">
																		<Button
																			component="label"
																			variant="contained"
																			startIcon={<CloudUploadIcon />}
																		>
																			アップロード
																			<VisuallyHiddenInput
																				type="file"
																				accept=".png, .jpg, .jpeg"
																				onChange={handleFileChange(
																					"selectedImage1"
																				)}
																			/>
																		</Button>
																	</div>
																</Box>
																<Box
																	sx={{ minWidth: 200 }}
																	className="flex justify-between flex-col h-[24.5rem]"
																>
																	<FormControl fullWidth>
																		<InputLabel id="demo-simple-select-label">
																			指定なし
																		</InputLabel>
																		<Select
																			labelId="demo-simple-select-label"
																			id="demo-simple-select"
																			value={data.front1}
																			label="指定なし"
																			onChange={handleChangeSelect}
																			name="front1"
																		>
																			<MenuItem value={"指定なし"}>
																				指定なし
																			</MenuItem>
																			<MenuItem value={"FRONT"}>FRONT</MenuItem>
																			<MenuItem value={"SIDE"}>SIDE</MenuItem>
																			<MenuItem value={"BACK"}>BACK</MenuItem>
																			<MenuItem value={"ARRANGE"}>
																				ARRANGE
																			</MenuItem>
																			<MenuItem value={"BEFORE"}>
																				BEFORE
																			</MenuItem>
																			<MenuItem value={"FASHION"}>
																				FASHION
																			</MenuItem>
																		</Select>
																	</FormControl>
																	<div className="flex justify-center items-center pt-5 pb-5">
																		<img
																			src={show.selectedImage2}
																			// src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
																			className="w-40 h-40"
																		/>
																	</div>
																	<div className="flex justify-center items-center">
																		<Button
																			component="label"
																			variant="contained"
																			startIcon={<CloudUploadIcon />}
																		>
																			アップロード
																			<VisuallyHiddenInput
																				type="file"
																				accept=".png, .jpg, .jpeg"
																				onChange={handleFileChange(
																					"selectedImage2"
																				)}
																			/>
																		</Button>
																	</div>
																</Box>
																<Box
																	sx={{ minWidth: 200 }}
																	className="flex justify-between flex-col h-[24.5rem]"
																>
																	<FormControl fullWidth>
																		<InputLabel id="demo-simple-select-label">
																			指定なし
																		</InputLabel>
																		<Select
																			labelId="demo-simple-select-label"
																			id="demo-simple-select"
																			value={data.front2}
																			label="指定なし"
																			onChange={handleChangeSelect}
																			name="front2"
																		>
																			<MenuItem value={"指定なし"}>
																				指定なし
																			</MenuItem>
																			<MenuItem value={"FRONT"}>FRONT</MenuItem>
																			<MenuItem value={"SIDE"}>SIDE</MenuItem>
																			<MenuItem value={"BACK"}>BACK</MenuItem>
																			<MenuItem value={"ARRANGE"}>
																				ARRANGE
																			</MenuItem>
																			<MenuItem value={"BEFORE"}>
																				BEFORE
																			</MenuItem>
																			<MenuItem value={"FASHION"}>
																				FASHION
																			</MenuItem>
																		</Select>
																	</FormControl>
																	<div className="flex justify-center items-center pt-5 pb-5">
																		<img
																			src={show.selectedImage3}
																			// src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
																			className="w-40 h-40"
																		/>
																	</div>
																	<div className="flex justify-center items-center">
																		<Button
																			component="label"
																			variant="contained"
																			startIcon={<CloudUploadIcon />}
																		>
																			アップロード
																			<VisuallyHiddenInput
																				type="file"
																				accept=".png, .jpg, .jpeg"
																				onChange={handleFileChange(
																					"selectedImage3"
																				)}
																			/>
																		</Button>
																	</div>
																</Box>
															</div>
														</CardContent>
													</Card>
												</Box>
											</div>
											<div className="flex flex-col justify-center items-center w-full">
												<Box
													sx={{ flexGrow: 1 }}
													className="w-full max-w-5xl pt-12 mx-auto"
												>
													<AppBar position="static" className="rounded-t-lg">
														<Toolbar>
															{/* <IconButton
															size="large"
															edge="start"
															color="inherit"
															aria-label="menu"
															sx={{ mr: 2 }}
														> */}
															{/* <MenuIcon className="mr-6" /> */}
															{/* </IconButton> */}
															<Typography
																variant="h6"
																component="div"
																sx={{ flexGrow: 1 }}
															>
																スタイリストコメント
															</Typography>
															{/* <Button color="inherit">Login</Button> */}
														</Toolbar>
													</AppBar>
													<Card className="flex justify-start pl-12 w-full">
														<CardContent className="rounded-tr-none">
															<div className="gap-x-16 pb-3 pt-4">
																<Box sx={{ minWidth: 300 }} className="pb-6">
																	<Typography className="pb-3">
																		スタイリスト名
																	</Typography>
																	<FormControl className="w-full">
																		<InputLabel id="demo-simple-select-label">
																			指定なし
																		</InputLabel>
																		<Select
																			labelId="demo-simple-select-label"
																			id="demo-simple-select"
																			value={data.stylist_name}
																			name="stylist_name"
																			label="指定なし"
																			onChange={handleChangeSelect}
																		>
																			<MenuItem value={"TATSUYA"}>
																				TATSUYA
																			</MenuItem>
																			<MenuItem value={"TAKUMI"}>
																				TAKUMI
																			</MenuItem>
																			<MenuItem value={"GOTA"}>GOTA</MenuItem>
																			<MenuItem value={"NAOKI"}>NAOKI</MenuItem>
																			<MenuItem value={"GO 立川"}>
																				GO 立川
																			</MenuItem>
																		</Select>
																	</FormControl>
																</Box>
																<Box>
																	<div className="mb-2 mt-1">
																		コメント 0/120文字
																	</div>
																	<FormGroup className="w-[40rem]">
																		<Form.Control
																			name="stylist_comment"
																			as="textarea"
																			rows={3}
																			className="w-full"
																			onChange={handleChangeTextarea}
																			value={data.stylist_comment}
																		/>
																	</FormGroup>
																</Box>
															</div>
														</CardContent>
													</Card>
												</Box>
											</div>
											<div className="flex flex-col justify-center items-center w-full">
												<Box
													sx={{ flexGrow: 1 }}
													className="w-full max-w-5xl pt-12 mx-auto"
												>
													<AppBar position="static" className="rounded-t-lg">
														<Toolbar>
															{/* <IconButton
															size="large"
															edge="start"
															color="inherit"
															aria-label="menu"
															sx={{ mr: 2 }}
														> */}
															{/* <MenuIcon className="mr-6" /> */}
															{/* </IconButton> */}
															<Typography
																variant="h6"
																component="div"
																sx={{ flexGrow: 1 }}
															>
																スタイル
															</Typography>
															{/* <Button color="inherit">Login</Button> */}
														</Toolbar>
													</AppBar>
													<Card className="flex justify-start pl-12 w-full">
														<CardContent className="rounded-tr-none">
															<div className="gap-x-16 pb-3 pt-4">
																<Box sx={{ minWidth: 300 }} className="pb-6">
																	<Typography className="pb-3">
																		スタイル名 0/30文字
																	</Typography>
																	<FormControl className="w-full">
																		<TextField
																			id="outlined-basic"
																			label="スタイル名"
																			variant="outlined"
																			onChange={handleChangeTextarea}
																			name="style_name"
																			value={data.style_name}
																		/>
																	</FormControl>
																</Box>
																<Box sx={{ minWidth: 300 }} className="pb-3">
																	{/* <Typography className="pb-3">
																	カテゴリ
																</Typography> */}
																	<FormControl>
																		<FormLabel id="demo-radio-buttons-group-label">
																			カテゴリ
																		</FormLabel>
																		<RadioGroup
																			aria-labelledby="demo-radio-buttons-group-label"
																			// defaultValue="female"

																			value={data.sex}
																			onChange={handleChangeRadio("sex")}
																		>
																			<FormControlLabel
																				value="female"
																				control={<Radio />}
																				label="レディース"
																			/>
																			<FormControlLabel
																				value="male"
																				control={<Radio />}
																				label="メンズ"
																			/>
																		</RadioGroup>
																	</FormControl>
																</Box>
																<Box sx={{ minWidth: 300 }} className="pb-6">
																	<Typography className="pb-3">長さ</Typography>
																	<FormControl className="w-full">
																		<InputLabel id="demo-simple-select-label">
																			選択してください
																		</InputLabel>
																		<Select
																			labelId="demo-simple-select-label"
																			id="demo-simple-select"
																			value={data.length}
																			label="選択してください"
																			onChange={handleChangeSelect}
																			name="length"
																		>
																			<MenuItem value={"ベリーショート"}>
																				ベリーショート
																			</MenuItem>
																			<MenuItem value={"ショート"}>
																				ショート
																			</MenuItem>
																			<MenuItem value={"ミディアム"}>
																				ミディアム
																			</MenuItem>
																			<MenuItem value={"セミロング"}>
																				セミロング
																			</MenuItem>
																			<MenuItem value={"ロング"}>
																				ロング
																			</MenuItem>
																			<MenuItem value={"ヘアセット"}>
																				ヘアセット
																			</MenuItem>
																			<MenuItem value={"ミセス"}>
																				ミセス
																			</MenuItem>
																		</Select>
																	</FormControl>
																</Box>
																<Box sx={{ minWidth: 300 }} className="pb-6">
																	<Typography className="pb-3">
																		カラー
																	</Typography>
																	<FormControl className="w-full">
																		<InputLabel id="demo-simple-select-label">
																			選択してください
																		</InputLabel>
																		<Select
																			labelId="demo-simple-select-label"
																			id="demo-simple-select"
																			name="color"
																			value={data.color}
																			label="選択してください"
																			onChange={handleChangeSelect}
																		>
																			<MenuItem value={"ブラウン・ベージュ系"}>
																				ブラウン・ベージュ系
																			</MenuItem>
																			<MenuItem value={"イエロー・オレンジ系"}>
																				イエロー・オレンジ系
																			</MenuItem>
																			<MenuItem value={"レッド・ピンク系"}>
																				レッド・ピンク系
																			</MenuItem>
																			<MenuItem value={"アッシュ・ブラック系"}>
																				アッシュ・ブラック系
																			</MenuItem>
																			<MenuItem value={"その他カラー"}>
																				その他カラー
																			</MenuItem>
																		</Select>
																	</FormControl>
																</Box>
																<Box sx={{ minWidth: 300 }} className="pb-6">
																	<Typography className="pb-3">
																		イメージ
																	</Typography>
																	<FormControl className="w-full">
																		<InputLabel id="demo-simple-select-label">
																			選択してください
																		</InputLabel>
																		<Select
																			labelId="demo-simple-select-label"
																			id="demo-simple-select"
																			value={data.style_image}
																			name="style_image"
																			label="選択してください"
																			onChange={handleChangeSelect}
																		>
																			<MenuItem value={"ナチュラル"}>
																				ナチュラル
																			</MenuItem>
																			<MenuItem value={"オフィス・コンサバ"}>
																				オフィス・コンサバ
																			</MenuItem>
																			<MenuItem value={"モテ・愛され"}>
																				モテ・愛され
																			</MenuItem>
																			<MenuItem value={"ギャル"}>
																				ギャル
																			</MenuItem>
																			<MenuItem
																				value={"カジュアル・ストリート"}
																			>
																				カジュアル・ストリート
																			</MenuItem>
																			<MenuItem value={"ティーンズ・ガーリー"}>
																				ティーンズ・ガーリー
																			</MenuItem>
																		</Select>
																	</FormControl>
																</Box>
																<Box sx={{ minWidth: 300 }} className="pb-6">
																	<Typography className="pb-3">
																		メニュー内容0/50文字
																	</Typography>
																	<FormGroup>
																		<FormControlLabel
																			control={<Checkbox />}
																			label="パーマ"
																			checked={data.style_menu_perm}
																			onChange={handleChangeCheckbox}
																			name="style_menu_perm"
																		/>
																		<FormControlLabel
																			control={<Checkbox />}
																			label="ストレートパーマ・縮毛矯正"
																			checked={data.style_menu_straight_perm}
																			onChange={handleChangeCheckbox}
																			name="style_menu_straight_perm"
																		/>
																		<FormControlLabel
																			control={<Checkbox />}
																			label="エクステ"
																			checked={data.extensions}
																			onChange={handleChangeCheckbox}
																			name="extensions"
																		/>
																	</FormGroup>
																</Box>
																<Box>
																	<FormGroup className="w-[40rem]">
																		<Form.Control
																			as="textarea"
																			rows={3}
																			className="w-full"
																			name="menu_content"
																			value={data.menu_content}
																			onChange={handleChangeTextarea}
																		/>
																	</FormGroup>
																</Box>
																<Box sx={{ minWidth: 300 }} className="pb-6">
																	<Typography className="pb-3 pt-6">
																		クーポン
																	</Typography>
																	<FormControl className="w-full">
																		<InputLabel id="demo-simple-select-label">
																			なし
																		</InputLabel>
																		<Select
																			labelId="demo-simple-select-label"
																			id="demo-simple-select"
																			name="coupon"
																			value={data.coupon}
																			label="なし"
																			onChange={handleChangeSelect}
																		>
																			<MenuItem value={"なし"}>なし</MenuItem>
																			<MenuItem
																				value={
																					"平日限定【メンズ】カット¥4000[メンズカット/メンズ/フェード/立川]"
																				}
																			>
																				平日限定【メンズ】カット¥4000[メンズカット/メンズ/フェード/立川]
																			</MenuItem>
																			<MenuItem
																				value="平日限定【メンズ】カット+クイックスパ¥5000
																				[メンズカット/立川/眉毛]"
																			>
																				平日限定【メンズ】カット+クイックスパ¥5000
																				[メンズカット/立川/眉毛]
																			</MenuItem>
																			<MenuItem value="平日限定【メンズ】カット+ニュアンスパーマ¥10000[メンズ/フェード/立川]">
																				平日限定【メンズ】カット+ニュアンスパーマ¥10000[メンズ/フェード/立川]
																			</MenuItem>
																			<MenuItem value="平日限定【メンズ】カット+ツイストスパイラルパーマ¥11500[メンズ/立川]">
																				平日限定【メンズ】カット+ツイストスパイラルパーマ¥11500[メンズ/立川]
																			</MenuItem>
																			<MenuItem value="平日限定【メンズ】カット+波巻きスパイラルパーマ¥12500[メンズ/眉毛/立川]">
																				平日限定【メンズ】カット+波巻きスパイラルパーマ¥12500[メンズ/眉毛/立川]
																			</MenuItem>
																			<MenuItem value="平日限定【メンズ】カット+カラー¥10000[メンズカット/フェード/立川/眉毛]">
																				平日限定【メンズ】カット+カラー¥10000[メンズカット/フェード/立川/眉毛]
																			</MenuItem>
																			<MenuItem value="【メンズ】カット¥4500[メンズカット/センターパート/立川]">
																				【メンズ】カット¥4500[メンズカット/センターパート/立川]
																			</MenuItem>
																			<MenuItem value="【メンズ】刈り上げメンテナンスカット¥2500【メンズ/立川】">
																				【メンズ】刈り上げメンテナンスカット¥2500【メンズ/立川】
																			</MenuItem>
																			<MenuItem value="【メンズ】カット+眉毛カット¥5500[メンズカット//立川/眉毛]">
																				【メンズ】カット+眉毛カット¥5500[メンズカット//立川/眉毛]
																			</MenuItem>
																			<MenuItem value="【メンズ】カット+ニュアンスパーマ¥10500[メンズパーマ/フェード/立川]">
																				【メンズ】カット+ニュアンスパーマ¥10500[メンズパーマ/フェード/立川]
																			</MenuItem>
																			<MenuItem value="【メンズ】カット+ツイストスパイラルパーマ¥12500[メンズ/ツイストパーマ]">
																				【メンズ】カット+ツイストスパイラルパーマ¥12500[メンズ/ツイストパーマ]
																			</MenuItem>
																			<MenuItem value="【メンズ】カット+波巻きスパイラルパーマ¥13500[メンズ/メンズパーマ/立川]">
																				【メンズ】カット+波巻きスパイラルパーマ¥13500[メンズ/メンズパーマ/立川]
																			</MenuItem>
																			<MenuItem
																				value="期間限定 学割U24【メンズ】
																				カット+眉毛カット¥3800[メンズ/立川]"
																			>
																				期間限定 学割U24【メンズ】
																				カット+眉毛カット¥3800[メンズ/立川]
																			</MenuItem>
																			<MenuItem value="学割U24【メンズ】カット¥3800[メンズカット/メンズ/フェード/立川]">
																				学割U24【メンズ】カット¥3800[メンズカット/メンズ/フェード/立川]
																			</MenuItem>
																			<MenuItem value="【メンズ】カット+炭酸ヘッドスパ¥6000[メンズカット/センターパート/立川]">
																				【メンズ】カット+炭酸ヘッドスパ¥6000[メンズカット/センターパート/立川]
																			</MenuItem>
																			<MenuItem value="学割U24【メンズ】カット+ニュアンスパーマ¥9500[メンズカット/フェード]">
																				学割U24【メンズ】カット+ニュアンスパーマ¥9500[メンズカット/フェード]
																			</MenuItem>
																			<MenuItem value="【メンズ】カット+ポイントパーマ¥9500[メンズパーマ/センターパート/立川]">
																				【メンズ】カット+ポイントパーマ¥9500[メンズパーマ/センターパート/立川]
																			</MenuItem>
																			<MenuItem
																				value={
																					"【メンズ】カット+ニュアンスパーマ+トリートメント¥12000[メンズ/立川]"
																				}
																			>
																				【メンズ】カット+ニュアンスパーマ+トリートメント¥12000[メンズ/立川]
																			</MenuItem>
																			<MenuItem value="【TAKUMI指名】U24カット+ツイストスパイラルパーマor波巻パーマ+眉カット">
																				【TAKUMI指名】U24カット+ツイストスパイラルパーマor波巻パーマ+眉カット
																			</MenuItem>
																			<MenuItem value="【メンズ】カット+ツイストスパイラル+トリートメント¥14000[メンズ/立川]">
																				【メンズ】カット+ツイストスパイラル+トリートメント¥14000[メンズ/立川]
																			</MenuItem>
																			<MenuItem value="【メンズ】カット+波巻きスパイラルパーマ+トリートメント¥15000[立川/眉毛]">
																				【メンズ】カット+波巻きスパイラルパーマ+トリートメント¥15000[立川/眉毛]
																			</MenuItem>
																			<MenuItem
																				value="【GOTA指名】カット+ケアパーマ
																				¥1,2000(立川/ケアパーマ/ブリーチパーマ)"
																			>
																				【GOTA指名】カット+ケアパーマ
																				¥1,2000(立川/ケアパーマ/ブリーチパーマ)
																			</MenuItem>
																			<MenuItem value="【メンズ】カット+ダウンパーマ¥10500[メンズパーマ/センターパート/立川]">
																				【メンズ】カット+ダウンパーマ¥10500[メンズパーマ/センターパート/立川]
																			</MenuItem>
																			<MenuItem value="【メンズ】カット+縮毛ストレート+トリートメント¥17300[メンズ/立川/眉毛]">
																				【メンズ】カット+縮毛ストレート+トリートメント¥17300[メンズ/立川/眉毛]
																			</MenuItem>
																			<MenuItem value="【メンズ】ワンカラー¥6000[メンズパーマ/ツイストスパイラルパーマ/立川]">
																				【メンズ】ワンカラー¥6000[メンズパーマ/ツイストスパイラルパーマ/立川]
																			</MenuItem>
																			<MenuItem value="【メンズ】ダブルカラー¥13000[メンズパーマ/ツイストスパイラルパーマ/立川]">
																				【メンズ】ダブルカラー¥13000[メンズパーマ/ツイストスパイラルパーマ/立川]
																			</MenuItem>
																			<MenuItem value="【メンズ】ダブルカラー+トリートメント¥15500[メンズパーマ/フェード/立川]">
																				【メンズ】ダブルカラー+トリートメント¥15500[メンズパーマ/フェード/立川]
																			</MenuItem>
																			<MenuItem value="【メンズ】メッシュキャップハイライト¥13000~[メンズカット/フェード/立川]">
																				【メンズ】メッシュキャップハイライト¥13000~[メンズカット/フェード/立川]
																			</MenuItem>
																			<MenuItem value="【メンズ】カット+カラー¥10500[メンズカット/ツイストパーマ/フェード/立川]">
																				【メンズ】カット+カラー¥10500[メンズカット/ツイストパーマ/フェード/立川]
																			</MenuItem>
																			<MenuItem
																				value="学割U24
																				【メンズ】カット+カラー¥9500[メンズカット/フェード/立川/眉毛]"
																			>
																				学割U24
																				【メンズ】カット+カラー¥9500[メンズカット/フェード/立川/眉毛]
																			</MenuItem>
																			<MenuItem value="【メンズ】カット+カラー+パーマ¥16000[メンズカット/立川/眉毛]">
																				【メンズ】カット+カラー+パーマ¥16000[メンズカット/立川/眉毛]
																			</MenuItem>
																			<MenuItem value="【メンズ】カット+ダブルカラー+トリートメント¥18300[メンズカット/立川]">
																				【メンズ】カット+ダブルカラー+トリートメント¥18300[メンズカット/立川]
																			</MenuItem>
																			<MenuItem value="【メンズ】カット+メッシュキャップ+トリートメント¥17800[メンズ/眉毛/立川]">
																				【メンズ】カット+メッシュキャップ+トリートメント¥17800[メンズ/眉毛/立川]
																			</MenuItem>
																			<MenuItem value="【メンズ】トリートメント¥2500~[メンズ/メンズパーマ/センターパート/立川]">
																				【メンズ】トリートメント¥2500~[メンズ/メンズパーマ/センターパート/立川]
																			</MenuItem>
																			<MenuItem
																				value="【2回目限定】平日限定カット￥4000
																				[メンズパーマ/センターパート/立川]"
																			>
																				【2回目限定】平日限定カット￥4000
																				[メンズパーマ/センターパート/立川]
																			</MenuItem>
																			<MenuItem
																				value="【2回目の方限定】カット+眉毛カット5500
																				/メンズパーマ/眉毛/立川】"
																			>
																				【2回目の方限定】カット+眉毛カット5500
																				/メンズパーマ/眉毛/立川】
																			</MenuItem>
																			<MenuItem
																				value="【2回目の方限定】カット￥4500
																				[メンズサロン/メンズパーマ/立川]"
																			>
																				【2回目の方限定】カット￥4500
																				[メンズサロン/メンズパーマ/立川]
																			</MenuItem>
																			<MenuItem
																				value="【TAKUMI】U24
																				2回目カット+ツイストスパイラルor波巻パーマ+眉カット"
																			>
																				【TAKUMI】U24
																				2回目カット+ツイストスパイラルor波巻パーマ+眉カット
																			</MenuItem>
																			<MenuItem
																				value="【2回目の方限定】カット+ヘッドスパ￥6000
																				[メンズパーマ/眉毛/立川]"
																			>
																				【2回目の方限定】カット+ヘッドスパ￥6000
																				[メンズパーマ/眉毛/立川]
																			</MenuItem>
																			<MenuItem
																				value="【2回目の方限定】カット+ニュアンスパーマ￥10500
																				[メンズカット/立川]"
																			>
																				【2回目の方限定】カット+ニュアンスパーマ￥10500
																				[メンズカット/立川]
																			</MenuItem>
																			<MenuItem
																				value="2回目の方限定】カット+ツイストスパイラルパーマ￥12500
																				[立川]"
																			>
																				2回目の方限定】カット+ツイストスパイラルパーマ￥12500
																				[立川]
																			</MenuItem>
																			<MenuItem value="【2回目の方限定】カット+波巻きスパイラルパーマ￥13500[立川]">
																				【2回目の方限定】カット+波巻きスパイラルパーマ￥13500[立川]
																			</MenuItem>
																			<MenuItem
																				value="【GOTA指名】2回目
																				カット+ケアパーマ(立川/ケアパーマ/ブリーチパーマ)"
																			>
																				【GOTA指名】2回目
																				カット+ケアパーマ(立川/ケアパーマ/ブリーチパーマ)
																			</MenuItem>
																			<MenuItem
																				value="【2回目の方限定】カット+カラー￥10500
																				[立川/眉毛/メンズカット]"
																			>
																				【2回目の方限定】カット+カラー￥10500
																				[立川/眉毛/メンズカット]
																			</MenuItem>
																			<MenuItem value="【2回目の方限定】カット+ダブルカラー+トリートメント￥18,300[立川]">
																				【2回目の方限定】カット+ダブルカラー+トリートメント￥18,300[立川]
																			</MenuItem>
																		</Select>
																	</FormControl>
																</Box>
															</div>
														</CardContent>
													</Card>
												</Box>
											</div>
											<div className="flex flex-col justify-center items-center w-full">
												<Box
													sx={{ flexGrow: 1 }}
													className="w-full max-w-5xl pt-12 mx-auto"
												>
													<AppBar position="static" className="rounded-t-lg">
														<Toolbar>
															{/* <IconButton
															size="large"
															edge="start"
															color="inherit"
															aria-label="menu"
															sx={{ mr: 2 }}
														> */}
															{/* <MenuIcon className="mr-6" /> */}
															{/* </IconButton> */}
															<Typography
																variant="h6"
																component="div"
																sx={{ flexGrow: 1 }}
															>
																おすすめタイプ
															</Typography>
															{/* <Button color="inherit">Login</Button> */}
														</Toolbar>
													</AppBar>
													<Card className="flex justify-start pl-12 w-full">
														<CardContent className="rounded-tr-none">
															<div className="gap-x-16 pb-3 pt-4">
																<Box>
																	<div>
																		<div className="pl-2 pt-4 pb-2">
																			<Typography
																				variant="h7"
																				className="font-medium"
																			>
																				髪量
																			</Typography>
																		</div>
																		<div className="flex gap-x-12">
																			<div className="flex justify-center items-center">
																				<Checkbox
																					checked={data.hair_amount_few}
																					name="hair_amount_few"
																					onChange={handleChangeCheckbox}
																					inputProps={{
																						"aria-label": "controlled",
																					}}
																				/>
																				<Typography variant="h7">
																					少ない
																				</Typography>
																			</div>
																			<div className="flex justify-center items-center">
																				<Checkbox
																					checked={data.hair_amount_usually}
																					onChange={handleChangeCheckbox}
																					name="hair_amount_usually"
																					inputProps={{
																						"aria-label": "controlled",
																					}}
																				/>
																				<Typography variant="h7">
																					普通
																				</Typography>
																			</div>
																			<div className="flex justify-center items-center">
																				<Checkbox
																					checked={data.hair_amount_many}
																					name="hair_amount_many"
																					onChange={handleChangeCheckbox}
																					inputProps={{
																						"aria-label": "controlled",
																					}}
																				/>
																				<Typography variant="h7">
																					多い
																				</Typography>
																			</div>
																		</div>
																	</div>
																	<div>
																		<div className="pl-2 pt-4 pb-2">
																			<Typography
																				variant="h7"
																				className="font-medium"
																			>
																				髪質
																			</Typography>
																		</div>
																		<div className="flex">
																			<div className="flex justify-center items-center pr-8">
																				<Checkbox
																					checked={data.hair_type_soft}
																					name="hair_type_soft"
																					onChange={handleChangeCheckbox}
																					inputProps={{
																						"aria-label": "controlled",
																					}}
																				/>
																				<Typography variant="h7">
																					柔らかい
																				</Typography>
																			</div>
																			<div className="flex justify-center items-center pr-12">
																				<Checkbox
																					checked={data.hair_type_usually}
																					name="hair_type_usually"
																					onChange={handleChangeCheckbox}
																					inputProps={{
																						"aria-label": "controlled",
																					}}
																				/>
																				<Typography variant="h7">
																					普通
																				</Typography>
																			</div>
																			<div className="flex justify-center items-center">
																				<Checkbox
																					checked={data.hair_type_hard}
																					name="hair_type_hard"
																					onChange={handleChangeCheckbox}
																					inputProps={{
																						"aria-label": "controlled",
																					}}
																				/>
																				<Typography variant="h7">
																					硬い
																				</Typography>
																			</div>
																		</div>
																	</div>
																	<div>
																		<div className="pl-2 pt-4 pb-2">
																			<Typography
																				variant="h7"
																				className="font-medium"
																			>
																				太さ
																			</Typography>
																		</div>
																		<div className="flex gap-x-12">
																			<div className="flex justify-center items-center">
																				<Checkbox
																					checked={data.thickness_thin}
																					name="thickness_thin"
																					onChange={handleChangeCheckbox}
																					inputProps={{
																						"aria-label": "controlled",
																					}}
																				/>
																				<Typography variant="h7">
																					細い
																				</Typography>
																			</div>
																			<div className="flex justify-center items-center">
																				<Checkbox
																					checked={data.thickness_usually}
																					name="thickness_usually"
																					onChange={handleChangeCheckbox}
																					inputProps={{
																						"aria-label": "controlled",
																					}}
																				/>
																				<Typography variant="h7">
																					普通
																				</Typography>
																			</div>
																			<div className="flex justify-center items-center">
																				<Checkbox
																					checked={data.thickness_thick}
																					name="thickness_thick"
																					onChange={handleChangeCheckbox}
																					inputProps={{
																						"aria-label": "controlled",
																					}}
																				/>
																				<Typography variant="h7">
																					太い
																				</Typography>
																			</div>
																		</div>
																	</div>
																	<div>
																		<div className="pl-2 pt-4 pb-2">
																			<Typography
																				variant="h7"
																				className="font-medium"
																			>
																				クセ
																			</Typography>
																		</div>
																		<div className="flex gap-x-12">
																			<div className="flex justify-center items-center">
																				<Checkbox
																					checked={data.habit_none}
																					name="habit_none"
																					onChange={handleChangeCheckbox}
																					inputProps={{
																						"aria-label": "controlled",
																					}}
																				/>
																				<Typography variant="h7">
																					なし
																				</Typography>
																			</div>
																			<div className="flex justify-center items-center">
																				<Checkbox
																					checked={data.habit_bit}
																					name="habit_bit"
																					onChange={handleChangeCheckbox}
																					inputProps={{
																						"aria-label": "controlled",
																					}}
																				/>
																				<Typography variant="h7">
																					少し
																				</Typography>
																			</div>
																			<div className="flex justify-center items-center">
																				<Checkbox
																					checked={data.habit_strong}
																					name="habit_strong"
																					onChange={handleChangeCheckbox}
																					inputProps={{
																						"aria-label": "controlled",
																					}}
																				/>
																				<Typography variant="h7">
																					強い
																				</Typography>
																			</div>
																		</div>
																	</div>
																	<div>
																		<div className="pl-2 pt-4 pb-2">
																			<Typography
																				variant="h7"
																				className="font-medium"
																			>
																				顔型
																			</Typography>
																		</div>
																		<div className="flex gap-x-12">
																			<div className="flex justify-center items-center">
																				<Checkbox
																					checked={data.face_type_round_shape}
																					name="face_type_round_shape"
																					onChange={handleChangeCheckbox}
																					inputProps={{
																						"aria-label": "controlled",
																					}}
																				/>
																				<Typography variant="h7">
																					丸型
																				</Typography>
																			</div>
																			<div className="flex justify-center items-center">
																				<Checkbox
																					checked={
																						data.face_type_inverted_triangle
																					}
																					name="face_type_inverted_triangle"
																					onChange={handleChangeCheckbox}
																					inputProps={{
																						"aria-label": "controlled",
																					}}
																				/>
																				<Typography variant="h7">
																					逆三角
																				</Typography>
																			</div>
																			<div className="flex justify-center items-center">
																				<Checkbox
																					checked={data.face_type_egg_shapped}
																					name="face_type_egg_shapped"
																					onChange={handleChangeCheckbox}
																					inputProps={{
																						"aria-label": "controlled",
																					}}
																				/>
																				<Typography variant="h7">
																					卵型
																				</Typography>
																			</div>
																			<div className="flex justify-center items-center">
																				<Checkbox
																					checked={data.face_type_base}
																					name="face_type_base"
																					onChange={handleChangeCheckbox}
																					inputProps={{
																						"aria-label": "controlled",
																					}}
																				/>
																				<Typography variant="h7">
																					ベース
																				</Typography>
																			</div>
																			<div className="flex justify-center items-center">
																				<Checkbox
																					checked={data.face_type_square}
																					name="face_type_square"
																					onChange={handleChangeCheckbox}
																					inputProps={{
																						"aria-label": "controlled",
																					}}
																				/>
																				<Typography variant="h7">
																					四角
																				</Typography>
																			</div>
																		</div>
																	</div>
																</Box>
															</div>
														</CardContent>
													</Card>
												</Box>
											</div>
											<div className="flex flex-col justify-center items-center w-full pb-8">
												<Box
													sx={{ flexGrow: 1 }}
													className="w-full max-w-5xl pt-12 mx-auto"
												>
													<AppBar position="static" className="rounded-t-lg">
														<Toolbar>
															{/* <IconButton
															size="large"
															edge="start"
															color="inherit"
															aria-label="menu"
															sx={{ mr: 2 }}
														> */}
															{/* <MenuIcon className="mr-6" /> */}
															{/* </IconButton> */}
															<Typography
																variant="h6"
																component="div"
																sx={{ flexGrow: 1 }}
															>
																スタイリング・アレンジポイント
															</Typography>
															{/* <Button color="inherit">Login</Button> */}
														</Toolbar>
													</AppBar>
													<Card className="flex justify-start pl-12 w-full">
														<CardContent className="rounded-tr-none">
															<div className="gap-x-16 pb-3 pt-4">
																<Box>
																	<div className="mb-2 mt-1">
																		ポイント 0/120文字
																	</div>
																	<FormGroup className="w-[40rem]">
																		<Form.Control
																			as="textarea"
																			rows={3}
																			className="w-full"
																			onChange={handleChangeTextarea}
																			name="styling_arrangement_point"
																			value={data.styling_arrangement_point}
																		/>
																	</FormGroup>
																</Box>
															</div>
														</CardContent>
													</Card>
												</Box>
											</div>
											<div className="flex justify-center mt-6 mb-24">
												<Box>
													<Button
														variant="contained"
														className="w-96 py-2"
														type="submit"
													>
														追加
													</Button>
												</Box>
											</div>
										</form>
									</div>
								</Tab>
								<Tab eventKey="profile" title="テンプレート">
									<StyleTemplate />
								</Tab>
							</Tabs>
						</div>
					</main>
				</div>
			</div>
		</>
	);
};

export default AddStyle;
