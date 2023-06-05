/*
 * @Autor: wangliangxin3
 * @Email: wangliangxin3@jd.com
 * @Description:
 * @Date: 2023-06-05 14:05:15
 * @LastEditors: wangliangxin3
 * @LastEditTime: 2023-06-05 14:05:18
 */
import run from "../utils/run";
import { pkgPath } from "../utils/paths";
import { series } from "gulp";
export const publishComponent = async () => {
  run("release-it", `${pkgPath}/willest`);
};
export default series(async () => publishComponent());
