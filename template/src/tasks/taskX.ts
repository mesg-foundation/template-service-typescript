import { TaskInputs, TaskOutputs } from "mesg-js/lib/service"

const taskX = (inputs: TaskInputs, outputs: TaskOutputs): Promise<void> => {
  if (inputs.foo === "hello" && inputs.bar === "world") {
    return outputs.success({ message: "Hello world is valid" })
  }
  return outputs.error({ error: "invalid inputs" })
}
export { taskX }
