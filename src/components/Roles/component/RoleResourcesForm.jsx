import React, { Component } from 'react';

//include redux-form
import { reduxForm, Field } from 'redux-form';

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
            resourcesTree: false,
            isTreePopulated: false
        }
        this.setResourcesTree = this.setResourcesTree.bind(this);
    }

    componentDidMount() {
        this.props.nestedResourcesData();
        this.props.nestedScopesData();
    }

    componentDidUpdate() {
        if (!this.state.isTreePopulatedResource && !this.state.isTreePopulatedScope) {
            if (document.getElementById('resourceAccess').value === 'All') {
                this.setState({
                    resourcesTree: false
                })
                this.setState({
                    isTreePopulatedResource: true
                })
            } else if (document.getElementById('resourceAccess').value === 'Custom') {
                this.setState({
                    resourcesTree: true
                })
                this.setState({
                    isTreePopulatedResource: true
                })
            };
            if (document.getElementById('roleScopes').value === 'All') {
                this.setState({
                    scopeTree: false
                })
                this.setState({
                    isTreePopulatedScope: true
                })
            } else if (document.getElementById('roleScopes').value === 'Custom') {
                this.setState({
                    scopeTree: true
                })
                this.setState({
                    isTreePopulatedScope: true
                })
            }
        }
    }

    shouldComponentUpdate() {
        console.debug('shouldComponentUpdate');
        return true;
      }

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
            <div className="container-fluid clearfix">
                <h4 className="mt-4">Role Scope</h4>
                <hr className="clearfix" />
                <div className="col-12 px-0">
                    <div className="form-group row">
                        <label className="col-3">Role Scopes</label>
                        <div className="col-9">
                            <Field name="roleScopes"
                                component="select"
                                className="form-control"
                                onChange={this.setScopeTree}
                                id='roleScopes'
                            >
                                <option value="All">All</option>
                                <option value="Custom">Custom</option>
                            </Field>
                        </div>
                        {this.state.scopeTree ? <div>
                            <TreeComponent preSelectedData={this.props.scopeResourceData ? this.props.scopeResourceData.store : ''} data={this.props.scopes} responseFormat={responseFormat} responseKey={"store"} parentLabel={"cntryNme"} childLabel={"storeNme"} parentId={"cntryId"} childId={"storeId"}></TreeComponent>
                        </div> : <span></span>}
                    </div>

                    <div className="clearfix">
                        <h4 className="mt-4">Role Resources</h4>
                        <hr />
                        <div className="form-group row">
                            <label className="col-3">Resource Access</label>
                            <div className="col-9">
                                <Field name="resourceAccess"
                                    component="select"
                                    className="form-control"
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
                                            <TreeComponent preSelectedData={this.props.scopeResourceData ? this.props.scopeResourceData.privilege : ''} data={this.props.resources} responseFormat={responseFormat} responseKey={"privilege"} parentLabel={"privilNme"} childLabel={"privilNme"} parentId={"privilId"} childId={"privilId"}></TreeComponent>
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

const responseFormat = {
    "store": [],
    "privilege": []
};

export default connect(mapStateToProps, mapDispatchToProps)(RoleResources);


// export default reduxForm({
//     form: 'roleResources',
//     destroyOnUnmount: false,   // ??? why do we use it?
// })(RoleResources);


