import React, { Component } from 'react';
import TableBody from './table-body/TableBody';
import TableHeader from './table-header/TableHeader';
import './table-view.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllUser } from '../../action/user-action'; 

class TableView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usersList: []
    };

  }

  componentDidMount() {
      this.props.getUsersList();
    //  api call
  }

  render() {
    return (
      <div id="table-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <TableHeader></TableHeader>
            </div>
            <div className="col-md-12">
              <hr />
            </div>
            <div className="col-md-12">
              <TableBody ></TableBody>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getUsersList : getAllUser
}, dispatch)

export default connect(null,mapDispatchToProps)(TableView);