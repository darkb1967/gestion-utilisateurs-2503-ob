# image mariadb
FROM mariadb:11

# variables d'environnement
ENV MYSQL_ROOT_PASSWORD=azer
ENV MYSQL_DATABASE=mydatabase
ENV MYSQL_USER=mike
ENV MYSQL_PASSWORD=1234

# CDM..(difference)

# met a jour la liste des pacquets disponible
RUN apt-get update

# installe openssh client et server
RUN apt-get install -y --fix-missing openssh-client openssh-server

# docker run --name mariadb1 -p 4000:3306 mariadb2503 pour un docker