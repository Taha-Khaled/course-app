import React, { Component, Fragment } from "react";

class CourseList extends Component {
  state = {
    isEdit: false,
  };

  toggleState = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
    console.log(isEdit);
  };

  updateItem = (e) => {
    e.preventDefault();
    this.props.editCourses(this.props.index, this.input.value);
    this.toggleState();
  };

  renderCourse = () => {
    return (
      <li>
        <span>{this.props.details.name} </span>
        <button onClick={() => this.toggleState()}>Edit Course</button>
        <button onClick={() => this.props.deleteCourse(this.props.index)}>
          delete
        </button>
      </li>
    );
  };

  renderUpdateForm = () => {
    return (
      <form onSubmit={this.updateItem}>
        <input
          type="text"
          ref={(v) => {
            this.input = v;
          }}
          defaultValue={this.props.details.name}
        />
        <button>Update Course</button>
      </form>
    );
  };

  render() {
    let { isEdit } = this.state;
    return (
      <Fragment>
        {isEdit ? this.renderUpdateForm() : this.renderCourse()}
      </Fragment>
    );
  }
}

export default CourseList;
