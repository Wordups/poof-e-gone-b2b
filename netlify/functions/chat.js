exports.handler = async function(event) {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }
  
    const { messages } = JSON.parse(event.body);
  
    const SYSTEM_PROMPT = "You are a helpful assistant for Poof E Gone, a Baltimore-based business electronics pickup and secure data destruction service. We pick up via courier — customer never goes anywhere. Courier included for Baltimore metro. We serve law firms, medical offices, accounting firms, property managers, IT departments. Services: data wiping, physical destruction, recycling, PC repair. We issue Certificates of Data Destruction. No minimum quantity. 24hr turnaround. Phone: (202) 596-1361. Keep responses 2-4 sentences. Never make up pricing — direct to intake form for quotes.";
  
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 300,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages]
      })
    });
  
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ reply: data.choices[0].message.content })
    };
  };