'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuth, useUser } from '@/firebase';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import React from 'react';

// This is a simplified SVG for the Google logo
const GoogleIcon = () => (
  <svg className="mr-2 h-5 w-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
    <path fill="currentColor" d="M488 261.8C488 403.3 381.5 512 244 512 111.8 512 0 398.2 0 256S111.8 0 244 0c69.8 0 130.8 28.1 174.9 73.1L355.2 137.2C328.7 112.9 290.4 98.4 244 98.4c-87.8 0-159.4 71.6-159.4 159.6s71.6 159.6 159.4 159.6c93.1 0 134.3-64.8 138.6-99.1H244v-73.4h239.1c2.4 12.8 3.9 26.5 3.9 41.5z"></path>
  </svg>
);

export default function LoginPage() {
  const loginBg = PlaceHolderImages.find(p => p.id === 'login-background');
  const auth = useAuth();
  const router = useRouter();
  const { user, loading } = useUser();
  const [isSigningIn, setIsSigningIn] = React.useState(false);

  const handleSignIn = async () => {
    if (!auth || isSigningIn) return;
    setIsSigningIn(true);

    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account',
    });

    try {
      await signInWithPopup(auth, provider);
      // Redirect handled by useEffect
    } catch (error) {
      if ((error as any).code !== 'auth/cancelled-popup-request') {
        console.error("Error signing in with Google", error);
      }
    } finally {
      setIsSigningIn(false);
    }
  };

  React.useEffect(() => {
    if (!loading && user) {
      router.push('/dashboard');
    }
  }, [user, loading, router]);
  
  if (loading || user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full font-headline">
      {loginBg && (
        <Image
          src={loginBg.imageUrl}
          alt={loginBg.description}
          data-ai-hint={loginBg.imageHint}
          fill
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-4">
        <div className="w-full max-w-md rounded-xl bg-card/80 p-8 text-center shadow-2xl backdrop-blur-lg">
          <h1 className="text-5xl font-bold text-primary-foreground">
            EduGate SMK
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Gerbang Digital Menuju Pendidikan Vokasi Unggul
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              className="w-full bg-card text-card-foreground hover:bg-card/90 text-lg py-7 shadow-lg transition-transform duration-200 hover:scale-105"
              onClick={handleSignIn}
              disabled={isSigningIn}
              >
              <GoogleIcon />
              {isSigningIn ? 'Processing...' : 'Masuk dengan Google'}
            </Button>
          </div>
          <p className="mt-8 text-xs text-primary-foreground/60">
            Dengan masuk, Anda menyetujui Syarat & Ketentuan dan Kebijakan Privasi kami.
          </p>
        </div>
      </div>
    </div>
  );
}
