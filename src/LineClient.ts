import * as Line from "@line/bot-sdk";
import config from "./config";

export const lineClient = new Line.Client({ ...config.line });

export function replyText(token: string, msg: string | string[]) {
  const texts: string[] = Array.isArray(msg) ? msg : [msg];
  return lineClient.replyMessage(
    token,
    texts.map((text) => ({ type: "text", text }))
  );
}