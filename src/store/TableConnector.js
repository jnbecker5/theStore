import { connect } from "react-redux";
import { startEditingDistributive, startEditingOther, startEditingAcademic } from "./stateActions";
import { deleteDistributive, deleteOther, deleteAcademic } from "./modelActionCreators";
import { DISTRIBUTIVES, OTHERS, ACADEMICS } from "./dataTypes";

export const TableConnector = (dataType, presentationComponent) => {

    const mapStateToProps = (storeData) => ({
        distributives: storeData.modelData[DISTRIBUTIVES],
        academics: storeData.modelData[ACADEMICS],
        others: storeData.modelData[OTHERS]
    })
    
    const mapDispatchToProps = {
        editCallback: dataType === ACADEMICS ? startEditingAcademic
        : (dataType === DISTRIBUTIVES ? startEditingDistributive : startEditingOther),
        deleteCallback: dataType === ACADEMICS ? deleteAcademic
        : (dataType === DISTRIBUTIVES ? deleteDistributive : deleteOther)
    }

    return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);
}
