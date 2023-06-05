/*
 * @Autor: wangliangxin3
 * @Email: wangliangxin3@jd.com
 * @Description: 
 * @Date: 2023-06-02 18:24:24
 * @LastEditors: wangliangxin3
 * @LastEditTime: 2023-06-02 18:24:32
 */
import fs from "fs";
import { resolve } from "path";
import { pkgPath } from "./paths";
//保留的文件
const stayFile = ["package.json", "README.md"];

const delPath = async (path: string) => {
  let files: string[] = [];

  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);

    files.forEach(async (file) => {
      let curPath = resolve(path, file);

      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        if (file != "node_modules") await delPath(curPath);
      } else {
        // delete file
        if (!stayFile.includes(file)) {
          fs.unlinkSync(curPath);
        }
      }
    });

    if (path != `${pkgPath}/willest`) fs.rmdirSync(path);
  }
};
export default delPath;
