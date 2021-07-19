import React from "react";

const CourseForm = (props) => {
  return (
    <form onSubmit={props.addCourse}>
      <input type="text" value={props.current} onChange={props.handelChange} />
      <button type="submit">add course</button>
    </form>
  );
};

export default CourseForm;
