import { z } from 'zod';
import { academicSemesterCodes, academicSemesterMonths, academicSemesterTitles } from './academicSemester.constant';


const crateAcademicSemester = z.object({
  body: z.object({
    year: z.number({
      required_error: 'Year is required'
    }),
    title: z.enum([...(academicSemesterTitles as [string, ...string[]])], {
      required_error: 'Title is required'
    }),
    code: z.enum([...(academicSemesterCodes as [string, ...string[]])], {
      required_error: 'Code is required'
    }),
    startMonth: z.enum([...(academicSemesterMonths as [string, ...string[]])], {
      required_error: 'startMonth is required'
    }),
    endMonth: z.enum([...(academicSemesterMonths as [string, ...string[]])], {
      required_error: 'endMonth is required'
    })
  })
});

const update = z.object({
  body: z.object({
    title: z.enum([...(academicSemesterTitles as [string, ...string[]])]).optional(),
    code: z.enum([...(academicSemesterCodes as [string, ...string[]])]).optional(),
    year: z.string().optional(),
    startMonth: z.enum([...(academicSemesterMonths as [string, ...string[]])]).optional(),
    endMonth: z.enum([...(academicSemesterMonths as [string, ...string[]])]).optional()
  })
});

export const AcademicSemesterValidation = {
  crateAcademicSemester,
  update
};
