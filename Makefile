####################################################
DENO_VERSION = "0.20.0"

install:
	@git submodule sync --recursive
	@git submodule update --init --recursive

start:
	@deno --allow-net mod.ts

baseImage:
	@docker build -t alfierichou/deno -f base.dockerfile .
	@docker tag alfierichou/deno:latest alfierichou/deno:$(DENO_VERSION)
	@docker push alfierichou/deno
