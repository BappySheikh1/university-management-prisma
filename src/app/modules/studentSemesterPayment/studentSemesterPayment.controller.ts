import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { studentSemesterPaymentFilterableFields } from "./studentSemesterPayment.constant";
import httpStatus from "http-status";
import pick from "../../../shared/pick";
import { StudentSemesterPaymentService } from "./studentSemesterPayment.service";

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, studentSemesterPaymentFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await StudentSemesterPaymentService.getAllFromDB(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Student semester payment fetched successfully',
        meta: result.meta,
        data: result.data
    });
});

export const StudentSemesterPaymentController = {
    getAllFromDB,
};