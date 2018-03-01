import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 

//import action for search searchByFilter;
import {searchByFilter,getAllUser} from '../../../../action/user-action';

class SearchHeader extends Component {
    constructor(props) {
        super(props);
        console.log('filter tags search header before update',props);
    }

   componentDidUpdate(){
        console.log('filter tags search header after update',this.props.filterTags);
   } 

    render() {
        let resetFilterMap = {
            id: "",
            firstName : "",
            lastName : "",
            email:"",
            status:""
      }

      let countArray =  this.props.list || [];
        return (
            <div className="row">
                <div className="col-md-3">
                    <button className="btn btn-primary btn-sm" onClick={() => this.props.submitToSearch({...this.props.filterTags})}> Search </button>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-default btn-sm" onClick={() => this.props.submitToReset()} > Reset Filters </button>
                </div>
                <div className="col-md-5 view">
                    <p> { countArray.length } Records found </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    filterTags: state.viewUserSearchFilterTags.filterTagsData,
    list : state.user.usersList
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    submitToSearch : searchByFilter,
    submitToReset : getAllUser
}, dispatch);
  
export default connect(mapStateToProps,mapDispatchToProps)(SearchHeader);
