import { service } from "mesg-js"
import { taskX } from "./tasks/taskX"

const MESG = service()

MESG.listenTask({
  taskX: taskX
})

MESG.emitEvent("started", { x: true })
