module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "VueGremioApp" : "/",
  runtimeCompiler: process.env.NODE_ENV !== "production"
};
