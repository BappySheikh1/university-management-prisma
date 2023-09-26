import { RedisClient } from '../../../shared/redis';
import { EVENT_FACULTY_CREATED } from './Faculty.contants';
import { FacultyService } from './Faculty.service';

const initFacultyEvents = async () => {
  RedisClient.subscribe(EVENT_FACULTY_CREATED, async (e: string) => {
    const data = JSON.parse(e);
    await FacultyService.createFacultyFromEvent(data);
  });

  RedisClient.subscribe(EVENT_FACULTY_CREATED, async (e: string) => {
    const data = JSON.parse(e);
    await FacultyService.updateFacultyFromEvent(data);
  });
};

export default initFacultyEvents;
