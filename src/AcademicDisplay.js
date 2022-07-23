import React, { Component } from "react";
import { AcademicTable } from "./AcademicTable"
import { AcademicEditor } from "./AcademicEditor";
import { connect } from "react-redux";
import { EditorConnector } from "./store/EditorConnector";
import { ACADEMICS } from "./store/dataTypes";
import { TableConnector } from "./store/TableConnector";
import { startCreatingAcademic } from "./store/stateActions";

const ConnectedEditor = EditorConnector(ACADEMICS, AcademicEditor);
const ConnectedTable = TableConnector(ACADEMICS, AcademicTable);

const mapStateToProps = (storeData) => ({
    editing: storeData.stateData.editing,
    selected: storeData.modelData.academics
        .find(item =>  item.id === storeData.stateData.selectedId) || {}
})

const mapDispatchToProps = {
    createAcademic: startCreatingAcademic,
}

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const AcademicDisplay = connectFunction(
    class extends Component {
        render() {
            if (this.props.editing) {
                return <ConnectedEditor key={ this.props.selected.id || -1 } />
            } else {
                return <div className="m-2">
                    <ConnectedTable />                       
                </div>
            }
        }
    })
