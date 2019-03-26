export class ModuleService {

  findAllModulesForCourse = (courseId) =>
    fetch
    (`https://das-saptaparna-assignment5-jav.herokuapp.com/api/student/courses/${courseId}/modules`)
      .then(response => response.json())

}
