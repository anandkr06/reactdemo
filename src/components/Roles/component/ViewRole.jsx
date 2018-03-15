import React, { Component } from 'react';

//include library for tables...
import ReactTable from 'react-table';
import matchSorter from 'match-sorter';

//redux dependency....
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//include actions 
import { allRolesRecords } from '../action/view-role-action';

class RolesRecordGrid extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.allRolesRecords();
    }

    // render(){
    //     return (<h1> hi ,role table grid is here..!</h1>);
    // }
    render() {
        return (
            <ReactTable
                data={this.props.roleRecords}
                columns={this.props.columns}
                getTrProps={(state, rowInfo, column, instance) => {
                    return {
                        onClick: e =>
                        {
                            this.props.url.history.push({
                            pathname: '/home/system/RoleInfo',
                            state: {
                                data : rowInfo.original
                            }
                        })
                        }
                    };
                }}
                defaultPageSize={5}
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
        allRolesRecords
}, dispatch)
}

const mapStateToProps = (state) => {
  return {
        roleRecords : state.allRoleRecords.roleRecords,
        columns : state.allRoleRecords.viewRolesColumns
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(RolesRecordGrid);