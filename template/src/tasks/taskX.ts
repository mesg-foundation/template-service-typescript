import { TaskInputs } from "mesg-js/lib/service"

const taskX = (inputs: TaskInputs) => {
  if (inputs.foo !== "hello" || inputs.bar !== "world") {
    throw new Error("invalid inputs")
  }
  return {
    message: "Hello world is valid"
  }
}
export { taskX }
