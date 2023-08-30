import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { OfferedCourseSectionService } from './offeredCourseSection.service';
import pick from '../../../shared/pick';
import { offeredCourseSectionFilterableFields } from './offeredCourseSection.constant';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseSectionService.insertIntoDB(req.body);
  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Offered Course Section created",
      data: result
  })
})

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, offeredCourseSectionFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);
  const result = await OfferedCourseSectionService.getAllFromDB(filters, options);
  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'OfferedCourseSections fetched successfully',
      meta: result.meta,
      data: result.data
  });
})

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await OfferedCourseSectionService.getByIdFromDB(id);
  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'OfferedCourseSection fetched successfully',
      data: result
  });
})

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await OfferedCourseSectionService.updateOneInDB(id, req.body);
  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'OfferedCourseSection updated successfully',
      data: result
  });
})

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await OfferedCourseSectionService.deleteByIdFromDB(id);
  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'OfferedCourseSection deleted successfully',
      data: result
  });
})


export const OfferedCourseSectionController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB
}