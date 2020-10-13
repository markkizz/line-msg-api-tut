import { Request, Response } from "express";
import { MessageAPIResponseBase, WebhookRequestBody } from "@line/bot-sdk";
import * as _ from "lodash";

import { handleEvent } from "../EventHandler";

export function webhookEventHandler(
  req: Request<{[key: string]: string}, string, WebhookRequestBody>, 
  res: Response<string>
): MessageAPIResponseBase | void {
  // req.body.events should be an array of events
  console.log("----- Pass Service ------")
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  // handle events separately
  Promise.all(req.body.events.map((event) => {
    console.log("event", event);
    // check verify webhook event
    if (event.type === "message" && 
        (event.replyToken === "00000000000000000000000000000000" ||
        event.replyToken === "ffffffffffffffffffffffffffffffff")
    ) {
      return {};
    }
    return handleEvent(event);
  }))
    .then(() => res.end())
    .catch((err) => {
      console.error("[error]:", err);
      // res.status(500).end();
      res.json(err);
    });
  return {};
}