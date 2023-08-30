import express from 'express';
import { OfferedCourseController } from '../OfferedCourse/offeredCourse.controller';

const router = express.Router();

router.post('/', OfferedCourseController.insertIntoDB);

export const OfferedCourseSectionRouter = router;
