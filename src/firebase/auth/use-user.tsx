'use client';

import React from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';

import { useAuth } from '../provider';

type UserState = {
  user: User | null;
  loading: boolean;
};

export const useUser = (): UserState => {
  const auth = useAuth();
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth]);

  return { user, loading };
};
