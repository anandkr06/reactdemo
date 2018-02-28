import React, { Component } from 'react';

class Pagination extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-4 row">
                    <div className="col-md-4">
                        <select>
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                        </select>
                    </div>
                    <div className="col-md-8">
                        per page
                    </div>
                </div>
                <div className="col-md-5">
                    <ul className="pagination pagination-sm">
                        <li className="page-item">
                            <a href="#" className="page-link">Prev</a>
                        </li>
                        <li className="page-item">
                            <a href="#" className="page-link">1</a>
                        </li>
                        <li className="page-item">
                            <a href="#" className="page-link">2</a>
                        </li>
                        <li className="page-item">
                            <a href="#" className="page-link">3</a>
                        </li>
                        <li className="page-item">
                            <a href="#" className="page-link">4</a>
                        </li>
                        <li className="page-item">
                            <a href="#" className="page-link">5</a>
                        </li>
                        <li className="page-item">
                            <a href="#" className="page-link">Next</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Pagination;