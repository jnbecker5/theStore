import React, { Component } from "react";
import { AcademicTableRow } from "./AcademicTableRow";

export class AcademicTable extends Component {

    render() {
        return <table className="table table-sm table-striped table-bordered">
                <thead>
                    <tr>
                        <th colSpan="7" 
                                className="bg-primary text-white text-center h4 p-2">
                            Academic Foundation
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
                        this.props.academics.map(a => 
                            <AcademicTableRow 
                                academic={ a } 
                                key={ a.id }
                                editCallback={ this.props.editCallback }
                                deleteCallback={ this.props.deleteCallback } />)
                    }
                </tbody>
            </table>        
    }
}
