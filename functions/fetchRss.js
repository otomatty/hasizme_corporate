export async function onRequestGet(context) {
  const rssUrl = context.env.VITE_NOTE_RSS_URL;

  if (!rssUrl) {
    return new Response(
      JSON.stringify({ error: "RSS URL が設定されていません。" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }

  try {
    const response = await fetch(rssUrl);
    const xmlText = await response.text();

    return new Response(xmlText, {
      headers: {
        "Content-Type": "application/xml",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "RSSフィードの取得中にエラーが発生しました。" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
