import React, { Component } from "react";

import { connect } from "react-redux";
import { datGheAction } from "../redux/actions/BookingTicketAction";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let gheDaDat = "";
      let disabled = false;
      let csshangGheIJ = "";
      let cssGheDangDat = "";
      // Trạng thái ghế đã bị người khác đặt
      if (ghe.daDat) {
        gheDaDat = "gheDuocChon";
        disabled = true;
      }

      // Add css ghế IJ
      if (this.props.hangGhe.hang === "I" || this.props.hangGhe.hang === "J") {
        csshangGheIJ = "cssHangGheIJ";
      }

      // Trạng thái ghế đang đặt
      let indexGheDangDat = this.props.danhsachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );

      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe);
          }}
          disabled={disabled}
          className={`ghe ${gheDaDat} ${csshangGheIJ} ${cssGheDangDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderHangDauTien = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return (
        <span key={index} className="rowNumber">
          {hang.soGhe}
        </span>
      );
    });
  };

  renderHangGhe = () => {
    let { hangGhe, soHangGhe } = this.props;
    if (soHangGhe === 0) {
      return (
        <div>
          {hangGhe.hang} {this.renderHangDauTien()}
        </div>
      );
    } else {
      return (
        <div>
          {hangGhe.hang} {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    return <div className="hangGhe">{this.renderHangGhe()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    danhsachGheDangDat: state.BookingTicketReducer.danhsachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
