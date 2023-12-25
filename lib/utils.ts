import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const secondsDiff = Math.floor((now.getTime() - createdAt.getTime()) / 1000);

  // Define time units in seconds
  const minute = 60;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;
  const year = 365 * day;

  // Calculate time difference
  if (secondsDiff < minute) {
    return `${secondsDiff} second${secondsDiff !== 1 ? 's' : ''} ago`;
  } else if (secondsDiff < hour) {
    const minutes = Math.floor(secondsDiff / minute);
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else if (secondsDiff < day) {
    const hours = Math.floor(secondsDiff / hour);
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else if (secondsDiff < week) {
    const days = Math.floor(secondsDiff / day);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  } else if (secondsDiff < month) {
    const weeks = Math.floor(secondsDiff / week);
    return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
  } else if (secondsDiff < year) {
    const months = Math.floor(secondsDiff / month);
    return `${months} month${months !== 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(secondsDiff / year);
    return `${years} year${years !== 1 ? 's' : ''} ago`;
  }
};

export const formatAndDivideNumber = (num: number): string => {
  if (num >= 1000000) {
    const formattedNum = (num / 1000000).toFixed(1)
    return `${formattedNum} M`
  } else if (num >= 1000) {
    const formattedNum = (num / 1000).toFixed(1)
    return `${formattedNum} K`
  } else {
    return num.toString()
  }
}