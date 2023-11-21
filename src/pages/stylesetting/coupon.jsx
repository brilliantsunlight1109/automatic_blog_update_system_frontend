import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
//mui
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

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Coupon = () => {
	const navigate = useNavigate();
	const add_style = () => {
		navigate("/add-style");
	};
	const columns = [
		{ field: "id", headerName: "番号", type: "number", width: 50 },
		{
			field: "image",
			headerName: "画像",
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
		{ field: "style_name", headerName: "クーポン名", type: "text", width: 250 },
	];

	const rows = [
		{
			id: 1,
			image:
				"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format",
			style_name: "Jon",
			imageWidth: 100,
			imageHeight: 100,
		},
		{
			id: 2,
			image:
				"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format",
			style_name: "Jon",
			imageWidth: 100,
			imageHeight: 100,
		},
		{
			id: 3,
			image:
				"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format",
			style_name: "Jon",
			imageWidth: 100,
			imageHeight: 100,
		},
	];

	return (
		<>
			<div className="container-xl min-h-screen">
				<div className="flex flex-col justify-center items-center w-full">
					<div className="mt-8 flex justify-center items-center">
						<Button
							variant="contained"
							onClick={add_style}
							className="py-2 w-48"
						>
							同期する
						</Button>
						<Typography variant="h7" className="pl-12">
							最終同期 2023-11-13 10:41
						</Typography>
					</div>
					<div className="px-12 pt-10 w-3/7">
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
			</div>
		</>
	);
};

export default Coupon;
