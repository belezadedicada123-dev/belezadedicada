export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const PIXEL_ID = '1081546237433193';
  const ACCESS_TOKEN = 'EAAWA9CBIiHYBRT2N6ZBi5rUwaRjZC28AQNuqIVwALOYxB4iYHi5VgJyWD84t512fonfnXPdlNnNdMhZBxmMds8bUEL3bWkHRf45ziCePyuVFGYAduZCvdtWsyviyldxqlltOu1mCQtFmIDfinZCEuxPbBuhURkoScoX6FedjvEBIglU9FyZBVshJqg0HNfggZDZD';
  const url = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`;

  const clientIpAddress = req.headers['x-forwarded-for'] || req.socket?.remoteAddress;
  const clientUserAgent = req.headers['user-agent'];
  
  const { eventName, eventUrl, fbp, fbc } = req.body;

  const payload = {
    data: [
      {
        event_name: eventName || 'PageView',
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: eventUrl || 'https://belezadedicada.com/',
        user_data: {
          client_ip_address: clientIpAddress,
          client_user_agent: clientUserAgent,
          fbp: fbp || undefined,
          fbc: fbc || undefined,
        },
      },
    ],
  };

  try {
    const fbResponse = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    
    const result = await fbResponse.json();
    return res.status(200).json({ success: true, result });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
