module.exports = {
  default: {
    parallel: 3,
    format: [
      "progress-bar",
      "usage",
      "json:./.reports/report.json",
      "html:./.reports/report.html",
    ],
    requireModule: ["ts-node/register"],
    require: ["./features/**/*.ts"],
  },
};
