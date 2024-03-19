import {
  Button,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

const ReminderCard = () => {
  const rows = [
    createData(
      "Urgent Safety Recall",
      "06/04/2022",
      "08/04/2022",
      "David Demo",
      "Completed"
    ),
    createData(
      "Urgent Safety Recall",
      "06/04/2022",
      "08/04/2022",
      "David Demo",
      "Completed"
    ),
    createData(
      "Urgent Safety Recall",
      "06/04/2022",
      "08/04/2022",
      "David Demo",
      "Completed"
    ),
  ];

  function createData(
    name: string,
    due: string,
    overdue: string,
    notify: string,
    status: string
  ) {
    return { name, due, overdue, notify, status };
  }

  return (
    <div>
      <TableContainer
        component={Paper}
        sx={{ borderRadius: 5, boxShadow: "none" }}
        className="px-5 py-4"
      >
        <div className="flex items-center justify-between mb-5">
          <Typography
            sx={{ fontSize: 20, color: "#00000", fontWeight: "bold" }}
          >
            Reminder
          </Typography>
          <Button variant="contained" sx={{ background: "#A162F7" }}>
            + Add New
          </Button>
        </div>
        <Divider />
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ fontSize: 15, color: "#72767C", fontWeight: "500" }}
              >
                Description
              </TableCell>
              <TableCell
                sx={{ fontSize: 15, color: "#72767C", fontWeight: "500" }}
                align="right"
              >
                Due
              </TableCell>
              <TableCell
                sx={{ fontSize: 15, color: "#72767C", fontWeight: "500" }}
                align="right"
              >
                Overdue
              </TableCell>
              <TableCell
                sx={{ fontSize: 15, color: "#72767C", fontWeight: "500" }}
                align="right"
              >
                Notify
              </TableCell>
              <TableCell
                sx={{ fontSize: 15, color: "#72767C", fontWeight: "500" }}
                align="right"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{ fontSize: 15, color: "#00000", fontWeight: "500" }}
                  align="right"
                >
                  {row.due}
                </TableCell>
                <TableCell
                  sx={{ fontSize: 15, color: "#00000", fontWeight: "500" }}
                  align="right"
                >
                  {row.overdue}
                </TableCell>
                <TableCell
                  sx={{ fontSize: 15, color: "#00000", fontWeight: "500" }}
                  align="right"
                >
                  {row.notify}
                </TableCell>
                <TableCell
                  sx={{ fontSize: 15, color: "#00000", fontWeight: "500" }}
                  align="right"
                >
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ReminderCard;
