// Supabase Edge Function — Access Gate
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
    });
  }

  try {
    const { key } = await req.json();
    const accessKey = Deno.env.get("ACCESS_KEY");
    if (!accessKey) throw new Error("ACCESS_KEY not configured");

    if (key === accessKey) {
      const arr = new Uint8Array(32);
      crypto.getRandomValues(arr);
      const session = Array.from(arr, b => b.toString(16).padStart(2, '0')).join('') + '.' + Date.now();
      return new Response(JSON.stringify({ valid: true, session }), {
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    }

    return new Response(JSON.stringify({ valid: false }), {
      status: 401,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ valid: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
    });
  }
});
