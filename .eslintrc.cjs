/*
 * @Author: mainkeys dymainkeys@gmail.com
 * @Date: 2024-01-20 15:23:19
 * @LastEditors: mainkeys dymainkeys@gmail.com
 * @LastEditTime: 2024-01-20 23:22:00
 * @FilePath: \mks_admin\.eslintrc.cjs
 * @Description: ESLint配置
 */

/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
