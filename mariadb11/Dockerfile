# image mariadb
FROM mariadb:11

# variables d'environnement
ENV MARIADB_ROOT_PASSWORD=azer
ENV MARIADB_DATABASE=mydatabase
ENV MARIADB_USER=mike
ENV MARIADB_PASSWORD=1234

EXPOSE 3306

# met a jour la liste des pacquets disponible
RUN apt-get update

# installe openssh client et server
RUN apt-get install -y --fix-missing openssh-client openssh-server

# docker build . -t mymariadb
# docker volume create mariadb-data ## crée un volume qui s'efface pas

# docker run -d -p 4000:3306 --name mariadb1 -e MARIADB_ROOT_PASSWORD=azer mymariadb

# docker run --name mariadb1 -p 4000:3306 -d -e MYSQL_ROOT_PASSWORD=azer -v mariadb-data:/var/lib/mysql mymariadb ## pour un docker
# docker exec -it mariadb1 /bin/bash   ## entre dans le contenaire dans le bash

# docker inspect volume mariadb-data