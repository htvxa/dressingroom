import React, { Component } from "react";
import { connect } from "react-redux";

class Category extends Component {
  handleSelectCategory = (cateType) => {
    return () => {
      //dispatch action lên store để thay đổi selectedCategory
      this.props.dispatch({
        type: "SELECT_CATEGORY",
        payload: cateType,
      });
    };
  };

  renderCategories = () =>
    this.props.cateList.map((item) => (
      <button
        onClick={this.handleSelectCategory(item.type)}
        //
        className={`btn ${item.type === this.props.selectedCate ? 'btn-success' : 'btn-secondary'}`}
      >
        {item.showName}
      </button>
    ));

  render() {
    return <div className="btn-group">{this.renderCategories()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    cateList: state.categories,
    selectedCate: state.selectedCategory,
  };
};

export default connect(mapStateToProps)(Category);
