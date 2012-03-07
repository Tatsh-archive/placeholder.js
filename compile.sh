#!/bin/sh
closure-compiler --js placeholder.js --js rexport.js --compilation_level ADVANCED_OPTIMIZATIONS --warning_level VERBOSE > placeholder.min.js

