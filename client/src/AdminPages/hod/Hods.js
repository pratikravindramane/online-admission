import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Layout from "../../utils/Layout";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function Hod() {
  const [hod, setHod] = useState([{ name: "random", email: "random" }]);
  const [error, setError] = useState();
  useEffect(() => {
    const fetch = async () => {
      try {
        const hods = await axios.get("http://localhost:5000/admin/hod");
        setHod(hods.data);
        // console.log(hods.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [hod]);

  const deleteHandler = async (e) => {
    try {
      const deleteHod = await axios.delete(
        `http://localhost:5000/admin/hod/${e.target.id}`
      );
      if (deleteHod.data.error) {
        setError(deleteHod.data.error);
      }
      alert("Deleted Successfully");
      console.log(deleteHod);
    } catch (error) {
      console.log(error.message);
    }
  };
  if (error) {
    alert(error);
  }
  return (
    <Layout>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">name</TableCell>
              <TableCell align="right">email</TableCell>
              <TableCell align="right">action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hod &&
              hod.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right" id={row._id} onClick={deleteHandler}>
                    Delete
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}
