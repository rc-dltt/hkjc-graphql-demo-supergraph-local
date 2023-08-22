include ./.env

up:
	docker compose -f ./docker-compose.yaml up -d
	echo "Apollo Gateway is running at http://localhost:${GATEWAY_PORT}"

down:
	docker compose -f ./docker-compose.yaml down

build: compose
	docker compose -f ./docker-compose.yaml build

compose:
	cd gateway && \
	npm install && \
	npx rover supergraph compose \
		--elv2-license=accept \
		--config ./supergraph.yaml \
		> ./src/supergraph.graphql
