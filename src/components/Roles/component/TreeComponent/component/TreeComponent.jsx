import React, { Component } from 'react';
import '../style/TreeComponent.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedCheckedValueAction } from '../action/tree-actions';

import { saveSelectedScopes,saveSelectedResources } from '../../../action/role-action';


class TreeComponent extends Component{
    constructor(props){
        super(props);
        this.modal = [];
        this.options = []; 
        this.data = this.props.data;
        this.response = this.props.responseFormat;
        this.prepareDataModal = this.prepareDataModal.bind(this);
        this.selectAllChildOptions = this.selectAllChildOptions.bind(this);
        this.selectParentOption = this.selectParentOption.bind(this);
        this.prepareResponse = this.prepareResponse.bind(this);        
        this.prepareList = this.prepareList.bind(this);
        this.prepareDataModal(this.data, this.props.parentLabel, this.props.childLabel, this.props.parentId, this.props.childId);
        this.prepareList(this.modal);
    }


        prepareList(obj){
          for(let i in obj){
              let label = obj[i].label;
              let id = obj[i].id;
              this.options.push(<div className = {`${label.split(" ").join("-")}-container`}><span className = {(obj)[i].children.length === 0 ? 'hide' : 'show expander' } onClick = {event => this.toggleChildMenu(`${label.split(" ").join("-")}-container`, event)}></span>
              <input className="parent-option-checkbox" type="checkbox" id = {label.split(" ").join("-")} value={`${label}-${id}`} key = {label} 
                />
              <span onClick = {event => this.selectAllChildOptions(`${label.split(" ").join("-")}-container`, event)}>{label}</span>{(obj)[i].children.length !== 0 ? <NestedOptions labels = {obj[i].children} selectParentOption = {event => this.selectParentOption(`${label.split(" ").join("-")}-container`, event)}/> : ''}
              </div>);
          }
        };

        toggleChildMenu(item, event) {
            event.preventDefault();
            let parent = document.getElementsByClassName(item);
            var child = parent[0].querySelector('.child-option');
            child.style.display = (child.style.display ===  'block') ? 'none' : 'block';
      };

      selectAllChildOptions(item, event){
            event.preventDefault();
            let parent = document.getElementsByClassName(item);
            let parentOption = document.querySelector(`#${item.split("-")[0]}`);
            var child = parent[0].querySelectorAll('.child-option-checkbox');
            parentOption.checked = (parentOption.checked) ? false : true;
            for(let i = 0; i < child.length ; i++){
                child[i].checked = (parentOption.checked);    
            }
            parentOption.checked;
            this.prepareResponse(child, parentOption);
      }

      prepareResponse(child, parentOption){
        let doesRecordExist = true;
        let currentStore = null;
        let parentKey = this.props.parentId;
        let childKey = this.props.childId;
        let parentLabel = this.props.parentLabel;
        let childLabel = this.props.childLabel;
        let responseKey = this.props.responseKey;
        for(let i = 0; i < this.response[responseKey].length ; i++){
          if(this.response[responseKey][i][parentKey] === parentOption.value){
            if(!parentOption.checked){
              this.response[responseKey].splice(i,1);
              console.log(this.response);
              return;
            } 
            else{
              continue;
            }
          }
          else{
            doesRecordExist = false;
          }
        }
        if(!doesRecordExist || this.response[responseKey].length === 0){
              
             parentOption.checked ? this.response[responseKey].push({ [parentKey] : parseInt(parentOption.value.split("-")[1]), [parentLabel] : parentOption.value.split("-")[0],"children":[]}) : '';
        }
        currentStore = this.response[responseKey][this.response[responseKey].length - 1];
        currentStore.children.splice(0, currentStore.children.length);
        for(let i = 0; i < child.length; i++){

          (child[i].checked)
           ? currentStore.children.push({[childKey] : parseInt(child[i].value.split("-")[1]), [childLabel] : child[i].value.split("-")[0]}) : '';
       
        }
        console.log(this.response);
        this.props.saveSelectedScopes(this.response.store);
        this.props.saveSelectedResources(this.response.privilege);
        this.props.selectedCheckedValueAction(this.response);
      }

      selectParentOption(item, event){
            event.preventDefault();
            let parent = document.getElementsByClassName(item);
            let parentOption = document.querySelector(`#${item.split("-")[0]}`);
            var child = parent[0].querySelectorAll('.child-option-checkbox');
            for(let i = 0; i < child.length ; i++){
               if(child[i].checked){
                  parentOption.checked = true;
                  break;
               }else{
                  parentOption.checked = false;
               }
               
            }
            this.prepareResponse(child, parentOption);
      }

    prepareDataModal(data, keyName, nestedKeyName, parentId, childId){
            for(let val in data){
                if(keyName !== null && data[val].children.length === 0){
                  this.modal.push({"label" : data[val][keyName], "id" : data[val][parentId]});
                  this.modal[this.modal.length - 1]["children"] = [];
                }
                else if(data[val].children && data[val].children.length > 0){ 
                  this.modal.push({"label" : data[val][keyName], "id" : data[val][parentId]});
                  this.modal[this.modal.length - 1]["children"] = [];
                  this.prepareDataModal(data[val].children, null , nestedKeyName, parentId, childId);
                }
                else{
                  this.modal[this.modal.length - 1]["children"].push({"label" : data[val][nestedKeyName], "id" : data[val][childId]});
                }
            }
    }

    render(){
        return (
          <div>
                   {this.options}
            </div>
            
        )
    }
    
}

class NestedOptions extends Component{
  constructor(props){
    super(props);
    this.childOptions = [];
    this.checkChildOption = this.checkChildOption.bind(this);
  }

  checkChildOption(item, event){
    let option = document.querySelector(`#${item}`);
    option.checked = (option.checked) ? false : true;
    this.props.selectParentOption(event);
  }

  renderChildMenu(obj){
    for(let i in obj){
      let label = obj[i].label;
      let id = obj[i].id;
      this.childOptions.push(
      <div>
        <input className = "child-option-checkbox" type="checkbox"  id = {label.split(" ").join("-")} value={`${label}-${id}`} key = {label}/>
        <span onClick = {event => this.checkChildOption(label.split(" ").join("-"), event)}>{label}</span>
    </div>
    );
    }
  }
  render(){
    this.childOptions = [];
    this.renderChildMenu(this.props.labels);
    return(
      <div className = "child-option hide">
        {this.childOptions}
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      selectedCheckedValueAction,
      saveSelectedScopes,
      saveSelectedResources
}, dispatch)
}


TreeComponent = connect(null, mapDispatchToProps)(TreeComponent);


export default TreeComponent;