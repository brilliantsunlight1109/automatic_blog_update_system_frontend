import React from "react";
import Stylenav from "../Stylenav";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

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

const AddBlog = () => {
	const [key, setKey] = useState("post");

	const [state, setState] = useState({
		gilad: false,
		jason: false,
		antoine: true,
	});
	const [age, setAge] = useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const handleChange_select = (event) => {
		setAge(event.target.value);
	};

	const handleChange_checked = (event) => {
		setState({
			...state,
			[event.target.name]: event.target.checked,
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
								ブログ
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
								<Tab eventKey="post" title="投稿予定一覧">
									<div>
										<div className="container-xl m-auto">
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
																AI生成
															</Typography>
															{/* <Button color="inherit">Login</Button> */}
														</Toolbar>
													</AppBar>
													<Card className="flex justify-center w-full">
														<CardContent className="rounded-tr-none">
															<div>
																<div className="pt-6">
																	<div className="pb-2">
																		<Typography variant="h7">
																			今月の生成数 19/100
																		</Typography>
																	</div>
																	<div className="pl-2">
																		<Typography
																			variant="body2"
																			className="text-slate-500"
																		>
																			※月の生成数はブログと口コミで共通です
																		</Typography>
																	</div>
																</div>
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
															</div>
														</CardContent>
													</Card>
												</Box>
											</div>
											<div className="mt-24 flex justify-center gap-x-14">
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
											</div>
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
																基本設定
															</Typography>
															{/* <Button color="inherit">Login</Button> */}
														</Toolbar>
													</AppBar>
													<Card className="flex justify-start w-full">
														<CardContent className="rounded-tr-none">
															<div className="flex justify-start pl-20 pb-3 pt-3 w-full flex-col">
																<Box>
																	<div className="mt-3 mb-3">投稿日時</div>
																	<div className="flex flex-row pb-2">
																		<input
																			type="date"
																			className="block mr-6 w-44 rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
																		/>
																	</div>
																</Box>
																<Box>
																	<div className="mt-3 mb-3">投稿者</div>
																	<div>
																		<FormControl className="w-ull">
																			<InputLabel
																				id="demo-simple-select-label"
																				className="w-72"
																			>
																				選択してください
																			</InputLabel>
																			<Select
																				labelId="demo-simple-select-label"
																				id="demo-simple-select"
																				value={age}
																				label="選択してください"
																				onChange={handleChange_select}
																				className="w-56"
																			>
																				<MenuItem value={10}>TATSUYA</MenuItem>
																				<MenuItem value={20}>TAKUMI</MenuItem>
																				<MenuItem value={30}>GOTA</MenuItem>
																				<MenuItem value={40}>NAOKI</MenuItem>
																				<MenuItem value={50}>GO 立川</MenuItem>
																			</Select>
																		</FormControl>
																	</div>
																</Box>

																<Box>
																	<div className="mt-3 mb-3">カテゴリ</div>
																	<div>
																		<FormControl className="w-ull">
																			<InputLabel
																				id="demo-simple-select-label"
																				className="w-72"
																			>
																				選択してください
																			</InputLabel>
																			<Select
																				labelId="demo-simple-select-label"
																				id="demo-simple-select"
																				value={age}
																				label="選択してください"
																				onChange={handleChange_select}
																				className="w-56"
																			>
																				<MenuItem value={10}>
																					おすすめスタイル
																				</MenuItem>
																				<MenuItem value={20}>
																					サロンのNEWS
																				</MenuItem>
																				<MenuItem value={30}>
																					おすすめメニュー
																				</MenuItem>
																			</Select>
																		</FormControl>
																	</div>
																</Box>
																<Box
																	sx={{ minWidth: 300 }}
																	className="pb-6 pt-4"
																>
																	<Typography className="pb-3">
																		タイトル ※25文字
																	</Typography>
																	<FormControl className="w-full">
																		<TextField
																			id="outlined-basic"
																			label="タイトル ※25文字"
																			variant="outlined"
																		/>
																	</FormControl>
																</Box>
																<Box sx={{ minWidth: 300 }} className="pb-6">
																	<Typography className="pb-3">
																		クーポン
																	</Typography>
																	<FormControl className="w-full">
																		<InputLabel id="demo-simple-select-label">
																			なし
																		</InputLabel>
																		<Select
																			labelId="demo-simple-select-label"
																			id="demo-simple-select"
																			value={age}
																			label="なし"
																			onChange={handleChange}
																		>
																			<MenuItem value={10}>なし</MenuItem>
																			<MenuItem value={20}>
																				平日限定【メンズ】カット¥4000[メンズカット/メンズ/フェード/立川]
																			</MenuItem>
																			<MenuItem value={30}>
																				平日限定【メンズ】カット+クイックスパ¥5000
																				[メンズカット/立川/眉毛]
																			</MenuItem>
																			<MenuItem value={40}>
																				平日限定【メンズ】カット+ニュアンスパーマ¥10000[メンズ/フェード/立川]
																			</MenuItem>
																			<MenuItem value={50}>
																				平日限定【メンズ】カット+ツイストスパイラルパーマ¥11500[メンズ/立川]
																			</MenuItem>
																			<MenuItem value={60}>
																				平日限定【メンズ】カット+波巻きスパイラルパーマ¥12500[メンズ/眉毛/立川]
																			</MenuItem>
																			<MenuItem value={70}>
																				平日限定【メンズ】カット+カラー¥10000[メンズカット/フェード/立川/眉毛]
																			</MenuItem>
																			<MenuItem value={80}>
																				【メンズ】カット¥4500[メンズカット/センターパート/立川]
																			</MenuItem>
																			<MenuItem value={90}>
																				【メンズ】刈り上げメンテナンスカット¥2500【メンズ/立川】
																			</MenuItem>
																			<MenuItem value={100}>
																				【メンズ】カット+眉毛カット¥5500[メンズカット//立川/眉毛]
																			</MenuItem>
																			<MenuItem value={110}>
																				【メンズ】カット+ニュアンスパーマ¥10500[メンズパーマ/フェード/立川]
																			</MenuItem>
																			<MenuItem value={120}>
																				【メンズ】カット+ツイストスパイラルパーマ¥12500[メンズ/ツイストパーマ]
																			</MenuItem>
																			<MenuItem value={130}>
																				【メンズ】カット+波巻きスパイラルパーマ¥13500[メンズ/メンズパーマ/立川]
																			</MenuItem>
																			<MenuItem value={140}>
																				期間限定 学割U24【メンズ】
																				カット+眉毛カット¥3800[メンズ/立川]
																			</MenuItem>
																			<MenuItem value={150}>
																				学割U24【メンズ】カット¥3800[メンズカット/メンズ/フェード/立川]
																			</MenuItem>
																			<MenuItem value={160}>
																				【メンズ】カット+炭酸ヘッドスパ¥6000[メンズカット/センターパート/立川]
																			</MenuItem>
																			<MenuItem value={170}>
																				学割U24【メンズ】カット+ニュアンスパーマ¥9500[メンズカット/フェード]
																			</MenuItem>
																			<MenuItem value={180}>
																				【メンズ】カット+ポイントパーマ¥9500[メンズパーマ/センターパート/立川]
																			</MenuItem>
																			<MenuItem value={190}>
																				【メンズ】カット+ニュアンスパーマ+トリートメント¥12000[メンズ/立川]
																			</MenuItem>
																			<MenuItem value={200}>
																				【TAKUMI指名】U24カット+ツイストスパイラルパーマor波巻パーマ+眉カット
																			</MenuItem>
																			<MenuItem value={210}>
																				【メンズ】カット+ツイストスパイラル+トリートメント¥14000[メンズ/立川]
																			</MenuItem>
																			<MenuItem value={220}>
																				【メンズ】カット+波巻きスパイラルパーマ+トリートメント¥15000[立川/眉毛]
																			</MenuItem>
																			<MenuItem value={230}>
																				【GOTA指名】カット+ケアパーマ
																				¥1,2000(立川/ケアパーマ/ブリーチパーマ)
																			</MenuItem>
																			<MenuItem value={240}>
																				【メンズ】カット+ダウンパーマ¥10500[メンズパーマ/センターパート/立川]
																			</MenuItem>
																			<MenuItem value={250}>
																				【メンズ】カット+縮毛ストレート+トリートメント¥17300[メンズ/立川/眉毛]
																			</MenuItem>
																			<MenuItem value={260}>
																				【メンズ】ワンカラー¥6000[メンズパーマ/ツイストスパイラルパーマ/立川]
																			</MenuItem>
																			<MenuItem value={270}>
																				【メンズ】ダブルカラー¥13000[メンズパーマ/ツイストスパイラルパーマ/立川]
																			</MenuItem>
																			<MenuItem value={280}>
																				【メンズ】ダブルカラー+トリートメント¥15500[メンズパーマ/フェード/立川]
																			</MenuItem>
																			<MenuItem value={290}>
																				【メンズ】メッシュキャップハイライト¥13000~[メンズカット/フェード/立川]
																			</MenuItem>
																			<MenuItem value={300}>
																				【メンズ】カット+カラー¥10500[メンズカット/ツイストパーマ/フェード/立川]
																			</MenuItem>
																			<MenuItem value={310}>
																				学割U24
																				【メンズ】カット+カラー¥9500[メンズカット/フェード/立川/眉毛]
																			</MenuItem>
																			<MenuItem value={320}>
																				【メンズ】カット+カラー+パーマ¥16000[メンズカット/立川/眉毛]
																			</MenuItem>
																			<MenuItem value={330}>
																				【メンズ】カット+ダブルカラー+トリートメント¥18300[メンズカット/立川]
																			</MenuItem>
																			<MenuItem value={340}>
																				【メンズ】カット+メッシュキャップ+トリートメント¥17800[メンズ/眉毛/立川]
																			</MenuItem>
																			<MenuItem value={350}>
																				【メンズ】トリートメント¥2500~[メンズ/メンズパーマ/センターパート/立川]
																			</MenuItem>
																			<MenuItem value={360}>
																				【2回目限定】平日限定カット￥4000
																				[メンズパーマ/センターパート/立川]
																			</MenuItem>
																			<MenuItem value={370}>
																				【2回目の方限定】カット+眉毛カット5500
																				/メンズパーマ/眉毛/立川]
																			</MenuItem>
																			<MenuItem value={380}>
																				【2回目の方限定】カット￥4500
																				[メンズサロン/メンズパーマ/立川]
																			</MenuItem>
																			<MenuItem value={390}>
																				【TAKUMI】U24
																				2回目カット+ツイストスパイラルor波巻パーマ+眉カット
																			</MenuItem>
																			<MenuItem value={400}>
																				【2回目の方限定】カット+ヘッドスパ￥6000
																				[メンズパーマ/眉毛/立川]
																			</MenuItem>
																			<MenuItem value={410}>
																				【2回目の方限定】カット+ニュアンスパーマ￥10500
																				[メンズカット/立川]
																			</MenuItem>
																			<MenuItem value={420}>
																				2回目の方限定】カット+ツイストスパイラルパーマ￥12500
																				[立川]
																			</MenuItem>
																			<MenuItem value={430}>
																				【2回目の方限定】カット+波巻きスパイラルパーマ￥13500[立川]
																			</MenuItem>
																			<MenuItem value={440}>
																				【GOTA指名】2回目
																				カット+ケアパーマ(立川/ケアパーマ/ブリーチパーマ)
																			</MenuItem>
																			<MenuItem value={450}>
																				【2回目の方限定】カット+カラー￥10500
																				[立川/眉毛/メンズカット]
																			</MenuItem>
																			<MenuItem value={460}>
																				【2回目の方限定】カット+ダブルカラー+トリートメント￥18,300[立川]
																			</MenuItem>
																		</Select>
																	</FormControl>
																</Box>
																<Box sx={{ minWidth: 300 }} className="pb-6">
																	<Typography className="pb-3">署名</Typography>
																	<FormControl className="w-full">
																		<InputLabel id="demo-simple-select-label">
																			なし
																		</InputLabel>
																		<Select
																			labelId="demo-simple-select-label"
																			id="demo-simple-select"
																			value={age}
																			label="なし"
																			onChange={handleChange}
																		>
																			<MenuItem value={10}>なし</MenuItem>
																		</Select>
																	</FormControl>
																</Box>
																<Box>
																	<Typography
																		variant="body2"
																		className="ml-3 mb-3 text-slate-500 "
																	>
																		※前回の同期で追加したスタイルを削除してから追加を行うモードです
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
																本文
															</Typography>
															{/* <Button color="inherit">Login</Button> */}
														</Toolbar>
													</AppBar>
													<Card className="flex justify-start w-full">
														<CardContent className="rounded-tr-none">
															<div>
																<Box className="pl-24 pt-12">
																	<Button
																		component="label"
																		variant="contained"
																		startIcon={<CloudUploadIcon />}
																		className="py-2 px-8"
																	>
																		画像をアップロード
																		<VisuallyHiddenInput type="file" />
																	</Button>
																</Box>
																<Box>
																	<FormGroup className="w-[55rem] pl-24 pt-8 pb-4">
																		<Form.Control
																			as="textarea"
																			rows={15}
																			className="w-full"
																		/>
																	</FormGroup>
																</Box>
															</div>
														</CardContent>
													</Card>
												</Box>
											</div>
										</div>
										<div className="flex justify-center items-center mt-8 mb-12">
											<Box>
												<Button variant="contained" className="pt-3 pb-3 w-72">
													追加
												</Button>
											</Box>
										</div>
									</div>
								</Tab>
								<Tab eventKey="ai" title="AI生成設定">
									a
								</Tab>
								<Tab eventKey="sign" title="署名">
									a
								</Tab>
							</Tabs>
						</div>
					</main>
				</div>
			</div>
		</>
	);
};

export default AddBlog;
