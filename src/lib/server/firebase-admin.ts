import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert('src/lib/service-account.json')
  });
}

export const auth = admin.auth();
