import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
    name: 'innovative-storage-browser-poc',
    access: allow => ({
      'test-mailbox/*': [
        allow.guest.to(['get']),
        allow.groups(['admin']).to(['read', 'write', 'delete']),
        allow.groups(['read']).to(['read']),
        allow.groups(['editor']).to(['read','write']),
      ]
    })
  });