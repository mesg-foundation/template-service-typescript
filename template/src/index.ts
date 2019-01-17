import { service } from "mesg-js"
import { taskX } from "./tasks/taskX"

const mesg = service()

mesg.listenTask({
  taskX: taskX
})
  .on('error', (error) => console.error(error))

mesg.emitEvent("started", { x: true })
  .catch((error) => console.error(error))
