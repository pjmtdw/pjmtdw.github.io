.PHONY: build
build:
	bundle exec middleman build --clean

init:
	git submodule init
	git submodule update
	git submodule foreach 'git checkout master'
	bower install
	cp bower_components/modernizr/modernizr.js source/javascripts/libs/
	cp bower_components/jquery/jquery.min.js source/javascripts/libs/
	cp bower_components/bolster.simplemodal/src/jquery.simplemodal.js source/javascripts/libs/
	bundle install --path=.vendor

server:
	bundle exec middleman server
