import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//import saveFilterTagsOnGrid action to save this on store.
import {saveFilterTagsOnGrid} from '../../../action/user-action';

class TableBody extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            id: "",
            firstName : "",
            lastName : "",
            email:"",
            status:""
        }
    }

    setIdFilterTag(e){
        this.setState({
            id:e.target.value
        })
    }

    setFirstNameFilterTag(e){
        this.setState({
            firstName:e.target.value
        })
    }

    setLastNameFilterTag(e){
        this.setState({
            lastName:e.target.value
        })
    }

    setEmailFilterTag(e){
        this.setState({
            email:e.target.value
        })
    }

    setUserStatus(e){
        this.setState({
            status:e.target.value
        })
    }

    componentDidUpdate(){
        if(!this.props.filterInputVisibility){
        let filterTags = this.state;
        this.props.saveFilterTags({...filterTags}); 
       }
    }

    render() {
        let usersList = this.props.usersList || [];
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="text"  ref={(input) => { this.idInput = input; }}  placeholder="Search Id" className="form-control" value={this.state.id}  onChange={(e) => this.setIdFilterTag(e)} /></td>
                        <td><input type="text"  ref={(input) => { this.firstNameInput = input; }}  placeholder="Search first name" className="form-control" value={this.state.firstName} onChange={(e) => this.setFirstNameFilterTag(e)}/></td>
                        <td><input type="text"  ref={(input) => { this.lastNameInput = input; }}  placeholder="Search last name" className="form-control" value={this.state.lastName} onChange={(e) => this.setLastNameFilterTag(e)}/></td>
                        <td><input type="text"  ref={(input) => { this.emailInput = input; }}  placeholder="Search email" className="form-control" value={this.state.email} onChange={(e) => this.setEmailFilterTag(e)}/></td>
                        <td>
                            <select  ref={(r) => { this.activeSelect = r; }} value={this.state.status} onChange={(e) => this.setUserStatus(e)}>
                                <option value="Active">Active</option>
                                <option value="InActive">InActive</option>
                            </select>
                        </td>
                    </tr>
                    {usersList.map((user, i) => {
                        console.log('user row',user);
                        user.status = user.status === 1 || user.status === 'Active' ?'Active':'InActive';
                        return <tr key={user.userId}>
                            <td >{user.UserId}</td>
                            <td>{user.fstNme}</td>
                            <td>{user.lstNme}</td>
                            <td>{user.email}</td>
                            <td>{user.status}</td>
                        </tr>
                    })
                    }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => ({
    usersList: state.user.usersList,
    filterInputVisibility : state.viewUserSearchFilterTags.resetFilterTag
});

//dispatching or emitting the inputs of filter tags. 
const mapDispatchToProps = (dispatch) => bindActionCreators({
    saveFilterTags : saveFilterTagsOnGrid
}, dispatch);
  

export default connect(mapStateToProps,mapDispatchToProps)(TableBody);
