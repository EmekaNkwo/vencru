import { TextField, InputAdornment } from "@mui/material";

export const InputField = ({ icon, value, placeholder, ...other }) => {
  // const isSmallScreen = useMediaQuery("(max-width: 1023px)");

  return (
    <TextField
      id="input-with-icon-textfield"
      {...other}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
      value={value}
      variant="outlined"
      placeholder={placeholder}
    />
  );
};
