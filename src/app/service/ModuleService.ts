export class ModuleService {

  findAllModulesForCourse = (courseId) =>
    fetch
    (`https://das-saptaparna-assignment5-jav.herokuapp.com/api/student/courses/${courseId}/modules`)
      .then(response => response.json())

  findAllModules = () =>
    fetch
    (`https://das-saptaparna-assignment5-jav.herokuapp.com/api/student/modules`)
      .then(response => response.json())


  findModuleById = (mId) =>
    fetch
    (`https://das-saptaparna-assignment5-jav.herokuapp.com/api/modules/${mId}`)
      .then(response => response.json())

}
