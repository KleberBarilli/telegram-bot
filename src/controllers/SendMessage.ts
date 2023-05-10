import TelegramBot from "node-telegram-bot-api";
import Queue from "../redis/Queue";
const bot = new TelegramBot(process.env.TOKEN || "", { polling: true });
const chatsIds = [-1001807511152, -1001629842613];

export class SendMessageController {
  public handle() {
    bot.on("message", (msg) => {
      for (const chatId of chatsIds) {
        if (chatId === -1001807511152) {
          Queue.add("SendDelayedMessageJob", { msg });
        } else {
          this.sendMessage(chatId, msg.text as string);
        }
      }
    });
  }

  public sendMessage(chatId: number, message: string) {
    return bot.sendMessage(chatId, message);
  }
}
