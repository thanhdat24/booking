import { DAT_GHE, HUY_GHE } from "../types/BookingTicketType";

const stateDefault = {
  danhsachGheDangDat: [],
};

const BookingTicketReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DAT_GHE: {
      let danhsachGheDangDatUpdate = [...state.danhsachGheDangDat];
      let index = danhsachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
      );

      if (index !== -1) danhsachGheDangDatUpdate.splice(index, 1);
      else danhsachGheDangDatUpdate.push(action.ghe);
      state.danhsachGheDangDat = danhsachGheDangDatUpdate;
      return { ...state };
    }
    case HUY_GHE: {
      let danhsachGheDangDatUpdate = [...state.danhsachGheDangDat];
      let index = danhsachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.soGhe
      );

      if (index !== -1) danhsachGheDangDatUpdate.splice(index, 1);
      state.danhsachGheDangDat = danhsachGheDangDatUpdate;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default BookingTicketReducer;
