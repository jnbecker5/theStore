import React, { Component } from "react";

export class OtherTableRow extends Component {

    render() {
        let o = this.props.other;
        return(
            <tr className = "text-left">
            <td>{ o.id }</td>
            <td>{ o.description }</td>
            <td>{ o.semester}</td>
            <td>{ o.prefix }</td>
            <td>{ o.number }</td>
            <td>{ o.grade}</td>
            <td>
                <div className="col-md-12 text-center">
                <button className="text-center btn btn-sm btn-warning m-1"
                    onClick={ () => this.props.editCallback(o) }>
                        Edit
                </button>
                </div>    
            </td>
        </tr>)
    }
}
