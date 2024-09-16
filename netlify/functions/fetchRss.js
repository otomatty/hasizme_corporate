export async function onRequestGet() {
  const rssUrl = "https://note.com/your_company_account/rss";

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
