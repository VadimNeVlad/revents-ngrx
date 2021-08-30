import { Attendees } from './attendees';

export interface Event {
  id: number;
  uid?: string;
  title: string;
  author: string;
  cancelEvent: boolean;
  category: string;
  city: string;
  description: string;
  venue: string;
  createAt: Date;
  eventDate: Date | string;
  attendees?: Attendees;
}
