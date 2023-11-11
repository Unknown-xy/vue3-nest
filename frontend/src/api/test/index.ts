import { get } from "@/utils/http/axios";
import { Response } from "@/utils/http/axios/type";

enum URL {
  todo = "/posts",
}

/**
 * @description: 用户登录
 * @params {LoginData} params
 * @return {Promise}
 */

export const getTodos = async () =>
  get<Response>({ url: URL.todo });
