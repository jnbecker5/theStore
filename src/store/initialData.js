import { ACADEMICS, DISTRIBUTIVES, OTHERS } from "./dataTypes";

export const initialData = {
    modelData: {
        [ACADEMICS]: [
            {id: 1, description: "First Year Experience", semester: "", prefix: "FYE", number: "", grade: ""},
            {id: 2, description: "English Composition I", semester: "", prefix: "WRT", number: "120", grade: ""},
            {id: 3, description: "English Composition II", semester: "", prefix: "WRT", number: "200", grade: ""},
            {id: 4, description: "Mathematics", semester: "", prefix: "MAT", number: "151", grade: ""},
            {id: 5, description: "Interdisciplinary", semester: "", prefix: "", number: "", grade: ""},
            {id: 6, description: "Diverse Communities", semester: "", prefix: "", number: "", grade: ""}],
        [DISTRIBUTIVES]: [
            {id: 1, description: "Science I", semester: "", prefix: "", number: "", grade: ""},
            {id: 2, description: "Science II", semester: "", prefix: "", number: "", grade: ""},
            {id: 3, description: "Behavior & Social Science I", semester: "", prefix: "", number: "", grade: ""},
            {id: 4, description: "Behavior & Social Science II", semester: "", prefix: "", number: "", grade: ""},
            {id: 5, description: "Humanity I", semester: "", prefix: "", number: "", grade: ""},
            {id: 6, description: "Humanity II", semester: "", prefix: "", number: "", grade: ""},
            {id: 7, description: "Art", semester: "", prefix: "", number: "", grade: ""}],
        [OTHERS]: [
            {id: 1, description: "Writing Emphasis I", semester: "", prefix: "", number: "", grade: ""},
            {id: 2, description: "Writing Emphasis III", semester: "", prefix: "", number: "", grade: ""},
            {id: 3, description: "Writing Emphasis III", semester: "", prefix: "", number: "", grade: ""},
            {id: 4, description: "Speaking Emphasis I", semester: "", prefix: "", number: "", grade: ""},
            {id: 5, description: "Speaking Emphasis II", semester: "", prefix: "", number: "", grade: ""},
            {id: 6, description: "Speaking Emphasis III", semester: "", prefix: "", number: "", grade: ""}],        
    },
    stateData: {
        editing: false,
        selectedId: -1,
        selectedType: DISTRIBUTIVES
    }
}
