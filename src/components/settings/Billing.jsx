import { MailOutline } from "@mui/icons-material";
import { Divider, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import React from "react";

import { InputField } from "../../shared/components/CustomInputField";

import BillTable from "./BillTable";
import Cards from "./Cards";

function Billing() {
  return (
    <div className="flex flex-col gap-3 ">
      <div className="my-2">
        <h3 className="text-[20px] font-medium">Payment Method</h3>
        <span className="text-[14px] text-secondary">
          Update your billing details and address
        </span>
      </div>
      <Divider />
      <div className="flex lg:flex-row flex-col items-start gap-5">
        <div className="flex flex-col lg:w-[450px]">
          <span className="text-[16px] font-medium">Contact email</span>
          <span className="text-[14px] text-secondary">
            Where should invoices be sent?
          </span>
        </div>
        <div className="flex flex-col lg:w-full">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="alternate"
            name="radio-buttons-group"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <FormControlLabel
              value="current"
              control={<Radio />}
              label={
                <div className="flex flex-col">
                  <span>Send to my account email</span>
                  <span className="text-secondary text-[14px]">
                    olivia@untitledui.com
                  </span>
                </div>
              }
            />
            <FormControlLabel
              value="alternate"
              control={<Radio />}
              label={
                <div className="flex flex-col ">
                  <span>Send to an alternative email</span>
                  <InputField
                    icon={<MailOutline />}
                    value="billing@untitledui.com"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        height: "45px",
                        marginTop: "8px",
                        width: {
                          sm: "100%",
                          md: "450px",
                          lg: "500px",
                        },
                      },
                    }}
                  />
                </div>
              }
            />
          </RadioGroup>
        </div>
      </div>
      <Divider />
      <div className="flex lg:flex-row flex-col items-start">
        <div className="flex flex-col w-full lg:w-[350px] ">
          <span className="text-[16px] font-medium">Card Details</span>
          <span className="text-[14px] text-secondary">
            Select default payment method
          </span>
        </div>
        <div className="flex flex-col my-3 w-full gap-2">
          <Cards />
          <span className="cursor-pointer">+ Add new payment method</span>
        </div>
      </div>

      <div className="mt-[1.5rem]">
        <BillTable />
      </div>
    </div>
  );
}

export default Billing;
