run:
	npm run start

setup:
	npm install \
	  ts-node \
	  typescript
	npm install --save-dev \
	  @types/chai \
	  @types/mocha \
	  @types/node \
	  chai\
	  mocha\
	  eslint

tests:
	npm test
