'use client';

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { X, Lock, ShieldCheck, Mail, ArrowRight, Settings, ExternalLink, Check, Copy } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const { loginWithGoogle, loginWithEmail } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'signin' | 'register'>('signin');

  // Google Cloud Console Configuration State
  const [showGoogleSetup, setShowGoogleSetup] = useState(false);
  const [clientIdInput, setClientIdInput] = useState('');
  const [clientSecretInput, setClientSecretInput] = useState('');
  const [isSavingConfig, setIsSavingConfig] = useState(false);
  const [configSuccess, setConfigSuccess] = useState(false);
  const [configError, setConfigError] = useState('');
  const [copiedUri, setCopiedUri] = useState(false);

  if (!isOpen) return null;

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
      onSuccess?.();
      onClose();
    } catch (err: any) {
      if (err.message === 'GOOGLE_CONFIG_REQUIRED') {
        setShowGoogleSetup(true);
      } else {
        alert(err.message || 'Unable to connect to Google Cloud Console.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSaveGoogleCredentials = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientIdInput.trim() || !clientSecretInput.trim()) {
      setConfigError('Please provide both Client ID and Client Secret.');
      return;
    }

    setIsSavingConfig(true);
    setConfigError('');

    try {
      const res = await fetch('/api/auth/configure', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          googleClientId: clientIdInput.trim(),
          googleClientSecret: clientSecretInput.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to save configuration');
      }

      setConfigSuccess(true);
      setTimeout(async () => {
        // Automatically proceed with Google sign in
        try {
          await loginWithGoogle();
        } catch (e: any) {
          setConfigError(e.message || 'Failed to redirect to Google.');
          setIsSavingConfig(false);
        }
      }, 1000);
    } catch (err: any) {
      setConfigError(err.message || 'Error updating .env.local');
      setIsSavingConfig(false);
    }
  };

  const handleCopyRedirectUri = () => {
    const uri = `${window.location.origin}/api/auth/google/callback`;
    navigator.clipboard.writeText(uri);
    setCopiedUri(true);
    setTimeout(() => setCopiedUri(false), 2000);
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await loginWithEmail(email);
      onSuccess?.();
      onClose();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-[#140812]/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-screen px-3 sm:px-4 text-center flex items-center justify-center py-6 sm:py-12">
        <div className="relative inline-block w-full max-w-md p-5 sm:p-8 text-left align-middle transition-all transform bg-[#FAF4F2] shadow-2xl rounded-2xl border border-[#E8D6D4] overflow-hidden z-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-1.5 rounded-full text-[#7A5A6B] hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* VIEW A: Google Cloud Console Setup Guidance */}
          {showGoogleSetup ? (
            <div className="space-y-4">
              <div className="text-center pb-2 border-b border-[#E8D6D4]">
                <div className="w-10 h-10 rounded-full bg-[#FAF0ED] text-[#A85A62] border border-[#E8D6D4] flex items-center justify-center mx-auto mb-2">
                  <Settings className="w-5 h-5 text-[#C5A059]" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A85A62] font-semibold block">
                  Google Cloud Console Link
                </span>
                <h3 className="font-serif text-xl font-medium text-[#2D1427] mt-1">
                  Connect Google OAuth 2.0
                </h3>
                <p className="text-xs text-[#705260] mt-1">
                  Link your real Google account credentials to authenticate via Google Cloud Console.
                </p>
              </div>

              {/* Step by step checklist */}
              <div className="bg-white p-3.5 rounded-xl border border-[#E8D6D4] text-[11px] text-[#553846] space-y-2">
                <div className="font-semibold text-[#2D1427] flex items-center justify-between">
                  <span>Setup Steps:</span>
                  <a
                    href="https://console.cloud.google.com/apis/credentials"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A85A62] inline-flex items-center gap-1 hover:underline"
                  >
                    Open Console <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p>1. In Google Cloud Console, create an <strong>OAuth 2.0 Client ID</strong> (Web application).</p>
                <p>2. Add <strong>Authorized JavaScript Origin</strong>: <code className="bg-gray-100 px-1 py-0.5 rounded text-[10px]">http://localhost:3000</code></p>
                <div className="pt-1">
                  <span className="block mb-1">3. Add <strong>Authorized Redirect URI</strong>:</span>
                  <div className="flex items-center justify-between bg-[#FAF4F2] p-1.5 rounded border border-[#E8D6D4] font-mono text-[10px]">
                    <span className="truncate">{typeof window !== 'undefined' ? `${window.location.origin}/api/auth/google/callback` : '/api/auth/google/callback'}</span>
                    <button
                      type="button"
                      onClick={handleCopyRedirectUri}
                      className="ml-2 text-[#A85A62] hover:text-[#2D1427] flex items-center gap-1 flex-shrink-0"
                    >
                      {copiedUri ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Direct Input Form to save to .env.local */}
              <form onSubmit={handleSaveGoogleCredentials} className="space-y-3 pt-1">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#705260] font-medium mb-1">
                    Google Client ID
                  </label>
                  <input
                    type="text"
                    required
                    value={clientIdInput}
                    onChange={(e) => setClientIdInput(e.target.value)}
                    placeholder="xxxxxxxx.apps.googleusercontent.com"
                    className="w-full px-3 py-2 bg-white border border-[#D9C4C2] rounded-xl text-xs text-[#2D1427] focus:outline-none focus:border-[#C5A059] font-mono text-[11px]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#705260] font-medium mb-1">
                    Google Client Secret
                  </label>
                  <input
                    type="password"
                    required
                    value={clientSecretInput}
                    onChange={(e) => setClientSecretInput(e.target.value)}
                    placeholder="GOCSPX-xxxxxxxxxxxxxxxx"
                    className="w-full px-3 py-2 bg-white border border-[#D9C4C2] rounded-xl text-xs text-[#2D1427] focus:outline-none focus:border-[#C5A059] font-mono text-[11px]"
                  />
                </div>

                {configError && (
                  <p className="text-xs text-red-600 font-medium">{configError}</p>
                )}

                {configSuccess && (
                  <p className="text-xs text-emerald-600 font-medium flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" /> Saved! Redirecting to Google Login...
                  </p>
                )}

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowGoogleSetup(false)}
                    className="flex-1 py-2.5 bg-white border border-[#D9C4C2] text-[#705260] text-xs font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSavingConfig || configSuccess}
                    className="flex-1 py-2.5 bg-[#2D1427] text-white text-xs uppercase tracking-wider font-semibold rounded-xl hover:bg-[#44223C] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {isSavingConfig ? 'Connecting...' : 'Save & Sign In'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* VIEW B: Normal Sign-in / Register Modal */
            <>
              {/* Brand header */}
              <div className="text-center mb-6">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#A85A62] font-semibold">
                  The Intimate Club
                </span>
                <h3 className="font-serif text-2xl font-medium text-[#2D1427] mt-1">
                  Welcome to Veloura
                </h3>
                <p className="text-xs text-[#705260] mt-1.5">
                  Sign in with your Google account for seamless orders, private wishlist sync, and discreet delivery tracking.
                </p>
              </div>

              {/* Social Sign-in button (Google) */}
              <a
                href="/api/auth/google/login?returnTo=/account"
                className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white border border-[#D9C4C2] rounded-xl text-xs font-semibold text-[#2D1427] hover:bg-[#FFF] hover:shadow-md transition-all mb-4 cursor-pointer"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-[#2D1427] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                )}
                Continue with Google
              </a>

              <div className="relative my-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#E8D6D4]"></div>
                </div>
                <div className="relative flex justify-center text-[11px] uppercase tracking-wider">
                  <span className="bg-[#FAF4F2] px-3 text-[#9C7F8C]">Or with private email</span>
                </div>
              </div>

              {/* Email Form */}
              <form onSubmit={handleEmailAuth} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#705260] font-medium mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#9C7F8C] absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#D9C4C2] rounded-xl text-xs text-[#2D1427] placeholder-[#9C7F8C] focus:outline-none focus:border-[#A85A62]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#705260] font-medium mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-[#9C7F8C] absolute left-3 top-3" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#D9C4C2] rounded-xl text-xs text-[#2D1427] placeholder-[#9C7F8C] focus:outline-none focus:border-[#A85A62]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#2D1427] text-white text-xs uppercase tracking-widest font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-[#44223C] transition-colors mt-2"
                >
                  {loading ? 'Processing...' : mode === 'signin' ? 'Sign In Securely' : 'Create Intimate Account'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>

              {/* Mode Switch */}
              <div className="text-center mt-4">
                <button
                  onClick={() => setMode(mode === 'signin' ? 'register' : 'signin')}
                  className="text-xs text-[#A85A62] hover:underline"
                >
                  {mode === 'signin'
                    ? "Don't have an account yet? Create one"
                    : 'Already have an account? Sign in'}
                </button>
              </div>

              {/* Discreet Reassurance Badge */}
              <div className="mt-6 pt-4 border-t border-[#E8D6D4] flex items-center gap-2 text-[11px] text-[#705260]">
                <ShieldCheck className="w-4 h-4 text-[#A85A62] flex-shrink-0" />
                <span>
                  Your intimacy is protected. No product names appear on bank or external records.
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
