import React from "react";

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

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
//Radio Group
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
//checkbox
import Checkbox from "@mui/material/Checkbox";
//datagrid
import { DataGrid } from "@mui/x-data-grid";

const History = () => {
	const [history, setHistory] = useState([]);
	const [data, setData] = useState({
		type: "",
		date: "",
		content: "",
	});

	const handleChangeTextarea = (e) => {
		setData((data) => ({ ...data, [e.target.name]: e.target.value }));
	};

	//sync_date
	const handleChangeSyncDate = (e) => {
		setData((data) => ({ ...data, [e.target.name]: e.target.value }));
	};

	//select
	const handleChangeSelect = (e) => {
		setData((data) => ({ ...data, [e.target.name]: e.target.value }));
	};

	const [state, setState] = useState({
		gilad: false,
		jason: false,
		antoine: false,
		a: false,
		b: false,
		c: false,
		d: false,
		e: false,
		f: false,
		g: false,
		h: false,
		i: false,
		j: false,
		k: false,
		l: false,
		m: false,
		n: false,
	});

	const handleChange = (event) => {
		setState({
			...state,
			[event.target.name]: event.target.checked,
		});
	};

	const handleChange_select = (event) => {
		setAge(event.target.value);
	};
	//

	//select
	const [age, setAge] = useState("");

	return (
		<>
			<div className="container-xl flex justify-center">
				<div className="mt-6 max-w-3xl">
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<Typography> 同期履歴フィルター</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								<div className="px-6">
									<div>
										<FormControl component="fieldset" variant="standard">
											{/* <FormLabel component="legend">
																			Assign responsibility
																		</FormLabel> */}

											<FormGroup>
												<div className="flex pt-3 align-middle">
													<div><Typography></Typography></div>
													<div>
														<FormControl className="w-48">
															<InputLabel
																id="demo-simple-select-label"
																className="w-44"
															>
																type
															</InputLabel>
															<Select
																labelId="demo-simple-select-label"
																id="demo-simple-select"
																value={data.type}
																label="type"
																name="type"
																onChange={handleChangeSelect}
																className="w-44"
															>
																<MenuItem value={"全て"}>全て</MenuItem>
																<MenuItem value={"Style"}>Style</MenuItem>
																<MenuItem value={"Blog"}>Blog</MenuItem>
															</Select>
														</FormControl>
													</div>
												</div>
												<div className="flex pt-3 align-middle">
													<FormControlLabel
														control={
															<Switch
																checked={state.b}
																onChange={handleChange}
																name="b"
															/>
														}
														label="type"
														className="pr-14 mr-0 mb-0"
													/>
													<FormControl className="w-48">
														<InputLabel
															id="demo-simple-select-label"
															className="w-44"
														>
															type
														</InputLabel>
														<Select
															labelId="demo-simple-select-label"
															id="demo-simple-select"
															value={data.type}
															label="type"
															name="type"
															onChange={handleChangeSelect}
															className="w-44"
														>
															<MenuItem value={"全て"}>全て</MenuItem>
															<MenuItem value={"Style"}>Style</MenuItem>
															<MenuItem value={"Blog"}>Blog</MenuItem>
														</Select>
													</FormControl>
												</div>
												<div>
													<FormControlLabel
														control={
															<Switch
																checked={state.gilad}
																onChange={handleChange}
																name="gilad"
															/>
														}
														label="更新停止"
														className="pr-10"
													/>
													<FormControlLabel
														control={
															<Switch
																checked={state.jason}
																onChange={handleChange}
																name="jason"
															/>
														}
														label="削除"
													/>
												</div>
												<div>
													<FormControlLabel
														control={
															<Switch
																checked={state.antoine}
																onChange={handleChange}
																name="antoine"
															/>
														}
														label="同期期間"
													/>
												</div>
												<div className="flex flex-row pl-12 pb-2">
													<input
														type="date"
														className="block mr-6 w-44 rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
													/>
													<input
														type="date"
														className="block w-44 rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
													/>
												</div>
												<div className="flex pt-2">
													<FormControlLabel
														control={
															<Switch
																checked={state.a}
																onChange={handleChange}
																name="a"
															/>
														}
														label="同期開始時間"
														className="mr-0 mb-0"
													/>
													<input
														type="time"
														className="ml-6 block w-44 rounded-md border-0 px-3 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"
													/>
												</div>

												<div className="flex pt-3 align-middle">
													<FormControlLabel
														control={
															<Switch
																checked={state.c}
																onChange={handleChange}
																name="c"
															/>
														}
														label="スタイリスト"
														className="pr-6 mr-0 mb-0"
													/>
													<FormControl className="w-48">
														<InputLabel
															id="demo-simple-select-label"
															className="w-44"
														>
															スタイリスト
														</InputLabel>
														<Select
															labelId="demo-simple-select-label"
															id="demo-simple-select"
															value={age}
															label="スタイリスト"
															onChange={handleChange_select}
															className="w-44"
														>
															<MenuItem value={10}>指定なし</MenuItem>
															<MenuItem value={20}>TATSUYA</MenuItem>
															<MenuItem value={30}>TAKUMI</MenuItem>
															<MenuItem value={30}>GOTA</MenuItem>
															<MenuItem value={30}>NAOKI</MenuItem>
															<MenuItem value={30}>GO 立川</MenuItem>
														</Select>
													</FormControl>
												</div>
												<div className="flex pt-3">
													<FormControlLabel
														control={
															<Switch
																checked={state.d}
																onChange={handleChange}
																name="d"
															/>
														}
														label="スタイル名"
														className="pr-10 mr-0 mb-0"
													/>
													<TextField
														id="outlined-basic"
														label="スタイル名"
														variant="outlined"
														className="w-44"
													/>
												</div>
												<div className="flex pt-3 align-middle">
													<FormControlLabel
														control={
															<Switch
																checked={state.e}
																onChange={handleChange}
																name="e"
															/>
														}
														label="MODE"
														className="pr-16 mr-0 mb-0"
													/>
													<FormControl className="w-48 ml-2">
														<InputLabel
															id="demo-simple-select-label"
															className="w-44"
														>
															MODE
														</InputLabel>
														<Select
															labelId="demo-simple-select-label"
															id="demo-simple-select"
															value={age}
															label="MODE"
															onChange={handleChange_select}
															className="w-44"
														>
															<MenuItem value={10}>ADD</MenuItem>
															<MenuItem value={20}>DEL</MenuItem>
														</Select>
													</FormControl>
												</div>
												<div className="flex justify-center items-center pt-8 pb-8">
													<Button variant="contained" className="px-5 py">
														更新
													</Button>
												</div>
											</FormGroup>
											{/* <FormHelperText>Be careful</FormHelperText> */}
										</FormControl>
									</div>
								</div>
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
		</>
	);
};

export default History;
