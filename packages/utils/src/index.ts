import { User, validateEmail } from '@myapp/core';

export function createUser(id: string, name: string, email: string): User | null {
  if (!validateEmail(email)) {
    return null;
  }
  return { id, name, email };
}

export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}
