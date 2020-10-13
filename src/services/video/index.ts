import { VideoEventMessage } from "@line/bot-sdk";
import { replyText } from "app/LineClient";

export function handleVideo(replyToken: string, msg?: VideoEventMessage) {
  return replyText(replyToken, "Got Video");
}