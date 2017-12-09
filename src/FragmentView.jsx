import React from 'react';

function StudentsTable({ children }) {
  return (
    <table className="table">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Age</th>
        <th>Major</th>
      </tr>
      {children}
    </table>
  );
}

function StudentColumns({ student }) {
  return (
    <React.Fragment>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.gender}</td>
      <td>{student.age}</td>
      <td>{student.major}</td>
    </React.Fragment>
  );
}

const students = [
  { id: 1, name: 'Spiderman', gender: 'M', age: 17, major: 'Computer Science' },
  { id: 2, name: 'Batman', gender: 'M', age: 40, major: 'Computer Science' },
  { id: 3, name: 'Captain America', gender: 'M', age: 35, major: 'Computer Science' },
];

export default function FragmentView() {
  return (
    <StudentsTable>
      {students.map(student => (
        <tr>
          <StudentColumns student={student} />
        </tr>
      ))}
    </StudentsTable>
  );
}
