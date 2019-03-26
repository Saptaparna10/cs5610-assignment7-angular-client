export class CourseService {

  findAllCourses = () =>
    fetch
    ('http://localhost:8080/api/student/courses')
      .then(response => response.json())

  findCourseById = (courseId) =>
    fetch
    (`http://localhost:8080/api/student/courses/${courseId}`)
      .then(response => response.json())

  findModulesForCourse = courseId =>
    fetch
    (`http://localhost:8080/api/student/courses/${courseId}/modules`)
      .then(response => response.json())
}
