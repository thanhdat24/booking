import React, { Component } from "react";

export default class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className="infoTicket__button mt-4">
          <button className="gheDuocChon"></button>
          <span className="infoTicket__text">Ghế đã đặt</span>
          <br />
          <button className="gheDangChon my-2"></button>
          <span className="infoTicket__text">Ghế đang chọn</span>
          <br />
          <button className="ghe ml-0"></button>
          <span className="infoTicket__text">Ghế chưa đặt</span>
        </div>
        <div className="infoTicket__table">
          <table className="table" border="2">
            <thead>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Số ghế</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>Số ghế</th>
                <th></th>
                <th></th>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Tổng tiền</th>
                <th></th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
