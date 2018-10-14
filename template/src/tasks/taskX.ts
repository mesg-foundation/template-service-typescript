import { TaskInputs, TaskOutputs, TaskOutputCallbackInput } from "mesg-js/lib/service";

interface Inputs extends TaskInputs {
  foo: string
  bar: string
}

interface Outputs extends TaskOutputs {
  success: (data: OutputsSuccess) => Promise<void>
  error: (data: OutputsError) => Promise<void>
}

interface OutputsSuccess extends TaskOutputCallbackInput {
  x: string
}

interface OutputsError extends TaskOutputCallbackInput {
  message: string
}

const taskX = (inputs: TaskInputs, outputs: TaskOutputs): Promise<void> => {
  if (inputs.foo === "hello" && inputs.bar === "world") {
    return outputs.success({ x: "Hello world is valid" })
  }
  return outputs.error({ message: "invalid inputs" })
}
export { taskX }