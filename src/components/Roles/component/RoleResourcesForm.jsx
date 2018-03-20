import React, { Component } from 'react';

//include redux-form
import { reduxForm, Field  } from 'redux-form';

//include connection to redux 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//include nestedMultiSelect
import TreeComponent from './TreeComponent/component/TreeComponent.jsx';

//include actions
import { nestedResourcesData, nestedScopesData } from '../action/role-action';


class RoleResources extends Component {
    constructor(props) {
        super(props);
        this.setScopeTree = this.setScopeTree.bind(this);
        this.state = {
            scopeTree: false,
            resourcesTree: false
        }
        this.setResourcesTree = this.setResourcesTree.bind(this);
    }


    componentDidMount() {
        this.props.nestedResourcesData();
        this.props.nestedScopesData();
    }

    // componentDidUpdate(){
    //     if(document.getElementById('resourceAccess').value === 'All'){
    //         this.setState({
    //             resourcesTree: false
    //         })
    //     }else if(document.getElementById('resourceAccess').value === 'Custom'){
    //         this.setState({
    //             resourcesTree: true
    //         })
    //     };
    //     if(document.getElementById('roleScopes').value === 'All'){
    //     this.setState({
    //         scopeTree: false
    //     }) 
    //   } else if (document.getElementById('roleScopes').value === 'Custom'){
    //     this.setState({
    //         scopeTree: true
    //     })
    //   }
    // }

    setScopeTree(e) {
        this.setState(
            (previousState, props) => {
                return { scopeTree: e.target.value === 'Custom' ? true : false }
            });
    }

    setResourcesTree(e) {
        this.setState(
            (previousState, props) => {
                return { resourcesTree: e.target.value === 'Custom' ? true : false }
            });
    }

    render() {
        return (
            <div className="col-9">
                <label>Role Scope</label>
                <div >
                    <div>
                        <label>Role Scopes</label>
                        <div>
                            <Field name="roleScopes"
                                component="select"
                                onChange={this.setScopeTree}
                                id='roleScopes'
                             >
                                <option value="All">All</option>
                                <option value="Custom">Custom</option>
                            </Field>
                        </div>
                        {this.state.scopeTree ? <div>
                            <TreeComponent preSelectedData = {this.props.scopeResourceData ? this.props.scopeResourceData.store : ''} data = {this.props.scopes} responseFormat = {responseFormat} responseKey = {"store"} parentLabel = {"cntryNme"} childLabel = {"storeNme"} parentId = {"cntryId"} childId = {"storeId"}></TreeComponent>
                        </div> : <span></span>}
                    </div>

                    <div>
                        <label>Role Resources</label>
                        <div>
                            <label>Resource Access</label>
                            <div>
                                <Field name="resourceAccess"
                                    component="select"
                                    onChange={this.setResourcesTree}
                                    id='resourceAccess'
                                >
                                    <option value="All">All</option>
                                    <option value="Custom">Custom</option>
                                </Field>
                            </div>
                        </div>
                        <div>
                        {
                         this.state.resourcesTree ?
                         <div>
                             <label>Resources</label>
                             <div>
                                <TreeComponent preSelectedData = {this.props.scopeResourceData ? this.props.scopeResourceData.privilege : ''} data = {this.props.resources} responseFormat = {responseFormat} responseKey = {"privilege"} parentLabel = {"privilNme"} childLabel = {"privilNme"} parentId = {"privilId"} childId = {"privilId"}></TreeComponent>
                             </div> 
                         </div> : 
                         <span></span>
                         }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    resources: state.roleResources.roleResourcesData,
    scopes: state.roleScopes.roleScopeData
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    nestedResourcesData, nestedScopesData
}, dispatch);

const  responseFormat = {
    "store" : [],
    "privilege": []
  };

export default connect(mapStateToProps, mapDispatchToProps)(RoleResources);


// export default reduxForm({
//     form: 'roleResources',
//     destroyOnUnmount: false,   // ??? why do we use it?
// })(RoleResources);


