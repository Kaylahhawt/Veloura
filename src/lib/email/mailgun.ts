import { Order } from '@/types';

export type EmailTemplateType =
  | 'account_welcome'
  | 'order_confirmation'
  | 'dispatch_notice'
  | 'out_for_delivery'
  | 'delivery_delivered';

export interface SendEmailPayload {
  to: string;
  template: EmailTemplateType;
  order?: Order;
  customerName?: string;
  trackingNumber?: string;
  trackingUrl?: string;
  carrier?: string;
}

export interface EmailDispatchResult {
  success: boolean;
  messageId?: string;
  simulated: boolean;
  error?: string;
  recipient: string;
  subject: string;
}

/**
 * Generate luxury responsive HTML email matching Veloura brand guidelines
 */
export function generateEmailHtml(
  template: EmailTemplateType,
  recipientEmail: string,
  order?: Order,
  customerNameOverride?: string,
  trackingCode?: string
): { subject: string; html: string; text: string } {
  const brandGold = '#C5A059';
  const brandDark = '#1F0D1B';
  const brandPlum = '#2D1427';
  const brandRose = '#A85A62';

  const customerName =
    customerNameOverride ||
    order?.shippingAddress.fullName ||
    recipientEmail.split('@')[0] ||
    'Valued Client';

  const tracking = trackingCode || order?.trackingNumber || (order ? `VLX-${order.orderNumber}` : 'VLX-DISCREET');

  let subject = '';
  let headline = '';
  let subheader = '';
  let statusBanner = '';
  let bodyContent = '';
  let showOrderReceipt = false;

  switch (template) {
    case 'account_welcome':
      subject = 'Welcome to Veloura | Confidential Sanctuary & 15% Privilege Voucher';
      headline = 'WELCOME TO VELOURA';
      subheader = 'Haute lingerie, body-safe wellness & absolute privacy.';
      statusBanner = `
        <div style="background-color: #F5EAE6; border: 1px solid #E8D6D4; border-radius: 8px; padding: 18px; margin: 20px 0;">
          <p style="margin: 0 0 8px 0; color: ${brandRose}; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 700;">
            🛡️ 4-Pillar Discretion Guarantee
          </p>
          <p style="margin: 0 0 6px 0; font-size: 12px; color: #553846; line-height: 1.6;">
            • <strong>Masked Financial Statements:</strong> Billed neutrally as <strong>&apos;VL Retail&apos;</strong> with zero mention of intimacy.<br/>
            • <strong>100% Anonymous Packaging:</strong> Shipped in plain recyclable cartons without sensitive logos.<br/>
            • <strong>Medical Silicone & Silk:</strong> 100% body-safe certifications and Grade 6A Mulberry silk.<br/>
            • <strong>Tamper-Evident Handoff:</strong> Sealed with logistics security tape.
          </p>
        </div>
      `;
      bodyContent = `
        <p style="margin: 0 0 16px 0; font-size: 13px; color: #553846; line-height: 1.7;">
          Dear ${customerName},<br/><br/>
          Welcome to the private sanctuary of <strong>Veloura</strong>. Your account has been registered and secured. Whether you are exploring French Calais lace lingerie, sculpted liquid silicone devices, or curated romance sets, our atelier is dedicated to absolute discretion and sensory excellence.
        </p>

        <div style="background-color: #FAF4F2; border: 1px dashed ${brandGold}; border-radius: 8px; padding: 16px; margin: 20px 0; text-align: center;">
          <span style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.25em; color: ${brandRose}; font-weight: 700; display: block; margin-bottom: 4px;">
            Inaugural Privilege Voucher
          </span>
          <span style="font-family: monospace; font-size: 20px; font-weight: 700; color: ${brandDark}; letter-spacing: 0.15em; display: block; margin: 6px 0;">
            VELOURA15
          </span>
          <span style="font-size: 11px; color: #705260;">
            Enjoy 15% off your first order • Complimentary anonymous shipping on orders over $100
          </span>
        </div>
      `;
      break;

    case 'order_confirmation':
      subject = `Discreet Order Receipt: ${order?.orderNumber || 'VL-CONFIRMED'} (Billed as VL Retail)`;
      headline = 'ORDER CONFIRMATION';
      subheader = 'Prepared with absolute discretion and precision.';
      statusBanner = `
        <div style="background-color: #F5EAE6; border: 1px solid #E8D6D4; border-radius: 8px; padding: 16px; margin: 20px 0;">
          <p style="margin: 0 0 6px 0; color: ${brandRose}; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 700;">
            🛡️ 100% Discreet Guarantee Confirmation
          </p>
          <p style="margin: 0; font-size: 12px; color: #553846; line-height: 1.6;">
            • <strong>Bank Statement:</strong> Masked as <strong>&apos;VL Retail&apos;</strong>.<br/>
            • <strong>Exterior Box:</strong> Shipped in an unmarked, recyclable outer carton with zero sensitive wording.
          </p>
        </div>
      `;
      bodyContent = `
        <p style="margin: 0 0 16px 0; font-size: 13px; color: #553846; line-height: 1.7;">
          Dear ${customerName},<br/><br/>
          Thank you for choosing Veloura. We have received your order <strong style="color: ${brandDark};">${order?.orderNumber}</strong>. Our atelier has commenced careful inspection and packing in plain packaging.
        </p>
      `;
      showOrderReceipt = !!order;
      break;

    case 'dispatch_notice':
      subject = `Your Confidential Parcel is on its Way (Tracking #${tracking})`;
      headline = 'DISPATCH NOTIFICATION';
      subheader = 'Enclosed under unmarked plain cover.';
      statusBanner = `
        <div style="background-color: #F5EAE6; border: 1px solid #E8D6D4; border-radius: 8px; padding: 16px; margin: 20px 0;">
          <p style="margin: 0 0 6px 0; color: ${brandRose}; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 700;">
            📦 Discreet Transit Status: Dispatched
          </p>
          <p style="margin: 0; font-size: 12px; color: #553846; line-height: 1.6;">
            Your parcel has been sealed with tamper-evident security tape. The shipping label lists the sender neutrally as <strong>&apos;Logistics Partner VL Hub&apos;</strong>.
          </p>
        </div>
      `;
      bodyContent = `
        <p style="margin: 0 0 16px 0; font-size: 13px; color: #553846; line-height: 1.7;">
          Dear ${customerName},<br/><br/>
          Your order <strong style="color: ${brandDark};">${order?.orderNumber}</strong> has been transferred to our courier partner. You may follow its confidential milestone updates using tracking code: <strong style="font-family: monospace; color: ${brandDark};">${tracking}</strong>.
        </p>
      `;
      showOrderReceipt = !!order;
      break;

    case 'out_for_delivery':
      subject = `Confidential Courier Alert: Out for Delivery Today (${order?.orderNumber || 'Veloura Parcel'})`;
      headline = 'OUT FOR DELIVERY';
      subheader = 'Direct handoff expected today.';
      statusBanner = `
        <div style="background-color: #F5EAE6; border: 1px solid #E8D6D4; border-radius: 8px; padding: 16px; margin: 20px 0;">
          <p style="margin: 0 0 6px 0; color: ${brandRose}; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 700;">
            🚚 Real-Time Courier Alert
          </p>
          <p style="margin: 0; font-size: 12px; color: #553846; line-height: 1.6;">
            Our local logistics courier is out for delivery. Package will be handed over in plain packaging without any disclosure of contents.
          </p>
        </div>
      `;
      bodyContent = `
        <p style="margin: 0 0 16px 0; font-size: 13px; color: #553846; line-height: 1.7;">
          Dear ${customerName},<br/><br/>
          Your parcel is onboard for final delivery today to your destination: <br/>
          <em style="color: #705260;">${order?.shippingAddress.addressLine1 || 'Destination Address'}, ${order?.shippingAddress.city || ''}, ${order?.shippingAddress.state || ''}</em>.
        </p>
      `;
      showOrderReceipt = !!order;
      break;

    case 'delivery_delivered':
      subject = `Delivered Confidentially: Order ${order?.orderNumber || ''} • Care & Usage Guide`;
      headline = 'DELIVERY CONFIRMED';
      subheader = 'Your Veloura pieces have arrived.';
      statusBanner = `
        <div style="background-color: #F5EAE6; border: 1px solid #E8D6D4; border-radius: 8px; padding: 16px; margin: 20px 0;">
          <p style="margin: 0 0 6px 0; color: #2B6E44; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 700;">
            ✓ Successfully Delivered
          </p>
          <p style="margin: 0; font-size: 12px; color: #553846; line-height: 1.6;">
            We trust your unboxing experience is entirely exquisite. Please review our silk care recommendations and silicone maintenance tips.
          </p>
        </div>
      `;
      bodyContent = `
        <p style="margin: 0 0 16px 0; font-size: 13px; color: #553846; line-height: 1.7;">
          Dear ${customerName},<br/><br/>
          Carrier records confirm that your discreet parcel for order <strong style="color: ${brandDark};">${order?.orderNumber}</strong> was safely completed.<br/><br/>
          <strong>Sensory & Care Tips:</strong><br/>
          • <em>Silk & Lace:</em> Cold gentle hand wash with pH-neutral silk detergent. Lay flat to dry away from heat.<br/>
          • <em>Liquid Silicone Devices:</em> Wash with warm water and antibacterial silicone cleaner before and after every use. Never use silicone-based lubricants with silicone devices.
        </p>
      `;
      showOrderReceipt = !!order;
      break;
  }

  // Items table HTML (only if order exists)
  const itemsHtml =
    order && order.items
      ? order.items
          .map(
            (item) => `
        <tr style="border-bottom: 1px solid #F0E2DF;">
          <td style="padding: 12px 0; font-size: 12px; color: #2D1427; font-weight: 600;">
            ${item.title} ${item.size ? `<span style="color: #8C6D7D; font-weight: 400;">(${item.size})</span>` : ''}
            <div style="font-size: 11px; color: #8C6D7D; font-weight: 400;">Qty: ${item.quantity}</div>
          </td>
          <td style="padding: 12px 0; text-align: right; font-size: 12px; color: #2D1427; font-weight: 600;">
            $${(item.price * item.quantity).toFixed(2)}
          </td>
        </tr>
      `
          )
          .join('')
      : '';

  const orderReceiptSection =
    showOrderReceipt && order
      ? `
      <div style="margin-top: 24px;">
        <h3 style="margin: 0 0 12px 0; font-family: Georgia, serif; font-size: 15px; color: ${brandDark};">
          Order Breakdown #${order.orderNumber}
        </h3>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
          ${itemsHtml}
        </table>

        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-top: 14px; font-size: 12px; color: #553846;">
          <tr>
            <td style="padding: 4px 0;">Subtotal</td>
            <td style="padding: 4px 0; text-align: right; font-weight: 600;">$${order.subtotal.toFixed(2)}</td>
          </tr>
          ${
            order.discountAmount > 0
              ? `
          <tr>
            <td style="padding: 4px 0; color: #2B6E44;">Privilege Voucher Discount</td>
            <td style="padding: 4px 0; text-align: right; color: #2B6E44; font-weight: 600;">-$${order.discountAmount.toFixed(2)}</td>
          </tr>`
              : ''
          }
          <tr>
            <td style="padding: 4px 0;">Discreet Insured Shipping</td>
            <td style="padding: 4px 0; text-align: right; font-weight: 600;">${order.shippingFee === 0 ? 'Complimentary ($0.00)' : `$${order.shippingFee.toFixed(2)}`}</td>
          </tr>
          <tr style="border-top: 1px solid #E8D6D4;">
            <td style="padding: 10px 0 4px 0; font-size: 14px; font-weight: 700; color: ${brandDark};">Total Paid</td>
            <td style="padding: 10px 0 4px 0; text-align: right; font-size: 14px; font-weight: 700; color: ${brandDark};">$${order.totalAmount.toFixed(2)}</td>
          </tr>
          <tr>
            <td colspan="2" style="font-size: 11px; color: #8C6D7D; padding-top: 2px;">
              Gateway: <strong>${order.paymentGateway}</strong> • Masked Descriptor: <strong>${order.billingDescriptor || 'VL Retail'}</strong>
            </td>
          </tr>
        </table>
      </div>
    `
      : '';

  const ctaUrl =
    template === 'account_welcome'
      ? `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/shop`
      : `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/tracking${order ? `?order=${order.orderNumber}` : ''}`;

  const ctaText = template === 'account_welcome' ? 'Explore Collections' : 'Access Discreet Tracking';

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #F4ECE9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #F4ECE9; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 16px; border: 1px solid #E8D6D4; overflow: hidden; box-shadow: 0 4px 20px rgba(45, 20, 39, 0.06);">
          
          <!-- Header -->
          <tr>
            <td style="background-color: ${brandPlum}; padding: 32px 24px; text-align: center; border-bottom: 2px solid ${brandGold};">
              <h1 style="margin: 0; font-family: Georgia, 'Times New Roman', serif; color: #FAF4F2; font-size: 26px; letter-spacing: 0.25em; font-weight: 400;">
                VELOURA
              </h1>
              <p style="margin: 6px 0 0 0; color: ${brandGold}; font-size: 10px; text-transform: uppercase; letter-spacing: 0.28em;">
                ${headline}
              </p>
              <p style="margin: 4px 0 0 0; color: #D9A5A8; font-size: 11px;">
                ${subheader}
              </p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 32px 28px; background-color: #FFFFFF;">
              ${bodyContent}
              ${statusBanner}
              ${orderReceiptSection}

              <!-- Button CTA -->
              <div style="text-align: center; margin-top: 32px;">
                <a href="${ctaUrl}"
                   style="display: inline-block; background-color: ${brandDark}; color: #FAF4F2; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.2em; padding: 14px 28px; border-radius: 9999px; text-decoration: none; border: 1px solid ${brandGold};">
                  ${ctaText}
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #FAF4F2; padding: 24px 28px; text-align: center; border-top: 1px solid #E8D6D4; font-size: 11px; color: #8C6D7D; line-height: 1.6;">
              <p style="margin: 0 0 6px 0; font-weight: 600; color: ${brandDark};">
                VELOURA PRIVATE ATELIER
              </p>
              <p style="margin: 0;">
                All communications are sent with end-to-end privacy.<br/>
                Concierge Inquiries: <a href="mailto:concierge@veloura.luxury" style="color: ${brandRose}; text-decoration: none;">concierge@veloura.luxury</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  const text = `
VELOURA - ${headline}
${subheader}

Recipient: ${customerName}
${order ? `Order: ${order.orderNumber}\nTotal: $${order.totalAmount.toFixed(2)}\nTracking Code: ${tracking}\nMasked Statement: ${order.billingDescriptor || 'VL Retail'}\n` : ''}
Discreet Guarantee:
Shipped in unmarked packaging. Masked on bank statement as 'VL Retail'.
Portal: ${ctaUrl}
  `.trim();

  return { subject, html, text };
}

/**
 * Dispatch transactional email via Mailgun API or sandbox simulation
 */
export async function sendMailgunEmail(payload: SendEmailPayload): Promise<EmailDispatchResult> {
  const { to, template, order, customerName, trackingNumber } = payload;
  const { subject, html, text } = generateEmailHtml(template, to, order, customerName, trackingNumber);

  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const host = process.env.MAILGUN_HOST || 'api.mailgun.net'; // or api.eu.mailgun.net
  let from = process.env.MAILGUN_FROM;
  if (!from || (domain && domain.includes('sandbox') && !from.includes(domain))) {
    from = domain
      ? `Veloura Intimates Concierge <postmaster@${domain}>`
      : 'Veloura Intimates Concierge <concierge@veloura.luxury>';
  }

  // Check if live credentials exist
  const hasLiveMailgun = Boolean(apiKey && domain && !apiKey.includes('xxxxxxxx'));

  if (!hasLiveMailgun) {
    console.log(`[Mailgun Simulator] ⚠️ NOTICE: LIVE MAILGUN_API_KEY OR MAILGUN_DOMAIN NOT CONFIGURED IN .env.local`);
    console.log(`[Mailgun Simulator] -> To: ${to}`);
    console.log(`[Mailgun Simulator] -> Subject: ${subject}`);
    console.log(`[Mailgun Simulator] -> Template: ${template} ${order ? `| Order: ${order.orderNumber}` : ''}`);

    return {
      success: true,
      simulated: true,
      messageId: `sim_mg_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`,
      recipient: to,
      subject,
    };
  }

  try {
    const authString = Buffer.from(`api:${apiKey}`).toString('base64');
    const formData = new URLSearchParams();
    formData.append('from', from);
    formData.append('to', to);
    formData.append('subject', subject);
    formData.append('html', html);
    formData.append('text', text);

    const apiUrl = `https://${host}/v3/${domain}/messages`;
    console.log(`[Mailgun Live Dispatch] Posting to ${apiUrl} for recipient ${to}...`);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${authString}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    const data = await response.json().catch(() => ({ message: response.statusText || `HTTP ${response.status}` }));

    if (!response.ok) {
      console.error('[Mailgun API Error Response]', data);
      return {
        success: false,
        simulated: false,
        error: data.message || `Mailgun API rejected with status ${response.status}`,
        recipient: to,
        subject,
      };
    }

    console.log(`[Mailgun Live Dispatch Success] Message ID: ${data.id}`);

    return {
      success: true,
      simulated: false,
      messageId: data.id,
      recipient: to,
      subject,
    };
  } catch (error: any) {
    console.error('[Mailgun Exception]', error);
    return {
      success: false,
      simulated: false,
      error: error.message || 'Unknown network error occurred while dispatching via Mailgun',
      recipient: to,
      subject,
    };
  }
}
