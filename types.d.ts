declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module 'util';

declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
}
