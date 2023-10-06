import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Sidebar from './Sidebar';
import { TableRow } from '@mui/material';
import { Chart } from "react-google-charts";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';



function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


function Dashboard() {
    // const theme = useTheme();
    const data = [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2018", 1000, 400, 200],
        ["2019", 1170, 460, 250],
        ["2020", 660, 1120, 300],
        ["2021", 1030, 540, 350],
    ];

    const options = {
        chart: {
            title: "Company Performance",
            subtitle: "Sales, Expenses, and Profit: 2018-2021",
        },
    };

    return (
        <>
            <Sidebar>
                <TableRow style={{ display: "flex", gap: "40px", marginTop: "70px",height:"150px" }}>
                    <Card sx={{ display: 'flex', backgroundColor: "lightgreen" }}>
                        <Box style={{ width: "250px" }}>
                            <h3 style={{ textAlign: "center",marginTop:"40px"}}> EMPLOYEE<br/>1200</h3>
                            
                        </Box>
                    </Card>
                    <Card sx={{ display: 'flex', backgroundColor: "yellow" }}>
                        <Box style={{ width: "250px" }}>
                            <h3 style={{ textAlign: "center",marginTop:"40px" }}> SALARY<br/>800000</h3>
                        </Box>
                    </Card>
                    <Card sx={{ display: 'flex', backgroundColor: "aqua" }}>
                        <Box style={{ width: "250px" }}>
                            <h3 style={{ textAlign: "center",marginTop:"40px" }}> REVENUE<br/>800000</h3>
                        </Box>
                    </Card>
                    <Card sx={{ display: 'flex', backgroundColor: "pink" }}>
                        <Box style={{ width: "250px" }}>
                            <h3 style={{ textAlign: "center",marginTop:"40px" }}> SALES<br/>45812</h3>
                        </Box>
                    </Card>
                </TableRow>
            </Sidebar>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ marginLeft: '130px' }}> <Chart chartType="Bar" width="500px" height="300px" data={data} options={options} /></div>
                <div><TableContainer component={Paper}>
                    <Table sx={{ minWidth: "400px" }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer></div>
            </div>
        </>
    )
}

export default Dashboard