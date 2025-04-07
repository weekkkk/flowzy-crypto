import type { HelloGetMessageResDto } from "./interfaces";
import { $hello } from "./point";

export class HelloService {
  static async getMessage() {
    const res = await $hello<HelloGetMessageResDto>("/get-message");
    return res;
  }
}
