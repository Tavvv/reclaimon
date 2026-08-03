export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/notify") {
      if (request.method !== "POST") {
        return Response.json({ ok: false, error: "method_not_allowed" }, { status: 405 });
      }
      try {
        const data = await request.json().catch(() => null);
        const email = ((data && data.email) || "").trim().toLowerCase();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 254) {
          return Response.json({ ok: false, error: "invalid_email" }, { status: 400 });
        }
        await env.SIGNUPS.prepare(
          "INSERT OR IGNORE INTO signups (email, created_at, source) VALUES (?, ?, ?)"
        )
          .bind(email, new Date().toISOString(), (data && data.source) || "website")
          .run();
        return Response.json({ ok: true });
      } catch (e) {
        return Response.json({ ok: false, error: "server_error" }, { status: 500 });
      }
    }

    const res = await env.ASSETS.fetch(request);
    if (res.status === 404 && request.method === "GET") {
      return env.ASSETS.fetch(new URL("/index.html", request.url));
    }
    return res;
  }
};
