import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
export default function MyPagination() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} className="pagination"/>
    </Stack>
  );
}
