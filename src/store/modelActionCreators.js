import { ACADEMICS, DISTRIBUTIVES, OTHERS } from "./dataTypes"
import { STORE, UPDATE, DELETE } from "./modelActionTypes";
 
let idCounter = 100;

export const saveAcademic = (academic) => {
    return createSaveEvent(ACADEMICS, academic);
}

export const saveDistributive = (distributive) => {
    return createSaveEvent(DISTRIBUTIVES, distributive);
}

export const saveOther = (other) => {
    return createSaveEvent(OTHERS, other);
}

const createSaveEvent = (dataType, payload)  => {
    if (!payload.id) {
        return {
            type: STORE,
            dataType: dataType,
            payload: { ...payload, id: idCounter++ }
        }       
    } else {
        return {
            type: UPDATE,
            dataType: dataType,
            payload: payload
        }
    }
}

export const deleteAcademic = (academic) => ({
    type: DELETE,
    dataType: ACADEMICS,
    payload: academic.id
})

export const deleteDistributive = (distributive) => ({
    type: DELETE,
    dataType: DISTRIBUTIVES,
    payload: distributive.id
})

export const deleteOther = (other) => ({
    type: DELETE,
    dataType: OTHERS,
    payload: other.id
})
