import React, { Component } from 'react';

class SearchHeader extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(){

    }
    
    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <button className="btn btn-primary btn-sm" onClick={() => this.handleClick()}> Search </button>
                </div>
                <div className="col-md-4">
                    <p> Reset Filters </p>
                </div>
                <div className="col-md-5 view">
                    <p> 2 Records found </p>
                </div>
            </div>
        );
    }
}

export default SearchHeader;