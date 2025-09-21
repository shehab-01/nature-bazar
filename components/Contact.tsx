import React from "react";
import IconText from "./IconText";
import { PhoneCall, Home, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <IconText>
        <PhoneCall className="text-nature_bazar_light_green w-5 h-5 group-hover:text-nature_light_white " />
        <div>
          <h3 className="font-semibold text-nature_bazar_light_green group-hover:text-nature_light_white">
            Hotline 24/7:
          </h3>
          <h2 className="text-nature_bazar_light_green text-2xl font-bold group-hover:text-nature_light_white">
            01345-151716
          </h2>
        </div>
      </IconText>
      <IconText>
        <Home className="text-nature_bazar_light_green w-5 h-5 group-hover:text-nature_light_white" />
        <h3 className="font-semibold text-nature_bazar_light_green group-hover:text-nature_light_white">
          Cheragali, Tongi, Gazipur
        </h3>
      </IconText>
      <IconText>
        <Mail className="text-nature_bazar_light_green w-5 h-5 group-hover:text-nature_light_white" />
        <h3 className="font-semibold text-nature_bazar_light_green group-hover:text-nature_light_white">
          admin@naturebazzar.com
        </h3>
      </IconText>
    </div>
  );
};

export default Contact;
