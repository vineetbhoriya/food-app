import { Grid, ListItem } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import RvHookupOutlinedIcon from "@mui/icons-material/RvHookupOutlined";
import SettingsPhoneOutlinedIcon from "@mui/icons-material/SettingsPhoneOutlined";
export default function ServiceCart() {
  return (
    <div className="flex flex-row items-center justify-around lg:gap-10">
      <div className="flex flex-col items-center md:w-[20rem] p-4 bg-gray-200 border-2 py-8 rounded-xl gap-6">
        <div className="p-5 bg-secondary rounded-full">
          <LocalShippingOutlinedIcon sx={{ fontSize: 60 }} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-semibold">Free Shipping</h2>
          <p className="font-light text-gray-600">Free on order over $300</p>
        </div>
      </div>
      <div className="flex flex-col items-center md:w-[20rem] p-4 bg-gray-200 border-2 py-8 rounded-xl gap-6">
        <div className="p-5 bg-secondary rounded-full">
          <SecurityOutlinedIcon sx={{ fontSize: 60 }} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-semibold">Security Payment</h2>
          <p className="font-light text-gray-600">100% security payment</p>
        </div>
      </div>
      <div className="flex flex-col items-center md:w-[20rem] p-4 bg-gray-200 border-2 py-8 rounded-xl gap-6">
        <div className="p-5 bg-secondary rounded-full">
          <RvHookupOutlinedIcon sx={{ fontSize: 60 }} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-semibold">30 Day Return</h2>
          <p className="font-light text-gray-600">30 day money guarantee</p>
        </div>
      </div>
      <div className="flex flex-col items-center md:w-[20rem] p-4 bg-gray-200 border-2 py-8 rounded-xl gap-6">
        <div className="p-5 bg-secondary rounded-full">
          <SettingsPhoneOutlinedIcon sx={{ fontSize: 60 }} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-semibold">24/7 Support</h2>
          <p className="font-light text-gray-600">Support every time fast</p>
        </div>
      </div>
    </div>
  );
}
