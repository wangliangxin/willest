/*
 * @Autor: wangliangxin3
 * @Email: wangliangxin3@jd.com
 * @Description: 
 * @Date: 2023-06-02 16:04:28
 * @LastEditors: wangliangxin3
 * @LastEditTime: 2023-06-02 16:48:20
 */

import * as components from "./src/index";

export * from "./src/index";
import { App } from "vue";

export default {
  install: (app: App) => {
    for (const c in components) {
      app.use(components[c]);
    }
  },
};


