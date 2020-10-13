import { LocationEventMessage } from "@line/bot-sdk";
import { replyText } from "app/LineClient";

export function handleLocation(replyToken: string, msg?: LocationEventMessage) {
  return replyText(replyToken, "Got Location");
}