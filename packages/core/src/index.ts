export interface User {
  id: string;
  name: string;
  email: string;
}

export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export const VERSION = '1.0.0';
