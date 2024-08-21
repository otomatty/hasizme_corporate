const fetch = require("node-fetch");
const { XMLParser } = require("fast-xml-parser");

exports.handler = async function (event, context) {
  try {
    const rssUrl = "https://note.com/saedgewell/m/md039ba1d97dd/rss"; // noteのマガジンRSS URL
    const response = await fetch(rssUrl);
    const xmlText = await response.text();
    const parser = new XMLParser();
    const result = parser.parse(xmlText);
    const items = result.rss.channel.item;

    return {
      statusCode: 200,
      body: JSON.stringify(items),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "RSSフィードの取得中にエラーが発生しました。",
      }),
    };
  }
};
