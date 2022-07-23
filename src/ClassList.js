import React, { Component } from 'react';
import { DistributiveDisplay } from './DistributiveDisplay';
import { OtherDisplay } from './OtherDisplay';
import { AcademicDisplay } from './AcademicDisplay';
import { BrowserRouter, NavLink, Routes, Route} from "react-router-dom";

export default class ClassList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            academics: [
                {id: 1, description: "First Year Experience", semester: "", prefix: "FYE", number: "", grade: ""},
                {id: 2, description: "English Composition I", semester: "", prefix: "WRT", number: "120", grade: ""},
                {id: 3, description: "English Composition II", semester: "", prefix: "WRT", number: "200", grade: ""},
                {id: 4, description: "Mathematics", semester: "", prefix: "MAT", number: "151", grade: ""},
                {id: 5, description: "Interdisciplinary", semester: "", prefix: "", number: "", grade: ""},
                {id: 6, description: "Diverse Communities", semester: "", prefix: "", number: "", grade: ""}
            ],
            distributives: [
                {id: 1, description: "Science I", semester: "", prefix: "", number: "", grade: ""},
                {id: 2, description: "Science II", semester: "", prefix: "", number: "", grade: ""},
                {id: 3, description: "Behavior & Social Science I", semester: "", prefix: "", number: "", grade: ""},
                {id: 4, description: "Behavior & Social Science II", semester: "", prefix: "", number: "", grade: ""},
                {id: 5, description: "Humanity I", semester: "", prefix: "", number: "", grade: ""},
                {id: 6, description: "Humanity II", semester: "", prefix: "", number: "", grade: ""},
                {id: 7, description: "Art", semester: "", prefix: "", number: "", grade: ""}
            ],
            others: [
                {id: 1, description: "Writing Emphasis I", semester: "", prefix: "", number: "", grade: ""},
                {id: 2, description: "Writing Emphasis III", semester: "", prefix: "", number: "", grade: ""},
                {id: 3, description: "Writing Emphasis III", semester: "", prefix: "", number: "", grade: ""},
                {id: 4, description: "Speaking Emphasis I", semester: "", prefix: "", number: "", grade: ""},
                {id: 5, description: "Speaking Emphasis II", semester: "", prefix: "", number: "", grade: ""},
                {id: 6, description: "Speaking Emphasis III", semester: "", prefix: "", number: "", grade: ""}
            ]
        }
        this.idCounter = 100;
    }

    saveData = (collection, item) => {
        if (item.id === "") {
            item.id = this.idCounter++;
            this.setState(state => state[collection] 
                = state[collection].concat(item));
        } else {
            this.setState(state => state[collection] 
                = state[collection].map(stored => 
                      stored.id === item.id ? item: stored))
        } 
    }

    deleteData = (collection, item) => {
        this.setState(state => state[collection] 
            = state[collection].filter(stored => stored.id !== item.id));
    }

    render() {
        return <div>
            <h2 className="bg-primary text-white text-center m-2 p-4">
            Display GenEd Courses
            </h2>

            <BrowserRouter>
                <div>
                    <NavLink to="/Academic" className="btn btn-sm m-2">Academic Foundation</NavLink> | {" "}
                    <NavLink to="/Distributive" className="btn btn-sm m-2">Distributive</NavLink> | {" "}
                    <NavLink to="/Other" className="btn btn-sm m-2">Other Courses</NavLink>
                    <hr        
                        style={{
                        background: 'black',
                        color: 'black',
                        borderColor: 'black',
                        height: '5px'
                    }}/>
                </div>
               <Routes>
               <Route path="/Academic" element={
                    <AcademicDisplay
                    name="Academics"
                    academics={ this.state.academics }
                    saveCallback={ a => this.saveData("academics", a) }
                    deleteCallback={ a => this.deleteData("academics", a) } />} />
                <Route path="/Distributive" element={
                    <DistributiveDisplay 
                    name="Distributives"
                    distributives={ this.state.distributives }
                    saveCallback={ d => this.saveData("distributives", d) }
                    deleteCallback={ d => this.deleteData("distributives", d) } />} />
                <Route path="/Other" element={
                    <OtherDisplay
                    name="Others"
                    others={ this.state.others }
                    saveCallback={ o => this.saveData("others", o) }
                    deleteCallback={ o => this.deleteData("others", o) } />} />
                  
                </Routes> 
            </BrowserRouter>
        </div>
    }
}
