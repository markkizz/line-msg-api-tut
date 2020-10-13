import { WebhookEvent } from "@line/bot-sdk";
import { replyText } from "app/LineClient";
import { handleAudio } from "./audio";
import { handleImage } from "./image";
import { handleText } from "./message";
import { handleVideo } from "./video";
import { handleLocation } from "./location";
import { handleSticker } from "./sticker";

// callback function to handle a single event
export function handleEvent(event: WebhookEvent) {
  switch (event.type) {
    case "message":
      const message = event.message;
      switch (message.type) {
        case "text":
          return handleText(event.replyToken, message);
        case "image":
          return handleImage(event.replyToken, message);
        case "video":
          return handleVideo(event.replyToken, message);
        case "audio":
          return handleAudio(event.replyToken, message);
        case "location":
          return handleLocation(event.replyToken, message);
        case "sticker":
          return handleSticker(event.replyToken, message);
        default:
          throw new Error(`Unknown message: ${JSON.stringify(message)}`);
      }

    case "follow":
      return replyText(event.replyToken, "Got followed event");

    case "unfollow":
      return console.log(`Unfollowed this bot: ${JSON.stringify(event)}`);

    case "join":
      return replyText(event.replyToken, `Joined ${event.source.type}`);

    case "leave":
      return console.log(`Left: ${JSON.stringify(event)}`);

    case "postback":
      const data = event.postback.data;
      return replyText(event.replyToken, `Got postback: ${data}`);

    case "beacon":
      const dm = `${Buffer.from(event.beacon.dm || "", "hex").toString("utf8")}`;
      return replyText(event.replyToken, `${event.beacon.type} beacon hwid : ${event.beacon.hwid} with device message = ${dm}`);

    default:
      throw new Error(`Unknown event: ${JSON.stringify(event)}`);
  }
}