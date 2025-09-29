const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "POC",
    pageTitle: "API+UI Integration",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "112",
        },
        device: "SUYCOKHWLAP303",
        platform: {
            name: "Windows",
            version: "10",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "DG Security Manager" },
            { label: "Release", value: "1.2.3" },
            { label: "Cycle", value: "Sanity" }
        ],
    },
});