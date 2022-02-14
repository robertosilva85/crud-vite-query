import { useParams } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { Employee as ModelEmployee } from "../models/Employee";
import CurrencyFormat from "react-currency-format";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const Employee = () => {
  const { id } = useParams();

  const { data: employee, isFetching } = useQuery<ModelEmployee>(
    "employee",
    `/v1/employee/${id}`
  );

  return (
    <>
      {isFetching && <h1>Loading...</h1>}
      {!isFetching && !employee && <h1>Employee not found!</h1>}
      {employee && (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={employee.profile_image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {employee.employee_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <ul>
                <li>Age: {employee.employee_age}</li>
                <li>
                  Salary:{" "}
                  <CurrencyFormat
                    value={employee.employee_salary}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};
