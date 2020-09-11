module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],

  // 使用vant  第一步 yarn add vant
  //第二步 yarn add babel-plugin-import -D
  //第三部 在babel.config.js 里面配置下面的代码
  //接着就可以在代码中使用vant组件了
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: true,
      },
      "vant",
    ],
  ],
};
