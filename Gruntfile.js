module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        simplemocha: {
            options: {
                globals: ["should"],
                timeout: 3000,
                ignoreLeaks: false,
                reporter: "spec"
            },
            all: {
                src: ["test/**/*-test.js"]
            }
        },

        jslint: {
            all: {
                src: [
                    "*.js"
                ],
                directives: {
                    node: true
                },
                exclude: [
                    "Test*.js"
                ],
                options: {
                    errorsOnly: true,
                    failOnError: false
                }
            }
        }

    });

    grunt.loadNpmTasks("grunt-simple-mocha");
    grunt.loadNpmTasks("grunt-jslint");

    grunt.registerTask("lint",  ["jslint"]);
    grunt.registerTask("test",  ["simplemocha"]);
    grunt.registerTask("default",  ["lint", "test"]);
};
