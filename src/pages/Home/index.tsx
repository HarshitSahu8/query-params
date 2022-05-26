import { Box, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Otp from "../../components/Otp";
const Home = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ mode: "all" });
  const onSubmit = (data: any) => console.log(data);
  return (
    <div>
      <Link to="/main">Main</Link>
      <Link to="/summary">Summary</Link>
      <Link to="/FileUpload">FileUpload</Link>
      <Link to="/CheckBox">checkbox</Link>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h2>Verification Code</h2>
            <h3>Enter Verification Code here</h3>
            <Otp
              name={"otp"}
              focus
              errors={errors}
              // inputField={6}
              placeholder={"1234"}
              // separator={<span> </span>}
              rules={{
                minLength: {
                  value: 4,
                  message: "Please enter 4 digits",
                },
              }}
              control={control}
              inputStyle={{
                width: "3rem",
                height: "3rem",
                margin: "0 1rem",
                fontSize: "2rem",
                borderRadius: 4,
                border: "1px solid rgba(0,0,0,0.3)",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button sx={{ mt: "2rem" }} type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default Home;
