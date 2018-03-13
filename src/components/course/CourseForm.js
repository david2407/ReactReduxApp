import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
      name="tittle"
      label="Title"
      value={course.title}
      onChange={onChange}
      error={errors.title}
      />

      <SelectInput

      />

      <TextInput

      />

      <TextInput

      />

    </form>
  );
};

CourseForm.PropTypes = {
  course: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default CourseForm;
