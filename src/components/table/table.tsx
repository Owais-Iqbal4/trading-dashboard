import React from "react";
import { TableTypes } from "./table.types";
import './table.styles.css'


const Table: React.FC<TableTypes> = (props) => {
    let tableData = [1, 2, 3, 4, 5]
    return (
        <div style={{ width: '100%', height: '100%', overflowX: 'scroll' }} >
            <div className="min-w-[500px]">

                <div className="searchContainer">
                    <div className="input-div" style={{ width: '40%' }}>
                        <input type="text" placeholder="Search entries" className="search-input" />
                    </div>
                    <div className="input-div" >
                        <input type="text" placeholder="Select cell to see the value" className="search-input" />
                    </div>
                </div>
                <table className="min-w-[500px]">
                    <thead>

                        <tr>
                            <th style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '.5vw' }}>
                                <input type="checkbox" id="checkbox" />
                                <label for="checkbox"></label>
                            </th>
                            <th style={{ width: '26%' }}>
                                <div >
                                    <p>Entry description</p>
                                    <img src={"/images/th-img.png"} />
                                </div>
                            </th>
                            <th>
                                <div >
                                    <img src={"/images/th-img.png"} />
                                    <p> Amount (PKR)</p>
                                    <img src={"/images/table-eye.png"} />


                                </div>
                            </th>
                            <th>
                                <div >
                                    <img src={"/images/th-img.png"} />
                                    <p>Cost/Rev</p>
                                    <img src={"/images/table-eye.png"} />

                                </div>
                            </th>
                            <th>
                                <div >
                                    <img src={"/images/th-img.png"} />
                                    <p>Frequency </p>
                                    <img src={"/images/table-eye.png"} />

                                </div>
                            </th>
                            <th>
                                <div >
                                    <img src={"/images/th-img.png"} />
                                    <p>Applicable date</p>
                                    <img src={"/images/table-eye.png"} />

                                </div>
                            </th>
                            <th>
                                <div >
                                    <img src={"/images/th-img.png"} />
                                    <p>Action</p>
                                    <img src={"/images/table-eye.png"} />

                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            tableData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '.5vw' }}>
                                            <input type="checkbox" id={`checkbox-${index}`} />
                                            <label for={`checkbox-${index}`}></label>
                                        </td>
                                        <td style={{ width: '26%' }}>
                                            <div >
                                                <p>Starting Cash balance</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="justify-center">

                                                <p>50,5654.00</p>
                                                <img src={"/images/eye-open.png"} />


                                            </div>
                                        </td>
                                        <td>
                                            <div className="justify-center">

                                                <p>Cost</p>
                                                <img src={"/images/arrow-up-down.png"} />

                                            </div>
                                        </td>
                                        <td>
                                            <div className="justify-center">

                                                <p>Monthly </p>
                                                <img src={"/images/arrow-up-down.png"} />

                                            </div>
                                        </td>
                                        <td>
                                            <div className="justify-center">

                                                <p>Jan ‘22, 2023</p>
                                                <img src={"/images/calendar.png"} />

                                            </div>
                                        </td>
                                        <td>
                                            <div className="justify-center">
                                                <img src={"/images/delete.png"} />
                                            </div>
                                        </td>
                                    </tr>

                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table