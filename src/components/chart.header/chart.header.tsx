"use client"
import { ChartHeaderTypes } from "./chart.header.types";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { changeChartDataAction } from '../../store/actions/chartAction'
import './chart.header.styles.css'


const ChartHeader: React.FC<ChartHeaderTypes> = (props) => {
    const dispatch = useDispatch();
    const date = useSelector((state: any) => state.chartData.date)
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: any) => {

        dispatch(changeChartDataAction(event.target.value))
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div className="flex justify-between items-center h-full">
            <div className="flex">
                
                <div>
                    <Button sx={{ display: 'block', mt: '9vh' }} onClick={handleOpen}>
                        <div className="flex items-center gap-[.5vw]">
                            <div>
                                <img src={"/images/dropdown-calendar.png"} />
                            </div>

                            <p className="text-[1rem]">
                                Starting date, {date}
                            </p>
                            <div>

                                <img src={"/images/dropdown-icon.png"} />
                            </div>

                        </div>
                    </Button>
                    <FormControl sx={{ m: 0, minWidth: 220 }} >

                        <Select

                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            label="Age"
                            onChange={handleChange}
                            MenuProps={{
                                PaperProps: {
                                    sx: {
                                        mt: '-4vw',        // Moves the dropdown menu down
                                        ml: 2,        // Moves the dropdown menu to the right
                                        minWidth: 220 // Ensures the dropdown has a minimum width
                                    }
                                }
                            }}
                        >

                            <MenuItem value={'Jan_2023'}>Jan ‘22, 2023</MenuItem>
                            <MenuItem value={'Jan_2024'}>Jan ‘22, 2024</MenuItem>
                            <MenuItem value={'Jan_2025'}>Jan ‘22, 2025</MenuItem>
                        </Select>

                    </FormControl>
                </div>

            </div>
            <div>

                <img src={"/images/header-left-content.png"} className="header-icons" />
            </div>
        </div>

    )
}

export default ChartHeader;