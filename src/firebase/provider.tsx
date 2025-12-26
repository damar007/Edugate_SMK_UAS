'use client';

import React from 'react';
import { FirebaseApp } from 'firebase/app';
import { Auth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';

// Create a context for the Firebase instances.
const FirebaseContext = React.createContext<{
  app: FirebaseApp;
  auth: Auth;
  db: Firestore;
} | null>(null);

// The provider component will wrap the app and provide the Firebase instances.
export function FirebaseProvider({
  app,
  auth,
  db,
  children,
}: {
  app: FirebaseApp;
  auth: Auth;
  db: Firestore;
  children: React.ReactNode;
}) {
  return (
    <FirebaseContext.Provider value={{ app, auth, db }}>
      {children}
    </FirebaseContext.Provider>
  );
}

// These hooks can be used by any component to get the Firebase instances.
export const useFirebaseApp = () =>
  React.useContext(FirebaseContext)?.app ?? null;
export const useAuth = () => React.useContext(FirebaseContext)?.auth ?? null;
export const useFirestore = () =>
  React.useContext(FirebaseContext)?.db ?? null;
