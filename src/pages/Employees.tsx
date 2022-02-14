import { useQuery } from "../hooks/useQuery";
import CurrencyFormat from "react-currency-format";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Employee } from "../models/Employee";
import { Link } from "react-router-dom";

export const Employees = () => {
  const { data: employees, isFetching } = useQuery<Employee[]>(
    "employees",
    "/v1/employees"
  );
  return (
    <>
      {isFetching && <h1>Loading...</h1>}
      {!isFetching && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Salary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!employees && (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell colSpan={3}>Not found result</TableCell>
                </TableRow>
              )}
              {employees?.map((employee) => (
                <TableRow
                  key={employee.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Link to={`employee/${employee.id}`}>
                      {employee.employee_name}
                    </Link>
                  </TableCell>
                  <TableCell align="right">{employee.employee_age}</TableCell>
                  <TableCell align="right">
                    <CurrencyFormat
                      value={employee.employee_salary}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
