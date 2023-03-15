import { useState } from "react";

import { tableRows } from "../../shared/constants";
import { download } from "../../shared/assets";

import {
  CloudDownloadOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TableSortLabel,
} from "@mui/material";

const headCells = [
  { id: "invoice", label: "Invoice" },
  { id: "amount", label: "Amount" },
  { id: "date", label: "Date" },
  { id: "status", label: "Status" },
  { id: "usersOnPlan", label: "Users on plan" },
];

function EnhancedTableHead({ order, orderBy, onRequestSort }) {
  const createSortHandler = (property) => (event) => {
    onRequestSort(property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span>
                  {order === "desc" ? (
                    <KeyboardArrowUp />
                  ) : (
                    <KeyboardArrowDown />
                  )}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="left"></TableCell>
      </TableRow>
    </TableHead>
  );
}
export default function BillTable() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("invoice");

  const sortData = (tableData, order, orderBy) => {
    const sortedTableData = [...tableData].sort((a, b) => {
      const propertyA = a[orderBy];
      const propertyB = b[orderBy];
      if (order === "asc") {
        return propertyA > propertyB ? 1 : -1;
      } else {
        return propertyA < propertyB ? 1 : -1;
      }
    });
    return sortedTableData;
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedData = sortData(tableRows, order, orderBy);

  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <h3 className="text-[20px] font-medium">Billing History</h3>
        <Button
          variant="outlined"
          startIcon={<CloudDownloadOutlined />}
          sx={{
            color: "#344054",
            borderColor: "#344054",
            width: "200px",
          }}
        >
          Download All
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 605 }}>
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {sortedData.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.invoice}
                </TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  {row.status === true ? (
                    <>
                      <span className="bg-green-100 text-green-500 w-[70px] items-center  px-[0.4rem] py-1 gap-1 flex flex-row rounded-xl  ">
                        <b>✔</b> Paid
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="bg-red-300 text-red-600 ">Not Paid</span>
                    </>
                  )}
                </TableCell>
                <TableCell align="left">
                  <img src={row.usersOnPlan} alt="user plans" />
                </TableCell>
                <TableCell align="left">
                  <img
                    src={download}
                    alt="download"
                    className="cursor-pointer"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
