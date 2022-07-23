import React, { Component } from "react";
import { DistributiveTable } from "./DistributiveTable"
import { DistributiveEditor } from "./DistributiveEditor";
import { connect } from "react-redux";
import { EditorConnector } from "./store/EditorConnector";
import { DISTRIBUTIVES } from "./store/dataTypes";
import { TableConnector } from "./store/TableConnector";
import { startCreatingDistributive } from "./store/stateActions";

const ConnectedEditor = EditorConnector(DISTRIBUTIVES, DistributiveEditor);
const ConnectedTable = TableConnector(DISTRIBUTIVES, DistributiveTable);

const mapStateToProps = (storeData) => ({
    editing: storeData.stateData.editing,
    selected: storeData.modelData.distributives
        .find(item =>  item.id === storeData.stateData.selectedId) || {}
})

const mapDispatchToProps = {
    createDistributive: startCreatingDistributive,
}

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const DistributiveDisplay = connectFunction(
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
