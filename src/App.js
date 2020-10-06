import React, { Component } from "react";
import * as firebase from "firebase";
import Login from "./components/Login";
import Student from "./components/Student";
import "./App.css";
 // eslint-disable-next-line
import { FirebaseConfig } from "./api/FirebaseConfig";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: null
    }
  }
  
  checkLoginStatus() {
    if (this.state.student) {
      return <Student student={this.state.student}/>
    }
    return <Login checkUser={(account) => this.checkUser(account)}/>;
  }

  async checkUser(account) {
    const promise = new Promise((resolve, reject) => {
      const data = firebase.database().ref("students");
      data.on("value", (data) => {
          let students = [];
          data.forEach((student) => {
              students.push({
                  username: student.key,
                  password: student.val().password,
                  fullname: student.val().fullname,
                  gender: parseInt(student.val().gender),
                  class: student.val().class,
                  count: student.val().count,
                  mark: student.val().mark,
              })
          });
          resolve(students)
      })
    })
    // đợi cho đến khi promise resolves (*)
    
    const result = await promise;
    // lấy được kết quả (students).

    // Đối chiếu username và password.
    const student = result.filter((student) => account.username === student.username)[0];
    if(student){
      if(student.password === account.password){
        alert("Đăng nhập thành công.");
        this.setState({student: student});
      } else alert("Sai mật khẩu.")
    } else alert("Tài khoản không tồn tại")
  }

  render() {
    return (
      <div className="App">
        {this.checkLoginStatus()}
      </div>
    )
  }
}

export default App;