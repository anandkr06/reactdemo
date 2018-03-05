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
                <div className="col">
                    <button className="btn btn-primary btn-sm" onClick={() => this.handleClick()}> Search </button>
                </div>
                <div className="col-md-auto">
                    <p> Reset Filters </p>
                </div>
                <div className="col-md-auto view">
                    <p> 2 Records found </p>
                </div>
            </div>
        );
    }
}

export default SearchHeader;