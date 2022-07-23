import React, { Component } from "react";

export class DistributiveTableRow extends Component {

    render() {
        let d = this.props.distributive;
        return(
            <tr className = "text-left">
            <td>{ d.id }</td>
            <td>{ d.description }</td>
            <td>{ d.semester}</td>
            <td>{ d.prefix }</td>
            <td>{ d.number }</td>
            <td>{ d.grade}</td>
            <td>
                <div className="col-md-12 text-center">
                <button className="text-center btn btn-sm btn-warning m-1"
                    onClick={ () => this.props.editCallback(d) }>
                        Edit
                </button>
                </div>    
            </td>
        </tr>)
    }
}
