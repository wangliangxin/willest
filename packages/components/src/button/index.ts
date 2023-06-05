/*
 * @Autor: wangliangxin3
 * @Email: wangliangxin3@jd.com
 * @Description: 
 * @Date: 2023-06-02 16:05:59
 * @LastEditors: wangliangxin3
 * @LastEditTime: 2023-06-02 16:45:58
 */

import _Button from "./button.vue";
import type { App, Plugin } from "vue";

type SFCWithInstall<T> = T & Plugin;

const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name;
    //注册组件
    app.component(name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
};

export const Button = withInstall(_Button);
export default Button;