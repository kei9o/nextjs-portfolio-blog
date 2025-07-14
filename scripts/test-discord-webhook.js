const fetch = require('node-fetch');

const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

if (!webhookUrl) {
  console.error('DISCORD_WEBHOOK_URL is not set. Please set it in your .env.local file.');
  process.exit(1);
}

const testMessage = {
  embeds: [
    {
      title: 'Webhook Test',
      description: 'This is a test message from the test script.',
      color: 0x7289da, // Discord blurple
      timestamp: new Date().toISOString(),
    },
  ],
};

const sendTestMessage = async () => {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testMessage),
    });

    if (response.ok) {
      console.log('Test message sent successfully!');
    } else {
      console.error('Failed to send test message:', await response.text());
    }
  } catch (error) {
    console.error('Error sending test message:', error);
  }
};

sendTestMessage();
