export default ({ app, container }) => {
  app.use("/store/pos", require("./routes/store/pos").default(container));
};