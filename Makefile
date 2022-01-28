bash:
	docker run -it --rm -v ${PWD}:/app -w /app node:latest bash

start:
	docker run -it --rm -p 8080:8080 -v ${PWD}:/app -w /app node:latest yarn start
