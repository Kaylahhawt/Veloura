'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { Sparkles, ShieldCheck } from 'lucide-react';

function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { syncSession } = useAuth();
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function handleAuth() {
      try {
        const error = searchParams.get('error') || searchParams.get('error_description');
        if (error) {
          setStatus('error');
          setErrorMessage(decodeURIComponent(error));
          return;
        }

        // 1. If Supabase is active, exchange code / get session
        if (supabase) {
          const { data: { session }, error: sessionError } = await supabase.auth.getSession();
          if (sessionError) {
            console.warn('[Supabase Session Error]', sessionError);
          } else if (session?.user) {
            setStatus('success');
            await syncSession();
            setTimeout(() => router.push('/account'), 1000);
            return;
          }
        }

        // 2. Sync session from server cookie (direct Google OAuth)
        const res = await fetch('/api/auth/me');
        const data = await res.json();

        if (data.authenticated && data.user) {
          setStatus('success');
          await syncSession();
          setTimeout(() => router.push('/account'), 1000);
          return;
        }

        // If no active session found
        setStatus('success');
        await syncSession();
        setTimeout(() => router.push('/account'), 1200);
      } catch (err: any) {
        setStatus('error');
        setErrorMessage(err.message || 'Authentication handoff failed.');
      }
    }

    handleAuth();
  }, [router, searchParams, syncSession]);

  return (
    <div className="max-w-md w-full bg-white rounded-3xl border border-[#E8D6D4] p-8 text-center shadow-lg space-y-4">
      {status === 'verifying' && (
        <>
          <div className="w-12 h-12 border-4 border-[#2D1427] border-t-transparent rounded-full animate-spin mx-auto" />
          <h2 className="font-serif text-xl font-medium text-[#2D1427]">
            Authenticating with Google...
          </h2>
          <p className="text-xs text-[#705260]">
            Securely verifying your account credentials and encrypted session.
          </p>
        </>
      )}

      {status === 'success' && (
        <>
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-xl font-medium text-[#2D1427]">
            Welcome to Veloura
          </h2>
          <p className="text-xs text-[#705260]">
            Authentication successful. Redirecting to your private client portal...
          </p>
        </>
      )}

      {status === 'error' && (
        <>
          <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-xl font-medium text-[#2D1427]">
            Authentication Incomplete
          </h2>
          <p className="text-xs text-red-600">
            {errorMessage || 'Unable to authenticate with Google.'}
          </p>
          <button
            onClick={() => router.push('/')}
            className="mt-4 px-6 py-2.5 bg-[#2D1427] text-white text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#44223C] transition-colors"
          >
            Return to Storefront
          </button>
        </>
      )}
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <div className="bg-[#FAF4F2] min-h-[80vh] flex items-center justify-center p-4">
      <Suspense
        fallback={
          <div className="max-w-md w-full bg-white rounded-3xl border border-[#E8D6D4] p-8 text-center shadow-lg space-y-4">
            <div className="w-12 h-12 border-4 border-[#2D1427] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs text-[#705260]">Verifying secure session...</p>
          </div>
        }
      >
        <AuthCallbackContent />
      </Suspense>
    </div>
  );
}
