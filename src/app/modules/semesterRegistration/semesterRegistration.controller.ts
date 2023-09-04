import { Request, Response } from "express"
import catchAsync from "../../../shared/catchAsync"
import { SemesterRegistrationService } from "./semesterRegistration.service";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import pick from "../../../shared/pick";
import { semesterRegistrationFilterableFields } from "./semesterRegistration.constants";

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
    const result = await SemesterRegistrationService.insertIntoDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Semester Registration created",
        data: result
    })
})

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const filters = pick(req.query, semesterRegistrationFilterableFields);
    const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
    const result = await SemesterRegistrationService.getAllFromDB(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'SemesterRegistrations fetched successfully',
        meta: result.meta,
        data: result.data
    });
})

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await SemesterRegistrationService.getByIdFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'SemesterRegistration fetched successfully',
        data: result
    });
})

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await SemesterRegistrationService.updateOneInDB(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'SemesterRegistration updated successfully',
        data: result
    });
})


const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await SemesterRegistrationService.deleteByIdFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'SemesterRegistration deleted successfully',
        data: result
    });
})

const startRegistration = catchAsync(async(req:Request,res:Response)=>{
    const user = (req.body).user;
    const result = await SemesterRegistrationService.startMyRegistration(user.userId)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Student SemesterRegistration Started successfully',
        data: result
    });
})

const enrollIntoCourse = catchAsync(async(req:Request,res:Response)=>{
   
    const user = (req as any).user;
    const result = await SemesterRegistrationService.enrollIntoCourse(user.userId,req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Student SemesterRegistration course enrolled successfully',
        data: result
    });
})

export const SemesterRegistrationController = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    updateOneInDB,
    deleteByIdFromDB,
    startRegistration,
    enrollIntoCourse
}