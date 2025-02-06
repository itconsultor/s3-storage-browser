import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
    name: 'innovative-storage-browser-poc',
    access: allow => ({
      'test-mailbox/*': [
        allow.guest.to(['get']),
        allow.authenticated.to(['get', 'write', 'list']),
        allow.groups(['admin']).to(['read', 'write', 'delete'])
      ]
    })
  });