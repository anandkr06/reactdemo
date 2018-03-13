import React, {Component} from 'react';

class UserRole extends Component{
    render(){
        return(
            <div className="col-md-9">
                <div className="col-md-12 p-0">
                    <button>Search</button>
                    <span></span>
                    <span>2 records found</span>
                    <select>
                        <option value = "20">20</option>
                    </select>
                    <button></button><span></span><button></button>
                </div>
                <table>
                    <thead>
                <tr>
                  <th>Assigned</th>
                  <th>Role</th> 
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                    <select>
                        <option>Any</option>
                    </select>
                    </td>
                    <td>
                        <input type = "text"/>    
                    </td> 
                </tr>
                <tr>
                  <td><input type = "radio"/></td>
                  <td>Administrators</td> 
                </tr>
                <tr>
                  <td><input type = "radio"/></td>
                  <td>Celebrity_TV</td> 
                </tr>
                </tbody>
              </table>
            </div>

        )
    }
}

export default UserRole;