import { AudioEventMessage } from "@line/bot-sdk";
import { replyText } from "app/LineClient";

export function handleAudio(replyToken: string, msg?: AudioEventMessage) {
  return replyText(replyToken, "Got Audio");
}