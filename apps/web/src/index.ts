import { greet, VERSION } from '@myapp/core';
import { createUser, formatDate, generateId } from '@myapp/utils';

console.log(`App Version: ${VERSION}`);
console.log(greet('World'));

const user = createUser(generateId(), 'John Doe', 'john@example.com');

if (user) {
  console.log(`Created user: ${user.name} (${user.email})`);
}

console.log(`Today is: ${formatDate(new Date())}`);
