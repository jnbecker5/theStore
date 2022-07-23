import { DISTRIBUTIVES, OTHERS } from "./dataTypes";
import { saveAcademic, saveDistributive, saveOther } from "./modelActionCreators";
import { endEditing } from "./stateActions";

export const saveAndEndEditing = (data, dataType) => 
    [dataType === DISTRIBUTIVES ? saveDistributive(data) : (dataType === OTHERS ? saveOther(data) : saveAcademic(data)), endEditing()];
