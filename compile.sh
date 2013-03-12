#!/bin/bash
set -e
css_dir=css
echo "Compiling css in $css_dir ... "
sass --style compressed $css_dir/main.scss $css_dir/main.css
echo "Done."
set +e
