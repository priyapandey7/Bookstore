import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h4">BOOK  STORE</Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "skyblue" }}
          variant="contained"
        >
          <Typography variant="h4">View All Books</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;