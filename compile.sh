#!/bin/bash
#set -e
css_dir=css
js_dir=~/Documents/Programming/Projects/marriyah-raihan/js
echo "Compiling css in $css_dir ... "
sass --style compressed $css_dir/main.scss $css_dir/main.css
echo "Done."
echo "Compiling js in $js_dir"
python $PYTHONLIB/google_closure_compiler.py $js_dir min/scripts-min.js
echo "Done."
#set +e
