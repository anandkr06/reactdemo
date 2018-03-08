import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';
import axios from 'axios';
import { viewAllUsersAction } from '../action/UserAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {DropdownList} from 'react-widgets';
import ReactTable from 'react-table';
import matchSorter from 'match-sorter';
import { withRouter } from 'react-router-dom';

class ViewUser extends Component{
    constructor(props){
        super(props);
        props.viewAllUsersAction();
    }


    render(){
        return(
            <ReactTable
                data={this.props.allUserList}
                columns={this.props.columns}
                getTrProps={(state, rowInfo, column, instance) => {
                    return {
                    onClick: e =>
                        console.log("Cell - onMouseEnter", {
                        state,
                        rowInfo,
                        column,
                        instance,
                        event: e
                        })
                    };
                }}
                defaultPageSize = {10}
                className="-striped -highlight"
                noDataText="No Record Found!"
                showPaginationTop
                filterable
                defaultFilterMethod={(filter, row) =>
                String(row[filter.id]) === filter.value}
                
            />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        viewAllUsersAction
}, dispatch)
}

const mapStateToProps = (state) => {
  return {
        allUserList : state.allUserList.allUserList,
        columns : state.viewUserColumns.viewUserColumns
  };
}

ViewUser = connect(mapStateToProps, mapDispatchToProps)(ViewUser);


export default ViewUser;