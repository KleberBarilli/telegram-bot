import { Job } from "bull";
import { SendMessageController } from "../../controllers/SendMessage";

export default {
  key: "SendDelayedMessageJob",
  options: { delay: 60000 }, // delay de 1 minuto em millisegundos
  async handle(job: Job) {
    new SendMessageController().sendMessage(-1001807511152, job.data.msg.text);
  },
};
