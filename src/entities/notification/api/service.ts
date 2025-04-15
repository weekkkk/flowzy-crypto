import type { NotificationGetBotConnectedReqDto, NotificationGetBotConnectedResDto } from "./interfaces";
import { $notification } from "./point";

export class NotificationService {
  static async getBotConnected(req: NotificationGetBotConnectedReqDto) {
    const res = $notification<NotificationGetBotConnectedResDto>(`/get-bot-connected?userId=${req.userId}`, {
      method: "GET",
    });
    return res;
  }
}
