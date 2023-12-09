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
//datagrid
import { DataGrid } from "@mui/x-data-grid";

const StyleTemplate = () => {
	const columns = [
		{ field: "id", headerName: "番号", type: "number", width: 50 },
		{
			field: "template_name",
			headerName: "テンプレート名",
			type: "text",
			width: 200,
		},
		{ field: "style_name", headerName: "スタイル名", type: "text", width: 200 },
		{
			field: "category",
			headerName: "カテゴリ",
			type: "text",
			width: 200,
		},
		{
			field: "length",
			headerName: "長さ",
			type: "text",
			width: 200,
		},
		{
			field: "color",
			headerName: "カラー",
			type: "text",
			width: 200,
		},
		{
			field: "image",
			headerName: "写真",
			width: 200,
			renderCell: (params) => (
				<img
					src={params.row.image}
					alt=""
					width={params.row.imageWidth}
					height={params.row.imageHeight}
				/>
			),
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
			template_name: "asd",
			style_name: "Jon",
			category: "ds",
			length: "ad",
			color: "d",
			image:
				"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format",
			imageWidth: 100,
			imageHeight: 100,
		},
	];
	//add_template
	const navigate = useNavigate();
	const addStyleTemplate = () => {
		navigate("/add-style-template");
	};

	return (
		<>
			<div className="container-xl min-h-screen">
				<div className="flex justify-center items-center mt-12">
					<Box>
						<Button
							variant="contained"
							className="w-72 py-2"
							onClick={addStyleTemplate}
						>
							新規テンプレート
						</Button>
					</Box>
				</div>
				<div className="px-12 pt-16">
					<div style={{ height: "100%", width: "100%" }}>
						<DataGrid
							rows={rows}
							columns={columns}
							initialState={{
								pagination: {
									paginationModel: { page: 0, pageSize: 10 },
								},
							}}
							pageSizeOptions={[5, 10, 20, 30]}
							checkboxSelection
							rowHeight={120}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default StyleTemplate;
