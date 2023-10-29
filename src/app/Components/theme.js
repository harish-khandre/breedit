import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        
          root: {
            "&.Mui-focused": {
              "color": "#f7ebdb"
            }
          }
        
        
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#f7ebdb", // Input text color
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#505f2f", // Outline border color when not focused
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#505f2f", // Outline border color on hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#f7ebdb", // Outline border color when focused
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "#505f2f", // Select arrow color
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#505f2f", // Checkbox color
          "&.Mui-checked": {
            color: "#f7ebdb", // Checkbox color when checked
          },
        },
        text: {
          color: "#505f2f", // Checkbox text color
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "#f7ebdb", // Menu item text color
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: "#505f2f", // Label text color
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#f7ebdb", // Label text color when focused
          },
          "& .MuiInput-underline:before": {
            borderBottomColor: "#505f2f", // Bottom border color when not focused (for underline variant)
          },
          "& .MuiInput-underline:hover:before": {
            borderBottomColor: "#505f2f", // Bottom border color on hover (for underline variant)
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#f7ebdb", // Bottom border color when focused (for underline variant)
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#505f2f", // Outline border color when not focused
            },
            "&:hover fieldset": {
              borderColor: "#505f2f", // Outline border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#f7ebdb", // Outline border color when focused
            },
          },
          "& .MuiInputBase-input": {
            color: "#f7ebdb", // Input text color
          },
        },
      },
    },
  },
});

export default theme;
