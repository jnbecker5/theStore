import React, { Component } from "react";
import { OtherTableRow } from "./OtherTableRow";

export class OtherTable extends Component {

    render() {
        return <table className="table table-sm table-striped table-bordered">
                <thead>
                    <tr>
                        <th colSpan="7" 
                                className="bg-primary text-white text-center h4 p-2">
                            Additional Requirement
                        </th>
                    </tr>
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Description</th>
                        <th className="text-center">Semester</th>
                        <th className="text-center">Prefix</th>
                        <th className="text-center">Number</th>
                        <th className="text-center">Grade</th>
                        <th className="text-center">Editing</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.others.map(o => 
                            <OtherTableRow 
                                other={ o } 
                                key={ o.id }
                                editCallback={ this.props.editCallback }
                                deleteCallback={ this.props.deleteCallback } />)
                    }
                </tbody>
            </table>        
    }
}
