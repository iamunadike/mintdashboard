import React, { Component } from "react";

export default class SearchSortRow extends Component {
  constructor(props) {
    super(props);
    this.pageSizes = props.sizes || [5, 10, 20];
    this.pageSorts = props.sortTypes || [
      "All",
      "UnReconciled",
      "Reconciled",
      "Pending",
      "Completed",
    ];
  }
  componentDidMount() {
    this.props.setPageSize(this.pageSizes[0]);
  }
  handlePageSizeChange = (ev) => {
    this.props.setPageSize(ev.target.value);
  };

  render() {
    return (
      <React.Fragment>
        <span className="placements">
          <span className="show1">Showing</span>

          <select
            className="form-control"
            onChange={this.handlePageSizeChange}
            value={this.props.pageSize}
          >
            {this.pageSizes.map((s) => (
              <option value={s} key={s}>
                {s}
              </option>
            ))}
          </select>
          <span className="last">{`out of 
          ${this.props.calcTotal}`}</span>
          <input type="text" placeholder="search" className="finder" />
          <span className="show">Showing</span>
          <select style={{ marginLeft: "700px" }}>
            {this.pageSorts.map((i) => (
              <option
                value={i}
                key={i}
                selected={this.props.chosen === i.toLowerCase()}
              >
                {i}
              </option>
            ))}
          </select>
        </span>
      </React.Fragment>
    );
  }
}
