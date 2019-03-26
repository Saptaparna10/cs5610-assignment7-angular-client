export class CourseService {

  findAllCourses = () =>
    fetch
    ('https://das-saptaparna-assignment5-jav.herokuapp.com/api/student/courses')
      .then(response => response.json())

  findCourseById = (courseId) =>
    fetch
    (`https://das-saptaparna-assignment5-jav.herokuapp.com/api/student/courses/${courseId}`)
      .then(response => response.json())

  findModulesForCourse = courseId =>
    fetch
    (`https://das-saptaparna-assignment5-jav.herokuapp.com/api/student/courses/${courseId}/modules`)
      .then(response => response.json())
}
