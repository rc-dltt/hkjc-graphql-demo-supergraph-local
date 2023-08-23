module.exports = {
  default: {
    parallel: 3,
    format: [
      // "progress",
      // "usage",
      "json:./.reports/report.json",
      "html:./.reports/report.html",
    ],
    requireModule: ["ts-node/register"],
    require: ["./features/**/*.ts"],
  },
};
