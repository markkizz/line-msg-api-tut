import { TextEventMessage } from "@line/bot-sdk";
import { replyText } from "app/LineClient";

export function handleText(replyToken: string, message?: TextEventMessage) {
  return replyText(replyToken, message.text);
}