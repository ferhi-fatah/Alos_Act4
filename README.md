# Alos_Act4



## Indexage :
<details>
<summary><b>(click pour details)</b></summary>
<!-- MarkdownTOC -->

1. [Docker:](https://github.com/ferhi-fatah/Alos_Act4#docker-)
    1. [1. C'est quoi Docker](https://github.com/ferhi-fatah/Alos_Act4#cest-quoi-docker)
1. [Node.js]
    1. [1. C'est quoi Node.js]
    1. [2. l'image de Node.js]
1. [phpmyadmin:]
    1. [1. C'est quoi phpmyadmin]
    1. [2. l'image de phpmyadmin]

<!-- /MarkdownTOC -->
</details>

## [Docker](https://www.docker.com/) :

<p align="center" width="100%">
    <img src="https://user-images.githubusercontent.com/62666792/169522811-b547388e-c96d-447e-b1f2-a7bffa69ada9.png"> 
</p>

#### C'est quoi Docker ?  



Docker est une plateforme permettant de lancer certaines applications dans des conteneurs logiciels.

Selon la firme de recherche sur l'industrie 451 Research, « Docker est un outil qui peut empaqueter une application et ses dépendances dans un conteneur isolé, qui pourra être exécuté sur n'importe quel serveur ». Il ne s'agit pas de virtualisation, mais de conteneurisation, une forme plus légère qui s'appuie sur certaines parties de la machine hôte pour son fonctionnement. Cette approche permet d'accroître la flexibilité et la portabilité d’exécution d'une application, laquelle va pouvoir tourner de façon fiable et prévisible sur une grande variété de machines hôtes, que ce soit sur la machine locale, un cloud privé ou public, une machine nue, etc

Techniquement, Docker étend le format de conteneur Linux standard, LXC, avec une API de haut niveau fournissant une solution pratique de virtualisation qui exécute les processus de façon isolée. Pour ce faire, Docker utilise entre autres LXC, cgroups et le noyau Linux lui-même1. Contrairement aux machines virtuelles traditionnelles, un conteneur Docker n'inclut pas de système d'exploitation, mais s'appuie au contraire sur les fonctionnalités du système d’exploitation fournies par la machine hôte.

La technologie de conteneur de Docker peut être utilisée pour étendre des systèmes distribués de façon à ce qu'ils s'exécutent de manière autonome depuis une seule machine physique ou une seule instance par nœud. Cela permet aux nœuds d'être déployés au fur et à mesure que les ressources sont disponibles, offrant un déploiement transparent et similaire aux PaaS pour des systèmes comme Apache Cassandra, Riak, ou d'autres systèmes distribués
## [Node.js](https://nodejs.org/en/)

<p align="center" width="100%">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/220px-Node.js_logo.svg.png"> 
</p>

#### C'est quoi Node.js?

Node.js est une plateforme logicielle libre en JavaScript, orientée vers les applications réseau évènementielles hautement concurrentes qui doivent pouvoir monter en charge.

Elle utilise la machine virtuelle V8, la librairie libuv pour sa boucle d'évènements, et implémente sous licence MIT les spécifications CommonJS.

Parmi les modules natifs de Node.js, on retrouve http qui permet le développement de serveur HTTP. Ce qui autorise, lors du déploiement de sites internet et d'applications web développés avec Node.js, de ne pas installer et utiliser des serveurs webs tels que Nginx ou Apache.

Concrètement, Node.js est un environnement bas niveau permettant l’exécution de JavaScript côté serveur.

#### l'image de [Node.js](https://nodejs.org/en/) :
 - reference : [Node.js](https://hub.docker.com/_/node)
 - file issues : [Node.js/docker](https://github.com/nodejs/docker-node/issues)
 - source : [Node.js](https://github.com/docker-library/docs/tree/master/node)
 - pour utulise l'mage :
  ```
 docker pull node
 ``` 
 - pour utulise a un Dockerfile :
 ```
  # syntax=docker/dockerfile:1

    FROM node:12.18.1
    ENV NODE_ENV=production

    WORKDIR /app

    COPY ["package.json", "package-lock.json*", "./"]

    RUN npm install --production

    COPY . .

    CMD [ "node", "server.js" ]
    
```
 - License : pour plus d'informations sur la license  de [phpmyadmin/docker](https://github.com/nodejs/node/blob/master/LICENSE)
 
## [phpMyAdmin](https://www.phpmyadmin.net/)

<p align="center" width="100%">
    <img src="https://raw.githubusercontent.com/docker-library/docs/1a06458dd2512b5bcda0a849738bb5ca32bf8ec0/phpmyadmin/logo.png"> 
</p>

 
#### C'est quoi phpMyAdmin ?

phpMyAdmin (PMA) est une application Web de gestion pour les systèmes de gestion de base de données MySQL et MariaDB, réalisée principalement en PHP et distribuée sous licence GNU GPL.

#### l'image de [phpMyAdmin](https://www.phpmyadmin.net/) :
 - reference : [phpMyAdmin](https://hub.docker.com/_/phpmyadmin)
 - file issues : [phpmyadmin/docker](https://github.com/phpmyadmin/docker/issues)
 - source : [phpMyAdmin](https://github.com/docker-library/docs/tree/master/phpmyadmin)
 - pour utulise l'mage :
 ```
 docker pull phpmyadmin
 ```
 - pour utulise a un server :
 ```
    $ docker run --name myadmin -d --link mysql_db_server:db -p 8080:80 phpmyadmin
```
 - pour utulise avec  un docker-compose :
 ```
 version: '3.1'

services:
  db:
    image: mariadb:10.3
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: notSecureChangeMe

  phpmyadmin:
    image: phpmyadmin
    restart: always
    ports:
      - 8080:80
    environment:
      - PMA_ARBITRARY=1
      
 ```
 - License : pour plus d'informations sur la license  de [phpmyadmin/docker](https://github.com/phpmyadmin/docker/blob/master/LICENSE)
 



![1](https://user-images.githubusercontent.com/62666792/169587999-bbdad324-229e-4bb0-b994-7e953c22673c.PNG)


![image](https://user-images.githubusercontent.com/62666792/169588346-5e74f6b6-b8af-4fab-a0ad-e03ce4b09a2a.png)
