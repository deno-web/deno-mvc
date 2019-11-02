####################################################
DENO_VERSION = "0.20.0"
SERVICE_VERSION = "0.0.1"

install:
	@git submodule sync --recursive
	@git submodule update --init --recursive

format:
	@deno --allow-read --allow-write https://deno.land/std/prettier/main.ts

start:
	@deno --allow-net mod.ts

baseImage:
	@docker build -t alfierichou/deno -f base.dockerfile .
	@docker tag alfierichou/deno:latest alfierichou/deno:$(DENO_VERSION)
	@docker push alfierichou/deno

serviceImage:
	@docker build -t alfierichou/deno-mvc:$(SERVICE_VERSION) .
	@docker push alfierichou/deno-mvc
