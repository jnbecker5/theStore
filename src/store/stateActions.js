import { ACADEMICS, DISTRIBUTIVES, OTHERS } from "./dataTypes";

export const STATE_START_EDITING = "state_start_editing";
export const STATE_END_EDITING = "state_end_editing";
export const STATE_START_CREATING = "state_start_creating";

export const startEditingAcademic = (academic) => ({
    type: STATE_START_EDITING,
    dataType: ACADEMICS,
    payload: academic
})

export const startEditingDistributive = (distributive) => ({
    type: STATE_START_EDITING,
    dataType: DISTRIBUTIVES,
    payload: distributive
})

export const startEditingOther = (other) => ({
    type: STATE_START_EDITING,
    dataType: OTHERS,
    payload: other
})

export const endEditing = () => ({
    type: STATE_END_EDITING
})

export const startCreatingAcademic = () => ({
    type: STATE_START_CREATING, dataType: ACADEMICS
})

export const startCreatingDistributive = () => ({
    type: STATE_START_CREATING, dataType: DISTRIBUTIVES
})

export const startCreatingOther = () => ({
    type: STATE_START_CREATING, dataType: OTHERS
})
