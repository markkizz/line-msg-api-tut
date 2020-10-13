import { StickerEventMessage } from "@line/bot-sdk";
import { replyText } from "app/LineClient";

export function handleSticker(replyToken: string, msg?: StickerEventMessage) {
  return replyText(replyToken, "Got Sticker");
}