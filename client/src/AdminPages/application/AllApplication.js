import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Layout from "../../utils/Layout";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../../context/application";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

export default function AllApplication() {
  const [application, setApplication] = useState([
    { name: "random", course: "bscit", gender: "other", status: "pending" },
  ]);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const { dispatch } = useContext(AppContext);
  useEffect(() => {
    const fetch = async () => {
      try {
        const application = await axios.get(
          "http://localhost:5000/admin/all-application"
        );
        setApplication(application.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);
  const viewHandler = (e) => {
    try {
      dispatch({ type: "SAVE_ID", payload: e.target.id });
      navigate("/view-app");
      // console.log(e.target.id);
      // console.log(id);
    } catch (error) {
      console.log(error.message);
    }
  };
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <Layout>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Course</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">10 Percentage</TableCell>
              <TableCell align="left">12 Percentage</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {application.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">
                  {row.course}
                  {row.mathMark && <p>Math = {row.mathMark}</p>}
                </TableCell>
                <TableCell align="left">{row.gender}</TableCell>
                <TableCell align="left">{row.tenPer} %</TableCell>
                <TableCell align="left">{row.twelvePer} %</TableCell>
                <TableCell align="left">{row.status}</TableCell>
                <TableCell align="left" id={row._id} onClick={viewHandler}>
                  Edit
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}
