import express from 'express';
import { SemesterRegistrationController } from './semesterRegistration.controller';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterRegistrationValidation } from './semesterRegistration.validation';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', SemesterRegistrationController.getAllFromDB);
router.get('/:id', SemesterRegistrationController.getByIdFromDB);

router.post("/semester-registration",
auth(ENUM_USER_ROLE.STUDENT),
SemesterRegistrationController.startRegistration)

router.post(
    '/',
    validateRequest(SemesterRegistrationValidation.create),
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    SemesterRegistrationController.insertIntoDB
);

router.patch(
    '/:id',
    validateRequest(SemesterRegistrationValidation.update),
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    SemesterRegistrationController.updateOneInDB
);

router.delete(
    '/:id',
    auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
    SemesterRegistrationController.deleteByIdFromDB
);

router.post(
    "/enroll-into-course",
    auth(ENUM_USER_ROLE.STUDENT),
    SemesterRegistrationController.enrollIntoCourse
    )

export const SemesterRegistrationRoutes = router;
