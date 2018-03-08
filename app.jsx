import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions/actions'

import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/TodoList.jsx'
import NavigationMenu from './components/NavigationMenu/NavigationMenu.jsx'
import MultiSelect from './components/MultiSelect/MultiSelect.jsx';

class App extends Component {
    constructor(props){
           super(props);
        //    this.state = {
        //         "menuOptions" : {
        //             "options1" : "Product Details",
        //             "options2" : "Images and Videos",
        //             "options3" : "Search Engine Optimization",
        //             "options4" : "Websites",
        //             "options5" : {
        //                 "Advanced Settings" : {
        //                     "option6" : "Advanced Pricing",
        //                     "option7" : "Advanced Inventory",
        //                     "option8" : "Custom Options",
        //                     "option9" : "Related Products",
        //                     "option10" : "Up-sells",
        //                     "option11" : "Cross-sells",
        //                     "option12" : "Design",
        //                     "option13" : "Autosettings"
        //                 }
        //             }
        //         },
        //         "menuPlacement" : "right"
        //    };
       }
   render() {
      //const { dispatch, visibleTodos } = this.props;
      
      return (
          //<NavigationMenu menuOptions = {this.state.menuOptions} menuPlacement = {this.state.menuPlacement}/>
        //  <div>
        //     <AddTodo onAddClick = {text => dispatch(addTodo(text))} />
        //     <TodoList todos = {visibleTodos}/>
        //  </div>
         <MultiSelect/>
      )
   }
}
function select(state) {
   return {
      visibleTodos: state.todos
   }
}
//export default App;
export default connect(select)(App);