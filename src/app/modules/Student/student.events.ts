import { RedisClient } from '../../../shared/redis';
import { EVENT_STUDENT_CREATED } from './Student.constant';
import { StudentService } from './Student.service';

const initStudentEvents = () => {
  RedisClient.subscribe(EVENT_STUDENT_CREATED, async (e: string) => {
    const data = JSON.parse(e);
    await StudentService.createStudentFromEvent(data);
  });

  RedisClient.subscribe(EVENT_STUDENT_CREATED, async (e: string) => {
    const data = JSON.parse(e);
    await StudentService.updateStudentFromEvent(data);
  });
};

export default initStudentEvents;
