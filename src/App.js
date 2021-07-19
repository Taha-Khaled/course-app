import React, { Component } from "react";
import CourseForm from "./components/Form/form";
import CourseList from "./components/List/list";
import "./App.css";

class App extends Component {
  state = {
    courses: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "PHP" },
      { name: "Nodejs" },
    ],
    current: "",
  };

  handelChange = (e) => {
    this.setState({
      current: e.target.value,
    });
  };
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let { courses } = this.state;
    if (current !== "") {
      courses.push({ name: current });
      console.log(current);
      this.setState({
        courses,
        current: "",
      });
    }
  };

  deleteCourse = (index) => {
    console.log(index);
    let { courses } = this.state;
    courses.splice(index, 1);
    this.setState({
      courses,
    });
  };
  editCourses = (index, value) => {
    let { courses } = this.state;
    let course = courses[index];
    course["name"] = value;
    this.setState({
      courses,
    });
  };
  render() {
    const { courses } = this.state;
    const courseList = courses.map((course, index) => {
      return (
        <CourseList
          deleteCourse={this.deleteCourse}
          details={course}
          key={index}
          index={index}
          editCourses={this.editCourses}
        />
      );
    });

    return (
      <section className="App">
        <h2>add courses</h2>

        <CourseForm
          handelChange={this.handelChange}
          addCourse={this.addCourse}
          current={this.state.current}
        />
        <ul>{courseList.length > 0 ? courseList : "ther's no item to show"}</ul>
      </section>
    );
  }
}

export default App;
