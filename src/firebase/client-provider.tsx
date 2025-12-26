'use client';

import React from 'react';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

import { FirebaseProvider } from './provider';
import { firebaseConfig } from './config';

type FirebaseContextState = {
  app: FirebaseApp;
  auth: Auth;
  db: Firestore;
};

// We use a React Provider to initialize Firebase on the client
// and provide it to all children.
export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // By initializing inside a component, we ensure this code only runs
  // on the client.
  const firebase = React.useMemo(() => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);
    return { app, auth, db };
  }, []);

  return <FirebaseProvider {...firebase}>{children}</FirebaseProvider>;
}
