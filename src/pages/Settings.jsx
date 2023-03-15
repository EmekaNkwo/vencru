import React from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import useMediaQuery from "../shared/hooks/useMediaQuery";
import { Billing } from "../components";

function Settings() {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(5);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const isSmallScreen = useMediaQuery("(max-width: 1023px)");
  return (
    <div className="p-4 lg:w-[80vw] w-screen ">
      <div className="flex flex-col gap-2">
        <h1 className="text-[30px] text-primary font-medium">Settings</h1>
        <span className="text-secondary text-[16px]">
          Manage your team and preferences here.
        </span>

        <Box
          sx={{
            marginTop: "10px",
          }}
        >
          <Box
            sx={{
              border: 1,
              borderColor: "divider",
              borderRadius: "10px",
              width: {
                md: "95%",
                lg: "950px",
              },
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant={isSmallScreen ? "scrollable" : "standard"}
              scrollButtons="auto"
              TabIndicatorProps={{
                style: {
                  display: "none",
                },
              }}
              sx={{
                "& .MuiTabs-flexContainer": {
                  "& .MuiTab-root": {
                    borderRight: "1px solid #E0E0E0",
                    fontSize: "14px",

                    "&:last-child": {
                      borderRight: "none",
                    },
                    "&.Mui-selected": {
                      backgroundColor: "#eee",
                      borderBottom: "none",
                      color: "#344054",
                    },
                  },
                },
              }}
            >
              <Tab label="My Details" disabled />
              <Tab label="Profile" disabled />
              <Tab label="Password" disabled />
              <Tab label="Team" disabled />
              <Tab label="Plan" disabled />
              <Tab label="Billing" {...a11yProps(5)} />
              <Tab label="Notifications" disabled />
              <Tab label="Integrations" disabled />
              <Tab label="API" disabled />
            </Tabs>
          </Box>
          <TabPanel value={value} index={5}>
            <Billing />
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}

export default Settings;
