import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  handleSelectProduct = () => {
    const { type, imgSrc_png } = this.props.data;
    this.props.dispatch({
      type: "SELECT_PRODUCT",
      payload: { type: type, img: imgSrc_png },
    });
  };

  render() {
    const { imgSrc_jpg, name } = this.props.data;
    return (
      <div className="card">
        <img src={imgSrc_jpg} alt="product" />
        <p className="lead">{name}</p>
        <button onClick={this.handleSelectProduct} className="btn btn-primary">Thử đồ</button>
      </div>
    );
  }
}

export default connect()(ProductItem);
