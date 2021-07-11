import { DAT_GHE } from "../types/BookingTicketType";
import { HUY_GHE } from "../types/BookingTicketType";

export const datGheAction = (ghe) => {
  return {
    type: DAT_GHE,
    ghe,
  };
};

export const huyGheAction = (soGhe) => {
  return {
    type: HUY_GHE,
    soGhe,
  };
};
