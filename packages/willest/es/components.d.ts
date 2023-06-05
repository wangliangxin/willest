/*
 * @Autor: wangliangxin3
 * @Email: wangliangxin3@jd.com
 * @Description: 
 * @Date: 2023-06-02 16:55:04
 * @LastEditors: wangliangxin3
 * @LastEditTime: 2023-06-05 10:14:39
 */
import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    WlButton: typeof components.Button;
    WlIcon: typeof components.Icon;
  }
}
export {};

