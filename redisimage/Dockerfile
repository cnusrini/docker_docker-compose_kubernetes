# build from base image
FROM alpine

# install redis server
RUN apk add --update redis
RUN apk add --update gcc

#After the container runs, ssh into that running container
CMD ["redis-server"]






