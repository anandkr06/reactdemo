import React, { Component } from 'react';
import SearchHeader from './search-header/SearchHeader';
import Pagination from '../../../../../../utilities/pagination/Pagination';

class TableHeader extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <SearchHeader></SearchHeader>
                </div>
                <div className="col-md-8">
                    <Pagination></Pagination>
                </div>
            </div>
        );
    }
}

export default TableHeader;