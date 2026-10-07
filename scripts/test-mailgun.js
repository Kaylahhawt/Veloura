// Quick script to verify live Mailgun dispatch
async function testEmail() {
  const recipient = process.argv[2] || 'habiblawal0809@gmail.com';
  console.log(`Testing Veloura Mailgun dispatch to ${recipient}...`);

  try {
    const res = await fetch('http://localhost:3000/api/emails/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: recipient,
        template: 'account_welcome',
        customerName: 'Habib Lawal',
      }),
    });

    const data = await res.json();
    console.log('Result:', JSON.stringify(data, null, 2));
  } catch (e) {
    console.error('Error:', e);
  }
}

testEmail();
