import React, { Component } from 'react';
import "../css/Student.css";

class Student extends Component {
    render() {
        return (
            <ul>
                <li>username: {this.props.student.username}</li>
                <li>password: {this.props.student.password}</li>
                <li>fullname: {this.props.student.fullname}</li>
                <li>gender: {this.props.student.gender}</li>
                <li>class: {this.props.student.class}</li>
                <li>count: {this.props.student.count}</li>
                <li>mark: {this.props.student.mark}</li>
            </ul>
        );
    }
}

export default Student;