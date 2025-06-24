'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../lib/firebase'; // adjust path if needed

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        if (pathname === '/') {
          router.push('/login');
        }
      }
      setCheckingAuth(false);
    });

    return () => unsubscribe();
  }, [router, pathname]);

  if (checkingAuth) {
    return <div className="h-screen flex items-center justify-center text-gray-600">Checking login...</div>;
  }

  // If logged in, show the page
  return isLoggedIn ? <>{children}</> : null;
}
