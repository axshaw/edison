REPORTER = dot
TESTS = tests/*.js

test: 
	@NODE_ENV=tests ./node_modules/.bin/mocha \
	--reporter $(REPORTER) \
	$(TESTS)

.PHONY: test
