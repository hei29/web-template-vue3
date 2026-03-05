
import { createRequestInstance } from "./request-handler";

const flowMode = import.meta.env.VITE_FLOW_MODE || "readOnly";
const readOnlyControllApi: any = [];

const { get, post, put, deleteRequest } = createRequestInstance({
  preHook: (target, thisArg, argumentsList) => {
    const [argument] = argumentsList;
    const { url } = argument;
    if (
      flowMode === 'readOnly' &&
      ["post", "delete", "put"].includes(target.name) &&
      readOnlyControllApi.includes(url)
    ) {
      throw new Error("只读模式下禁止修改");
    }
    return;
  },
});

export {
    get,
    post,
    put,
    deleteRequest,
};