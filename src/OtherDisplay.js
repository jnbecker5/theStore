import React, { Component } from "react";
import { OtherTable } from "./OtherTable"
import { OtherEditor } from "./OtherEditor";
import { connect } from "react-redux";
import { EditorConnector } from "./store/EditorConnector";
import { OTHERS } from "./store/dataTypes";
import { TableConnector } from "./store/TableConnector";
import { startCreatingOther } from "./store/stateActions";

const ConnectedEditor = EditorConnector(OTHERS, OtherEditor);
const ConnectedTable = TableConnector(OTHERS, OtherTable);

const mapStateToProps = (storeData) => ({
    editing: storeData.stateData.editing,
    selected: storeData.modelData.others
        .find(item =>  item.id === storeData.stateData.selectedId) || {}
})

const mapDispatchToProps = {
    createOther: startCreatingOther,
}

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const OtherDisplay = connectFunction(
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
