export default {
  fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/.well-known/matrix/client") {
      return new Response(
        JSON.stringify({
          "m.homeserver": {
            "base_url": "https://matrix.azomv.xyz"
          }
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    return new Response("Not Found", { status: 404 });
  }
};
