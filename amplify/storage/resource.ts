import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'innovative-storage-browser-poc',
  access: (allow) => ({
    'test-mailbox/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'write']),
    ]
  })
});