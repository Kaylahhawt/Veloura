'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, CheckCircle2, Truck, Package, Heart, Copy, Check, Settings, ShieldCheck, ExternalLink, AlertTriangle, X } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

type EmailType = 'account_welcome' | 'order_confirmed' | 'dispatched' | 'out_for_delivery' | 'delivered';

interface MailgunStatus {
  configured: boolean;
  domain: string;
  fullDomain: string;
  host: string;
  from: string;
  isSandbox: boolean;
}

export function TransactionalEmailPreview() {
  const { user } = useAuth();
  const [selectedType, setSelectedType] = useState<EmailType>('account_welcome');
  const [testEmail, setTestEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendResult, setSendResult] = useState<{ success: boolean; message: string; simulated?: boolean; error?: string } | null>(null);

  // Mailgun Configuration Modal State
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [mailgunStatus, setMailgunStatus] = useState<MailgunStatus | null>(null);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [domainInput, setDomainInput] = useState('');
  const [hostInput, setHostInput] = useState('api.mailgun.net');
  const [fromInput, setFromInput] = useState('');
  const [isSavingConfig, setIsSavingConfig] = useState(false);
  const [configResult, setConfigResult] = useState<{ success: boolean; message: string } | null>(null);

  // Fetch Mailgun Status & Default Email
  const fetchStatus = async () => {
    try {
      const res = await fetch('/api/emails/status');
      if (res.ok) {
        const data: MailgunStatus = await res.json();
        setMailgunStatus(data);
        if (data.fullDomain && !domainInput) setDomainInput(data.fullDomain);
        if (data.host && hostInput === 'api.mailgun.net') setHostInput(data.host);
      }
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  useEffect(() => {
    if (user?.email && !testEmail) {
      setTestEmail(user.email);
    } else if (!testEmail) {
      setTestEmail('habiblawal0809@gmail.com');
    }
  }, [user]);

  const handleSendTestEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!testEmail) return;

    setIsSending(true);
    setSendResult(null);

    const templateMapping: Record<EmailType, string> = {
      account_welcome: 'account_welcome',
      order_confirmed: 'order_confirmation',
      dispatched: 'dispatch_notice',
      out_for_delivery: 'out_for_delivery',
      delivered: 'delivery_delivered',
    };

    try {
      const res = await fetch('/api/emails/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: testEmail,
          template: templateMapping[selectedType],
          customerName: user?.name || testEmail.split('@')[0],
          orderNumber: 'VL-84920',
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSendResult({
          success: true,
          message: data.message || 'Email successfully dispatched.',
          simulated: data.result?.simulated,
        });
      } else {
        setSendResult({
          success: false,
          message: data.error || data.details?.error || 'Failed to dispatch email via Mailgun.',
        });
      }
    } catch (err: any) {
      setSendResult({
        success: false,
        message: err.message || 'Network error communicating with email API endpoint.',
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleSaveMailgunConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKeyInput.trim() || !domainInput.trim()) {
      setConfigResult({
        success: false,
        message: 'Please provide both Mailgun API Key and Domain.',
      });
      return;
    }

    setIsSavingConfig(true);
    setConfigResult(null);

    try {
      const res = await fetch('/api/emails/configure', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          apiKey: apiKeyInput.trim(),
          domain: domainInput.trim(),
          host: hostInput.trim(),
          from: fromInput.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to save configuration');
      }

      setConfigResult({
        success: true,
        message: data.testMessage || 'Mailgun credentials saved successfully!',
      });

      await fetchStatus();
      setTimeout(() => {
        setShowConfigModal(false);
        setConfigResult(null);
      }, 1500);
    } catch (err: any) {
      setConfigResult({
        success: false,
        message: err.message || 'Error updating Mailgun configuration.',
      });
    } finally {
      setIsSavingConfig(false);
    }
  };

  const emailTemplates: Record<
    EmailType,
    { title: string; subject: string; trigger: string; content: React.ReactNode }
  > = {
    account_welcome: {
      title: 'Account Welcome & Privilege Voucher',
      subject: 'Welcome to Veloura | Confidential Sanctuary & 15% Privilege Voucher',
      trigger: 'Triggered upon successful Google Cloud OAuth login or account registration',
      content: (
        <div className="bg-[#FAF4F2] p-6 sm:p-8 max-w-xl mx-auto rounded-2xl border border-[#E8D6D4] text-[#1F0D1B] font-sans">
          <div className="text-center pb-6 border-b border-[#E8D6D4]">
            <h1 className="font-serif text-2xl tracking-[0.2em] text-[#2D1427] font-bold">VELOURA</h1>
            <p className="text-[10px] uppercase tracking-widest text-[#C5A059] mt-0.5">Welcome to Veloura</p>
            <p className="text-[11px] text-[#A85A62] mt-1">Haute lingerie, body-safe wellness & absolute privacy.</p>
          </div>

          <div className="py-6 space-y-4 text-xs leading-relaxed text-[#553846]">
            <p>Dear {user?.name || 'Valued Client'},</p>
            <p>
              Welcome to the private sanctuary of <strong>Veloura</strong>. Your account has been registered and secured. Whether you are exploring French Calais lace lingerie, sculpted liquid silicone devices, or curated romance sets, our atelier is dedicated to absolute discretion and sensory excellence.
            </p>

            <div className="bg-[#F5EAE6] border border-[#E8D6D4] rounded-xl p-4 space-y-2">
              <p className="text-[#A85A62] font-semibold text-[11px] uppercase tracking-wider m-0">
                🛡️ 4-Pillar Discretion Guarantee
              </p>
              <div className="text-[11px] text-[#553846] space-y-1">
                <p>• <strong>Masked Financial Statements:</strong> Billed neutrally as <strong>&apos;VL Retail&apos;</strong> with zero mention of intimacy.</p>
                <p>• <strong>100% Anonymous Packaging:</strong> Shipped in plain recyclable cartons without sensitive logos.</p>
                <p>• <strong>Medical Silicone & Silk:</strong> 100% body-safe certifications and Grade 6A Mulberry silk.</p>
                <p>• <strong>Tamper-Evident Handoff:</strong> Sealed with logistics security tape.</p>
              </div>
            </div>

            <div className="bg-[#FAF4F2] border border-dashed border-[#C5A059] rounded-xl p-4 text-center">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#A85A62] font-bold block mb-1">
                Inaugural Privilege Voucher
              </span>
              <span className="font-mono text-xl font-bold text-[#2D1427] tracking-[0.15em] block my-1">
                VELOURA15
              </span>
              <span className="text-[11px] text-[#705260] block">
                Enjoy 15% off your first order • Complimentary anonymous shipping on orders over $100
              </span>
            </div>

            <p className="text-center pt-2">
              <Link
                href="/shop"
                className="inline-block px-7 py-3 bg-[#2D1427] text-[#FAF4F2] text-[11px] uppercase tracking-[0.2em] font-semibold rounded-full border border-[#C5A059]"
              >
                Explore Collections
              </Link>
            </p>
          </div>

          <div className="pt-6 border-t border-[#E8D6D4] text-center text-[10px] text-[#9C7F8C]">
            <p className="font-semibold text-[#2D1427] m-0">VELOURA PRIVATE ATELIER</p>
            <p className="mt-1 m-0">All communications are sent with end-to-end privacy • concierge@veloura.luxury</p>
          </div>
        </div>
      ),
    },

    order_confirmed: {
      title: 'Order Confirmation Email',
      subject: 'Discreet Order Receipt: VL-84920 (Billed as VL Retail)',
      trigger: 'Triggered upon checkout order placement & payment authorization',
      content: (
        <div className="bg-[#FAF4F2] p-6 sm:p-8 max-w-xl mx-auto rounded-2xl border border-[#E8D6D4] text-[#1F0D1B] font-sans">
          <div className="text-center pb-6 border-b border-[#E8D6D4]">
            <h1 className="font-serif text-2xl tracking-[0.2em] text-[#2D1427] font-bold">VELOURA</h1>
            <p className="text-[10px] uppercase tracking-widest text-[#A85A62] mt-0.5">Order Receipt & Discreet Assurance</p>
          </div>

          <div className="py-6 space-y-4 text-xs leading-relaxed text-[#553846]">
            <p>Dear {user?.name || 'Valued Client'},</p>
            <p>Thank you for choosing Veloura. We have received your order <strong className="font-mono text-[#2D1427]">#VL-84920</strong> and our Paris atelier is preparing it for fulfillment.</p>

            <div className="p-4 bg-white rounded-xl border border-[#E8D6D4] space-y-1.5">
              <div className="text-[#A85A62] font-semibold text-[11px] uppercase tracking-wider mb-2">Important Discretion Notice</div>
              <p>• <strong>Bank Statement:</strong> Your charge appears neutrally as <strong>&apos;VL Retail&apos;</strong>.</p>
              <p>• <strong>Exterior Box:</strong> Shipped in an anonymous plain recyclable box with zero provocative imagery or brand logos.</p>
            </div>

            <div className="pt-2">
              <h4 className="font-semibold text-[#2D1427] mb-2">Itemized Summary</h4>
              <div className="border-t border-b border-[#EFE5E2] py-2 space-y-1.5">
                <div className="flex justify-between">
                  <span>Veloura Plum & French Chantilly Lace Bodysuit (S) × 1</span>
                  <span className="font-semibold">$165.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Aura Botanical Intimacy & Sensual Massage Elixir (50ml) × 1</span>
                  <span className="font-semibold">$58.00</span>
                </div>
                <div className="flex justify-between text-[#2B6E44]">
                  <span>Privilege Voucher (VELOURA10)</span>
                  <span>-$22.30</span>
                </div>
                <div className="flex justify-between font-bold text-[#2D1427] pt-1 border-t border-[#EFE5E2]">
                  <span>Total Amount Paid via Paystack</span>
                  <span>$200.70</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#705260] pt-2">
              You will receive a discreet dispatch notification with your carrier tracking code the moment this parcel is sealed.
            </p>
          </div>

          <div className="pt-6 border-t border-[#E8D6D4] text-center text-[10px] text-[#9C7F8C]">
            Veloura Intimates Atelier • concierge@veloura.luxury
          </div>
        </div>
      ),
    },

    dispatched: {
      title: 'Dispatch Notification Email',
      subject: 'Your Confidential Parcel is on its Way (Tracking #VLX-9048-2831-US)',
      trigger: 'Triggered when carrier collects parcel with tamper-evident seal',
      content: (
        <div className="bg-[#FAF4F2] p-6 sm:p-8 max-w-xl mx-auto rounded-2xl border border-[#E8D6D4] text-[#1F0D1B] font-sans">
          <div className="text-center pb-6 border-b border-[#E8D6D4]">
            <h1 className="font-serif text-2xl tracking-[0.2em] text-[#2D1427] font-bold">VELOURA</h1>
            <p className="text-[10px] uppercase tracking-widest text-[#A85A62] mt-0.5">Dispatched Under Plain Cover</p>
          </div>

          <div className="py-6 space-y-4 text-xs leading-relaxed text-[#553846]">
            <p>Dear {user?.name || 'Valued Client'},</p>
            <p>Your order <strong className="font-mono text-[#2D1427]">#VL-84920</strong> has been double-sealed in our anonymous packaging and handed to our logistics partner.</p>

            <div className="p-4 bg-white rounded-xl border border-[#E8D6D4] space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[#8C6D7D]">Carrier Partner:</span>
                <span className="font-semibold text-[#2D1427]">Veloura Express Discreet Logistics</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#8C6D7D]">Tracking Number:</span>
                <span className="font-mono font-bold text-[#A85A62]">VLX-9048-2831-US</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#8C6D7D]">Estimated Delivery:</span>
                <span className="font-semibold text-[#2D1427]">Within 3 Business Days</span>
              </div>
            </div>

            <p className="text-[11px] text-[#705260]">
              The outer package label contains only your delivery address and logistics barcode. Neither the courier nor handlers know the nature of the items.
            </p>
          </div>

          <div className="pt-6 border-t border-[#E8D6D4] text-center text-[10px] text-[#9C7F8C]">
            Veloura Intimates Atelier • concierge@veloura.luxury
          </div>
        </div>
      ),
    },

    out_for_delivery: {
      title: 'Out for Delivery Real-Time Alert',
      subject: 'Confidential Delivery Alert: Expected Today at Your Address',
      trigger: 'Triggered when local courier loads parcel for doorstep handoff',
      content: (
        <div className="bg-[#FAF4F2] p-6 sm:p-8 max-w-xl mx-auto rounded-2xl border border-[#E8D6D4] text-[#1F0D1B] font-sans">
          <div className="text-center pb-6 border-b border-[#E8D6D4]">
            <h1 className="font-serif text-2xl tracking-[0.2em] text-[#2D1427] font-bold">VELOURA</h1>
            <p className="text-[10px] uppercase tracking-widest text-[#A85A62] mt-0.5">Discreet Arrival Imminent</p>
          </div>

          <div className="py-6 space-y-4 text-xs leading-relaxed text-[#553846]">
            <p>Dear {user?.name || 'Valued Client'},</p>
            <p>Your unmarked parcel is currently on the delivery vehicle and scheduled to arrive today before 7:00 PM.</p>

            <div className="p-4 bg-[#FAF0ED] rounded-xl border border-[#E8D6D4] text-center">
              <span className="text-xs font-semibold text-[#2D1427] block">Standard Protocol:</span>
              <span className="text-[11px] text-[#705260] mt-1 block">
                The parcel will be deposited securely at your doorstep or front desk in an anonymous plain box.
              </span>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E8D6D4] text-center text-[10px] text-[#9C7F8C]">
            Veloura Intimates Atelier • concierge@veloura.luxury
          </div>
        </div>
      ),
    },

    delivered: {
      title: 'Delivery & Care Guide Email',
      subject: 'Delivered: Your Veloura Intimate Care Guide',
      trigger: 'Triggered upon successful doorstep delivery signature',
      content: (
        <div className="bg-[#FAF4F2] p-6 sm:p-8 max-w-xl mx-auto rounded-2xl border border-[#E8D6D4] text-[#1F0D1B] font-sans">
          <div className="text-center pb-6 border-b border-[#E8D6D4]">
            <h1 className="font-serif text-2xl tracking-[0.2em] text-[#2D1427] font-bold">VELOURA</h1>
            <p className="text-[10px] uppercase tracking-widest text-[#A85A62] mt-0.5">Delivered & Ready to Indulge</p>
          </div>

          <div className="py-6 space-y-4 text-xs leading-relaxed text-[#553846]">
            <p>Dear {user?.name || 'Valued Client'},</p>
            <p>Your order <strong className="font-mono text-[#2D1427]">#VL-84920</strong> has been safely delivered.</p>

            <div className="p-4 bg-white rounded-xl border border-[#E8D6D4] space-y-2">
              <span className="font-serif text-sm font-semibold text-[#2D1427] block">
                Silk & Wellness Longevity Tips
              </span>
              <p className="text-[11px] text-[#705260]">
                • <strong>Mulberry Silk Garments:</strong> Hand wash only in lukewarm water with gentle pH-neutral soap. Lay flat on towel to dry.
              </p>
              <p className="text-[11px] text-[#705260]">
                • <strong>Body-Safe Devices:</strong> Clean with warm water and anti-microbial foam. Fully dry before charging with the included magnetic contact cable.
              </p>
            </div>

            <p className="text-center pt-2">
              <Link
                href="/shop"
                className="inline-block px-6 py-2.5 bg-[#2D1427] text-white text-[11px] uppercase tracking-widest font-semibold rounded-full"
              >
                Explore More Curations
              </Link>
            </p>
          </div>

          <div className="pt-6 border-t border-[#E8D6D4] text-center text-[10px] text-[#9C7F8C]">
            Veloura Intimates Atelier • concierge@veloura.luxury
          </div>
        </div>
      ),
    },
  };

  const currentTemplate = emailTemplates[selectedType];

  return (
    <div className="bg-[#FAF4F2] min-h-screen py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#A85A62] font-semibold block mb-1">
            Transactional Email Engine • Mailgun REST API
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#2D1427]">
            Veloura Transactional Emails
          </h1>
          <p className="text-xs sm:text-sm text-[#705260] mt-2 max-w-lg mx-auto">
            Discreet confirmation, tracking alerts, and privilege vouchers dispatched automatically via Mailgun.
          </p>
        </div>

        {/* Mailgun Engine Status Banner */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl border transition-all shadow-sm bg-white border-[#E8D6D4]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start sm:items-center gap-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                  mailgunStatus?.configured
                    ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                    : 'bg-amber-100 text-amber-800 border border-amber-200'
                }`}
              >
                {mailgunStatus?.configured ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <AlertTriangle className="w-5 h-5" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-[#2D1427]">
                    {mailgunStatus?.configured ? 'Mailgun Live Delivery Active' : 'Mailgun in Simulation Mode'}
                  </h4>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      mailgunStatus?.configured
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-amber-50 text-amber-800 border border-amber-200'
                    }`}
                  >
                    {mailgunStatus?.configured ? 'Live API' : 'Simulator'}
                  </span>
                </div>
                <p className="text-xs text-[#705260] mt-0.5">
                  {mailgunStatus?.configured
                    ? `Emails are dispatched live via domain: ${mailgunStatus.domain} (Sender: ${mailgunStatus.from})`
                    : 'Live inbox delivery is paused because MAILGUN_API_KEY is not configured in .env.local.'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowConfigModal(true)}
              className="px-4 py-2 bg-[#2D1427] text-white hover:bg-[#431F3B] text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors self-start sm:self-auto"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>{mailgunStatus?.configured ? 'Edit Mailgun Keys' : 'Configure Mailgun'}</span>
            </button>
          </div>
        </div>

        {/* Template Selectors */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {(Object.keys(emailTemplates) as EmailType[]).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedType(key)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedType === key
                  ? 'bg-[#2D1427] text-white shadow-md'
                  : 'bg-white text-[#705260] border border-[#D9C4C2] hover:border-[#A85A62]'
              }`}
            >
              {emailTemplates[key].title.split(' Email')[0]}
            </button>
          ))}
        </div>

        {/* Template Metadata Box & Interactive Test Dispatch Bar */}
        <div className="bg-white rounded-3xl border border-[#E8D6D4] p-6 mb-8 shadow-sm text-xs text-[#553846] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[#8C6D7D]">Subject: </span>
              <strong className="text-[#2D1427]">{currentTemplate.subject}</strong>
            </div>
            <span className="bg-[#FAF0ED] text-[#A85A62] px-2.5 py-0.5 rounded-full font-semibold text-[10px] w-fit">
              Mailgun API v3 • /api/emails/send
            </span>
          </div>
          <div>
            <span className="text-[#8C6D7D]">Trigger Event: </span>
            <span className="font-mono text-[#2D1427]">{currentTemplate.trigger}</span>
          </div>

          {/* Interactive Test Dispatch Bar */}
          <div className="pt-3 border-t border-[#EFE5E2]">
            <form onSubmit={handleSendTestEmail} className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center">
              <div className="relative flex-1">
                <Mail className="w-3.5 h-3.5 text-[#9C7F8C] absolute left-3 top-3" />
                <input
                  type="email"
                  value={testEmail}
                  onChange={(e) => setTestEmail(e.target.value)}
                  placeholder="Enter email to test dispatch (e.g. your inbox)..."
                  className="w-full pl-9 pr-3 py-2 bg-[#FAF4F2] border border-[#D9C4C2] rounded-xl text-xs text-[#2D1427] focus:outline-none focus:border-[#C5A059]"
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="px-5 py-2 bg-[#2D1427] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#44223C] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isSending ? (
                  <>
                    <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending to Mailgun...
                  </>
                ) : (
                  'Dispatch Email'
                )}
              </button>
            </form>

            {sendResult && (
              <div
                className={`mt-3 p-3.5 rounded-xl text-xs font-medium border flex items-start gap-2.5 ${
                  sendResult.success
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : 'bg-red-50 text-red-800 border-red-200'
                }`}
              >
                {sendResult.success ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-semibold">{sendResult.message}</p>
                  {sendResult.simulated && (
                    <p className="text-[11px] text-emerald-700/80 mt-1">
                      💡 Note: Mailgun is currently in <strong>Simulator Mode</strong>. To receive this in your real inbox, click &ldquo;Configure Mailgun&rdquo; above and paste your Mailgun API Key and Domain.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Live Email Stage */}
        <div className="shadow-2xl rounded-3xl overflow-hidden">
          {currentTemplate.content}
        </div>
      </div>

      {/* CONFIGURATION MODAL */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="fixed inset-0 bg-[#140812]/70 backdrop-blur-sm transition-opacity"
            onClick={() => setShowConfigModal(false)}
          />

          <div className="min-h-screen px-3 sm:px-4 text-center flex items-center justify-center py-6 sm:py-12">
            <div className="relative inline-block w-full max-w-lg p-6 sm:p-8 text-left align-middle transition-all transform bg-[#FAF4F2] shadow-2xl rounded-2xl border border-[#E8D6D4] overflow-hidden z-10">
              <button
                onClick={() => setShowConfigModal(false)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-1.5 rounded-full text-[#7A5A6B] hover:bg-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center pb-3 border-b border-[#E8D6D4]">
                <div className="w-10 h-10 rounded-full bg-[#FAF0ED] text-[#A85A62] border border-[#E8D6D4] flex items-center justify-center mx-auto mb-2">
                  <Mail className="w-5 h-5 text-[#C5A059]" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A85A62] font-semibold block">
                  Mailgun REST API Integration
                </span>
                <h3 className="font-serif text-xl font-medium text-[#2D1427] mt-1">
                  Connect Live Mailgun Service
                </h3>
                <p className="text-xs text-[#705260] mt-1">
                  Deliver order confirmations and account privileges directly to real inboxes.
                </p>
              </div>

              {/* Step by step checklist & tips */}
              <div className="my-4 bg-white p-3.5 rounded-xl border border-[#E8D6D4] text-[11px] text-[#553846] space-y-2">
                <div className="font-semibold text-[#2D1427] flex items-center justify-between">
                  <span>Where to find Mailgun Credentials:</span>
                  <a
                    href="https://app.mailgun.com/settings/api_security"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#A85A62] hover:underline flex items-center gap-1 font-normal"
                  >
                    Mailgun Dashboard <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="m-0 text-[#705260]">
                  1. <strong>API Key:</strong> From <em>Settings &gt; API Security &gt; Primary account API key</em> (or Sending API Keys).
                </p>
                <p className="m-0 text-[#705260]">
                  2. <strong>Domain:</strong> From <em>Sending &gt; Domains</em> (e.g. <code>sandbox...mailgun.org</code> or your custom domain).
                </p>
                <div className="p-2 bg-[#FBF7F5] rounded border border-[#F0E2DF] text-[10px] text-[#705260]">
                  ⚠️ <strong>Sandbox note:</strong> If using a free <code>sandbox...mailgun.org</code> domain, Mailgun requires recipient emails to be added to <strong>Authorized Recipients</strong> in the Mailgun dashboard.
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSaveMailgunConfig} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#2D1427] mb-1">
                    Mailgun API Key <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    value={apiKeyInput}
                    onChange={(e) => setApiKeyInput(e.target.value)}
                    placeholder="key-xxxxxxxxxxxxxxxxxxxxxxxx or API key"
                    className="w-full px-3 py-2 bg-white border border-[#D9C4C2] rounded-xl text-xs text-[#2D1427] focus:outline-none focus:border-[#C5A059]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2D1427] mb-1">
                    Mailgun Domain <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={domainInput}
                    onChange={(e) => setDomainInput(e.target.value)}
                    placeholder="sandbox123456789.mailgun.org or mg.veloura.luxury"
                    className="w-full px-3 py-2 bg-white border border-[#D9C4C2] rounded-xl text-xs text-[#2D1427] focus:outline-none focus:border-[#C5A059]"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#2D1427] mb-1">
                      Region Host
                    </label>
                    <select
                      value={hostInput}
                      onChange={(e) => setHostInput(e.target.value)}
                      className="w-full px-2.5 py-2 bg-white border border-[#D9C4C2] rounded-xl text-xs text-[#2D1427] focus:outline-none focus:border-[#C5A059]"
                    >
                      <option value="api.mailgun.net">US (api.mailgun.net)</option>
                      <option value="api.eu.mailgun.net">EU (api.eu.mailgun.net)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#2D1427] mb-1">
                      Sender Name/Email
                    </label>
                    <input
                      type="text"
                      value={fromInput}
                      onChange={(e) => setFromInput(e.target.value)}
                      placeholder="Optional sender override"
                      className="w-full px-3 py-2 bg-white border border-[#D9C4C2] rounded-xl text-xs text-[#2D1427] focus:outline-none focus:border-[#C5A059]"
                    />
                  </div>
                </div>

                {configResult && (
                  <div
                    className={`p-3 rounded-xl text-xs font-medium border flex items-center gap-2 ${
                      configResult.success
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : 'bg-red-50 text-red-800 border-red-200'
                    }`}
                  >
                    {configResult.success ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    )}
                    <span>{configResult.message}</span>
                  </div>
                )}

                <div className="pt-2 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowConfigModal(false)}
                    className="flex-1 py-2.5 px-4 rounded-xl border border-[#D9C4C2] text-xs font-semibold text-[#553846] hover:bg-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSavingConfig}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#2D1427] text-white text-xs font-semibold hover:bg-[#431F3B] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSavingConfig ? (
                      <>
                        <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      'Save & Activate'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
