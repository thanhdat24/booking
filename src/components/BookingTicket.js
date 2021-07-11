import "./BookingTicket.css";

import React, { Component, Fragment } from "react";

import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGhe from "./Data/danhSachGhe.json";

export default class BookingTicket extends Component {
  renderHangGhe = () => {
    return danhSachGhe.map((hangGhe, index) => {
      return (
        <Fragment key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </Fragment>
      );
    });
  };
  render() {
    return (
      <div className="bookingMovie">
        <div className="bookingMovie__img"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <div className="bookingMovie__header">
                Đặt vé xem phim cyberlearn.vn
              </div>
              <div className="bookingMovie__title">Màn hình</div>
              <div className="centerScreen">
                <div className="bookingMovie__screen"></div>
              </div>
              {this.renderHangGhe()}
            </div>
            <div className="col-4">
              <div className="infoTicket">
                <div className="infoTicket__header">Danh sách ghế bạn chọn</div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
