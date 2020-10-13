import App from "./Application";
import logger from "./Logger";

App.listen(process.env.PORT || 3000, () => {
  logger.info(`server started on port ${process.env.PORT} (${process.env.NODE_ENV})`);
});