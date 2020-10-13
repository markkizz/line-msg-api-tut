import { ImageEventMessage } from "@line/bot-sdk";
import { replyText } from "app/LineClient";

export function handleImage(replyToken: string, msg?: ImageEventMessage) {
  return replyText(replyToken, "Got Image");
}