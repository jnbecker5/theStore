import React, { Component } from "react";

export class AcademicTableRow extends Component {

    render() {
        let a = this.props.academic;
        return(
            <tr className = "text-left">
            <td>{ a.id }</td>
            <td>{ a.description }</td>
            <td>{ a.semester}</td>
            <td>{ a.prefix }</td>
            <td>{ a.number }</td>
            <td>{ a.grade}</td>
            <td>
                <div className="col-md-12 text-center">
                <button className="text-center btn btn-sm btn-warning m-1"
                    onClick={ () => this.props.editCallback(a) }>
                        Edit
                </button>
                </div>    
            </td>
        </tr>)
    }
}
