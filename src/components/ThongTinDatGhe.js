import React, { Component } from "react";

import { connect } from "react-redux";
import { huyGheAction } from ".././redux/actions/BookingTicketAction";

class ThongTinDatGhe extends Component {
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
        <div className="infoTicket__table mt-4">
          <table className="table" border="2">
            <thead>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody className="text-warning">
              {this.props.danhsachGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}</td>
                    <td>
                      <i
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe));
                        }}
                        className="fa fa-times text-danger"
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td>Tổng tiền</td>
                <td>
                  {this.props.danhsachGheDangDat
                    .reduce((tongTien, gheDangDat, index) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhsachGheDangDat: state.BookingTicketReducer.danhsachGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);
