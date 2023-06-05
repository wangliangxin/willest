/*
 * @Autor: wangliangxin3
 * @Email: wangliangxin3@jd.com
 * @Description: 
 * @Date: 2023-06-05 10:12:01
 * @LastEditors: wangliangxin3
 * @LastEditTime: 2023-06-05 10:12:14
 */
import _Icon from "./icon.vue";
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
export const Icon = withInstall(_Icon);
export default Icon;