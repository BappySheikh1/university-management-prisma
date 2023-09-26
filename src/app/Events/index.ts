import initFacultyEvents from '../modules/Faculty/Faculty.events';
import initStudentEvents from '../modules/Student/student.events';

const subscribeToEvents = () => {
  initStudentEvents();
  initFacultyEvents();
};

export default subscribeToEvents;
