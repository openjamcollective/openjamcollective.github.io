
import * as Module from './interfaces';

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
  
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    };
  
    const formatter = new Intl.DateTimeFormat('en-US', options);
  
    return formatter.format(date);
}
export const sortEventsByDate = (arr: Module.EventProps[]) => {
    return arr.sort((a, b) => {
      // Sort the dates in descending order (latest first)
      var time_a: number = getLatestDate(a.date).getTime();
      var time_b: number = getLatestDate(b.date).getTime();
      return time_b - time_a;
    });
  };

export const getLatestDate = (dates: Date[]) => {
    return dates.reduce((latest, current) => {
      // If the current date is later than the latest date, return the current date
      // Otherwise, return the latest date
      return current > latest ? current : latest;
    }, dates[0]);
  };

export const facebook = "https://www.facebook.com/";
export const event = "events/";
export const fb_event = facebook + event;
export const instagram = "https://www.instagram.com/";

export enum MediaType {
    Normal,
    Series,
    Program
}
  
  