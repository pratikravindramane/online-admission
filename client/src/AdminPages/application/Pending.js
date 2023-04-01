import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Layout from "../../utils/Layout";
import Paper from "@mui/material/Paper";
import { AppContext } from "../../context/application";
import { useNavigate } from "react-router-dom";

function Pending() {
  const [pending, setPending] = useState([
    { name: "random", course: "bscit", gender: "other", status: "pending" },
  ]);
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const application = await axios.get(
          "http://localhost:5000/admin/pending"
        );
        setPending(application.data);
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
  return (
    <Layout>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Course</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">10 Percentage</TableCell>
              <TableCell align="right">12 Percentage</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pending.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                  {row.mathMark && <p>Math = {row.mathMark}</p>}
                </TableCell>
                <TableCell align="right">{row.course}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.tenPer} %</TableCell>
                <TableCell align="right">{row.twelvePer} %</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right" id={row._id} onClick={viewHandler}>
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

export default Pending;
