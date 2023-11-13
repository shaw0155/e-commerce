import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
export default function MyPagination(props) {
  const handleChange = (event, value) => {
    props.setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={props.count}
        page={props.page}
        onChange={handleChange}
        className="pagination"
      />
    </Stack>
  );
}
