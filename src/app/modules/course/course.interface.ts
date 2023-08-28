export type ICourseCreateData = {
  title: string;
  code: string;
  credits: number;
  preRequisiteCourses: IPrerequisiteCourseRequest[];
};

export type IPrerequisiteCourseRequest = {
  courseId: string;
  isDeleted?: null;
};
export type IPrerequisiteCourse = {
  courseId: string;
  isDeleted: string;
};
export type ICourseFilterRequest = {
  searchTerm?: string | undefined;
};
