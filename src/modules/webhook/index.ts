import * as e from "express";

import { webhookEventHandler } from "../../services/webhooks";

const router = e.Router();

router.get("/", webhookEventHandler);
router.post("/", webhookEventHandler);
router.put("/", webhookEventHandler);
router.delete("/", webhookEventHandler);

export default router;