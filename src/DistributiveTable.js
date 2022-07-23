import React, { Component } from "react";
import { DistributiveTableRow } from "./DistributiveTableRow";

export class DistributiveTable extends Component {

    render() {
        return <table className="table table-sm table-striped table-bordered">
                <thead>
                    <tr>
                        <th colSpan="7" 
                                className="bg-primary text-white text-center h4 p-2">
                            Distributive Requirement
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
                        this.props.distributives.map(d => 
                            <DistributiveTableRow 
                                distributive={ d } 
                                key={ d.id }
                                editCallback={ this.props.editCallback }
                                deleteCallback={ this.props.deleteCallback } />)
                    }
                </tbody>
            </table>        
    }
}
