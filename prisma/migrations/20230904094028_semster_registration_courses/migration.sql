-- CreateTable
CREATE TABLE "students_semster_registration_courses" (
    "semesterRegistrationId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "offeredCourseId" TEXT NOT NULL,
    "offeredCourseSectionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "students_semster_registration_courses_pkey" PRIMARY KEY ("semesterRegistrationId","studentId","offeredCourseId")
);
