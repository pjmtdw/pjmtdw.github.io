.PHONY: build
build:
	bundle exec middleman build --clean

init:
	git submodule init
	git submodule update
	git submodule foreach 'git checkout master'
	bundle install --path=.vendor

server:
	bundle exec middleman server
