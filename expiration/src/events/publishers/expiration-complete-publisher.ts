import {
  Publisher,
  ExpirationCompleteEvent,
  Subjects,
} from '@rxdtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
