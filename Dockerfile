FROM alfierichou/deno:0.20.0

EXPOSE 8000

WORKDIR /app
ADD . /app

ENTRYPOINT ["deno", "--allow-net", "mod.ts"]