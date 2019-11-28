import  Service  from "@mesg/service"
import { taskX } from "./tasks/taskX"

const mesg = new Service()

mesg.listenTask({
  taskX: taskX
})
  .on('error', (error) => console.error(error))

mesg.emitEvent("started", { x: true })
  .catch((error) => console.error(error))
