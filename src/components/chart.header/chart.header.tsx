"use client"
import { ChartHeaderTypes } from "./chart.header.types";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
const ChartHeader: React.FC<ChartHeaderTypes> = (props) => {
    const [age, setAge] = React.useState<string | number>('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: SelectChangeEvent<typeof age>) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div className="flex justify-between items-center h-full">
            <div className="">
                <Button sx={{ display: 'block', mt: '9vh' }} onClick={handleOpen}>
                    <div className="flex items-center gap-[.5vw]">
                        <div>
                            <img src={"/images/dropdown-calendar.png"} />
                        </div>

                        <p className="text-[1vw]">
                            Starting date, Jan ‘22, 2023
                        </p>
                        <div>

                            <img src={"/images/dropdown-icon.png"} />
                        </div>

                    </div>
                </Button>
                <FormControl sx={{ m: 0, minWidth: 120 }} >

                    <Select

                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={age}
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

                        <MenuItem value={10}>Jan ‘22, 2023</MenuItem>
                        <MenuItem value={20}>Jan ‘22, 2024</MenuItem>
                        <MenuItem value={30}>Jan ‘22, 2025</MenuItem>
                    </Select>

                </FormControl>
            </div>
            <div>

                <img src={"/images/header-left-content.png"} />
            </div>
        </div>

    )
}

export default ChartHeader;