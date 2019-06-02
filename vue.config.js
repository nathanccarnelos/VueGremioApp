module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "VueGremioApp" : "/",
  lintOnSave: "error",
  runtimeCompiler: process.env.NODE_ENV !== "production"
};
