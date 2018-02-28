import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableBody extends Component {
    constructor(props) {
        super(props);
        console.log(props);
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
                        <td><input type="text" placeholder="Search Id" className="form-control" /></td>
                        <td><input type="text" placeholder="Search first name" className="form-control" /></td>
                        <td><input type="text" placeholder="Search last name" className="form-control" /></td>
                        <td><input type="text" placeholder="Search email" className="form-control" /></td>
                        <td>
                            <select>
                                <option>Active</option>
                                <option>InActive</option>
                            </select>
                        </td>
                    </tr>
                    {usersList.map((user, i) => {
                        return <tr key={user.userId}>
                            <td >{user.userId}</td>
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
    usersList: state.user.usersList
  })

export default connect(mapStateToProps,null)(TableBody);
