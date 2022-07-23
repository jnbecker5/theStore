import { connect } from "react-redux";
import { endEditing } from "./stateActions";
import { ACADEMICS, DISTRIBUTIVES, OTHERS } from "./dataTypes";
import { saveAndEndEditing } from "./multiActionCreators";

export const EditorConnector = (dataType, presentationComponent) => {

    const mapStateToProps = (storeData) => ({
        editing: storeData.stateData.editing 
            && storeData.stateData.selectedType === dataType,
        academic: (storeData.modelData[ACADEMICS]
            .find(a => a.id === storeData.stateData.selectedId)) || {},
        distributive: (storeData.modelData[DISTRIBUTIVES]
            .find(d => d.id === storeData.stateData.selectedId)) || {},
        other:(storeData.modelData[OTHERS]
            .find(o => o.id === storeData.stateData.selectedId)) || {}
    })
    
    const mapDispatchToProps = {
        cancelCallback: endEditing,
        saveCallback: (data) => saveAndEndEditing(data, dataType)
    }
    
    const mergeProps = (dataProps, functionProps, ownProps) => 
        ({ ...dataProps, ...functionProps, ...ownProps })
        
    return connect(mapStateToProps, mapDispatchToProps, 
        mergeProps)(presentationComponent);
}
