import CircularProgress from "@mui/material/CircularProgress";

import {
  TableHead,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  TableRow,
  Paper,
} from "@mui/material";
import { getUserOrders } from "../../actions/chekcout_actions";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import OrderDetails from "./OrderDetails";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "paidAt",
    headerName: "Payment Date",
    width: 180,
    sortable: false,
  },
  {
    field: "method",
    headerName: "Method",
    width: 70,
    sortable: false,
  },
  {
    field: "price",
    headerName: "Price",
    sortable: false,
    width: 120,
  },
  {
    field: "status",
    headerName: "Status",
    sortable: false,
    width: 120,
  },
  {
    field: "details",
    headerName: "Details",
    sortable: false,
    width: 100,
  },
];

export default function AccountOrders() {
  const { isLoading, data: ordersData } = useQuery({
    queryKey: ["userOrders"],
    queryFn: getUserOrders,
  });
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState(null);

  // console.log(ordersData?.data);
  return (
    <>
      {isLoading ? (
        <div className="spinner-container">
          <CircularProgress />
        </div>
      ) : showDetails ? (
        <OrderDetails
          details={details}
          handleBack={() => setShowDetails(false)}
        />
      ) : (
        <div className="account-orders">
          <h2>Orders</h2>
          <div className="account-orders-table">
            <TableContainer component={Paper} sx={{ maxHeight: "100%" }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.width }}
                      >
                        <h4>{column.headerName} </h4>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ordersData.data.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <p>{row.id}</p>
                      </TableCell>
                      <TableCell>
                        <p>{row.paidAt}</p>
                      </TableCell>
                      <TableCell>
                        <p>{row.paymentMethodType}</p>
                      </TableCell>
                      <TableCell>
                        <p>${row.totalOrderPrice}</p>
                      </TableCell>
                      <TableCell>
                        {row.isPaid ? (
                          <h6 className="status status-green">Paid</h6>
                        ) : (
                          <h6 className="status status-red">Not Paid</h6>
                        )}
                        {row.isDelivered && (
                          <h6 className="status status-green">Delivered</h6>
                        )}
                      </TableCell>
                      <TableCell>
                        <button
                          onClick={() => {
                            setShowDetails(true);
                            setDetails(row);
                          }}
                          className="account-orders-table-btn"
                        >
                          Details
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )}
    </>
  );
}
