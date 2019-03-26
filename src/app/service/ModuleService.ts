export class ModuleService {

  findAllModulesForCourse = (courseId) =>
    fetch
    (`http://localhost:8080/api/student/courses/${courseId}/modules`)
      .then(response => response.json())

}
