## Alos_Act4
l'activite 4 de module Architecture logicielle orientée service 
- Thème  : Cryptome , API de crypto-monnaie .
<p align="center" width="75%">
  <img src= "https://user-images.githubusercontent.com/62666792/169668913-3bc51341-d311-40ca-a60f-e2828a4eff36.png" > 
</p>        

## Indexage :
<details>
<summary><b>(click pour details)</b></summary>
<!-- MarkdownTOC -->

1. [Docker](https://github.com/ferhi-fatah/Alos_Act4#docker-)
    1. [1. C'est quoi Docker](https://github.com/ferhi-fatah/Alos_Act4#cest-quoi-docker)
    1. [2. Installation](https://github.com/ferhi-fatah/Alos_Act4#Installation)
    1. [3. Fichier Docker](https://github.com/ferhi-fatah/Alos_Act4/blob/main/README.md#fichier-docker)
    1. [4. Instructions](https://github.com/ferhi-fatah/Alos_Act4#Instructions)
1. [Node.js](https://github.com/ferhi-fatah/Alos_Act4#nodejs)
    1. [1. C'est quoi Node.js](https://github.com/ferhi-fatah/Alos_Act4#cest-quoi-nodejs)
    1. [2. l'image de Node.js](https://github.com/ferhi-fatah/Alos_Act4#limage-de-nodejs-)
1. [phpmyadmin](https://github.com/ferhi-fatah/Alos_Act4#phpmyadmin)
    1. [1. C'est quoi phpmyadmin](https://github.com/ferhi-fatah/Alos_Act4#cest-quoi-phpmyadmin-)
    1. [2. l'image de phpmyadmin](https://github.com/ferhi-fatah/Alos_Act4#limage-de-phpmyadmin-)
1. [API Reference Pour PostMan](https://github.com/ferhi-fatah/Alos_Act4#api-reference-pour-postman-)
1. [Setup](https://github.com/ferhi-fatah/Alos_Act4/blob/main/README.md#setup-)

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

#### Installation

##### LINUX :

Exucite ce line de code pour une facile isntalation de Docker:

```sh
curl -sSL https://get.docker.com/ | sh
```
Si vous ne souhaitez pas exécuter un script shell aléatoire, veuillez consulter les instructions d'[installation](https://docs.docker.com/engine/installation/linux/) pour votre distribution.
Si vous êtes un débutant complet de Docker, vous devriez suivre la [série de tutoriels](https://docs.docker.com/engine/getstarted/) maintenant.

##### macOS :

Téléchargez et installez [Docker Community Edition](https://www.docker.com/community-edition). si vous avez Homebrew-Cask, tapez simplement "brew cask install docker". Ou Téléchargez et installez [Docker Toolbox](https://docs.docker.com/toolbox/overview/). [Docker pour Mac](https://docs.docker.com/docker-for-mac/) est sympa, mais ce n'est pas aussi fini que l'installation de VirtualBox. [Voir la comparaison](https://docs.docker.com/docker-for-mac/docker-toolbox/).  



> **REMARQUE** Docker Toolbox est hérité. Vous devez utiliser Docker Community Edition, voir [Docker Toolbox](https://docs.docker.com/toolbox/overview/).  



Une fois que vous avez installé Docker Community Edition, cliquez sur l'icône Docker dans Launchpad. Ensuite, démarrez un conteneur :

```sh
docker exécuter hello-world
```

Voilà, vous avez un conteneur Docker en cours d'exécution.

Si vous êtes un débutant complet de Docker, vous devriez probablement suivre la [série de tutoriels](https://docs.docker.com/engine/getstarted/) maintenant.

##### Windows 10 :

Les instructions d'installation de Docker Desktop pour Windows sont disponibles [ici](https://hub.docker.com/editions/community/docker-ce-desktop-windows)

Une fois installé, ouvrez powershell en tant qu'administrateur et exécutez :

```powershell
# Affichez la version de docker installée :
version docker

# Extrayez, créez et exécutez 'hello-world' :
docker exécuter hello-world
```

#### Fichier Docker

[Le fichier de configuration](https://docs.docker.com/engine/reference/builder/).   
Configure un conteneur Docker lorsque vous exécutez "docker build" dessus. Largement préférable à `docker commit`.

Voici quelques éditeurs de texte courants et leurs modules de coloration syntaxique que vous pouvez utiliser pour créer des Dockerfiles :

* [Code VS](https://github.com/Microsoft/vscode-docker)
* [Sublime Text](https://packagecontrol.io/packages/Dockerfile%20Syntax%20Highlighting)
* [Atom](https://atom.io/packages/language-docker)
* [Vim](https://github.com/ekalinin/Dockerfile.vim)
* [Emacs](https://github.com/spotify/dockerfile-mode)
* [TextMate](https://github.com/docker/docker/tree/master/contrib/syntax/textmate)
* Voir aussi [Docker meets the IDE](https://domeide.github.io/)

#### Instructions

* [.dockerignore](https://docs.docker.com/engine/reference/builder/#dockerignore-file)
* [FROM](https://docs.docker.com/engine/reference/builder/#from) Définit l'image de base pour les instructions suivantes.
* [MAINTAINER (deprecated - use LABEL instead)](https://docs.docker.com/engine/reference/builder/#maintainer-deprecated) Définissez le champ Auteur des images générées.
* [RUN](https://docs.docker.com/engine/reference/builder/#run) exécute toutes les commandes dans un nouveau layer au-dessus de l'image actuelle et valide les résultats.
* [CMD](https://docs.docker.com/engine/reference/builder/#cmd) fournit des valeurs par défaut pour un conteneur en cours d'exécution.
* [EXPOSE](https://docs.docker.com/engine/reference/builder/#expose)informe Docker que le conteneur écoute sur les ports réseau spécifiés lors de l'exécution. REMARQUE : ne rend pas réellement les ports accessibles.
* [ENV](https://docs.docker.com/engine/reference/builder/#env) définit les variables d'environnement.
* [ADD](https://docs.docker.com/engine/reference/builder/#add) copie les nouveaux fichiers, répertoires ou fichiers distants dans le conteneur. Invalide les caches. Évitez `ADD` et utilisez `COPY` à la place.
* [COPY](https://docs.docker.com/engine/reference/builder/#copy) copie les nouveaux fichiers ou répertoires dans le conteneur. Par défaut, ceci copie en tant que root quels que soient les paramètres USER/WORKDIR. Utilisez `--chown=<user>:<group>` pour donner la propriété à un autre user/group.  (aussi pour `ADD`.)
* [ENTRYPOINT](https://docs.docker.com/engine/reference/builder/#entrypoint) configure un conteneur qui s'exécutera en tant qu'exécutable.
* [VOLUME](https://docs.docker.com/engine/reference/builder/#volume) crée un mount-point pour les volumes montés en externe ou d'autres conteneurs.
* [USER](https://docs.docker.com/engine/reference/builder/#user) définit le nom d'utilisateur pour les commandes RUN / CMD / ENTRYPOINT .
* [WORKDIR](https://docs.docker.com/engine/reference/builder/#workdir) définit le répertoire de travail.
* [ARG](https://docs.docker.com/engine/reference/builder/#arg) définit une variable de build-time 
* [ONBUILD](https://docs.docker.com/engine/reference/builder/#onbuild) ajoute une instruction de déclenchement lorsque l'image est utilisée comme base pour une autre construction.
* [STOPSIGNAL](https://docs.docker.com/engine/reference/builder/#stopsignal) sets the system call signal that will be sent to the container to exit.
* [LABEL](https://docs.docker.com/config/labels-custom-metadata/) applique des métadonnées key/value  à vos images, conteneurs ou démons. 
* [SHELL](https://docs.docker.com/engine/reference/builder/#shell) remplace le shell par défaut utilisé par docker pour exécuter des commandes.
* [HEALTHCHECK](https://docs.docker.com/engine/reference/builder/#healthcheck) indique à Docker comment tester un conteneur pour vérifier qu'il fonctionne toujours.




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
 - pour utilise a un Dockerfile :
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
 - License : pour plus d'informations sur la license  de [Node.js/docker](https://github.com/nodejs/node/blob/master/LICENSE)
 
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
 - pour utilise a un server :
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
 
 
[![Try in PWD](https://github.com/play-with-docker/stacks/raw/cff22438cb4195ace27f9b15784bbb497047afa7/assets/images/button.png)](http://play-with-docker.com?stack=https://raw.githubusercontent.com/nextcloud/docker/8db861d67f257a3e9ac1790ea06d4e2a7a193a6c/stack.yml)


 - License : pour plus d'informations sur la license  de [phpmyadmin/docker](https://github.com/phpmyadmin/docker/blob/master/LICENSE)

## API Reference Pour PostMan :

L'API est conçue pour renvoyer différents codes d'état en fonction du contexte et de l'action. De cette façon, si une demande entraîne une erreur, l'appelant est en mesure d'avoir un aperçu de ce qui s'est mal passé. Le tableau suivant donne un aperçu du comportement général des fonctions API.



| Request type    |Description                   |
| :--------       |:-------------------------    |
|        `GET`     | Accéder à une ou plusieurs ressources et renvoyer le résultat au format JSON.|
|        `POST`     | Renvoie 201 si la ressource est créée avec succès et renvoie la ressource nouvellement créée au format JSON. Renvoie 200 OK si la ressource est accessible ou modifiée avec succès|
|        `DELET`     | Suppression de ressource , renvoie 200 ok si c'est suprimmer avec succès.|
|        `PUT`     | Modification de ressource , renvoie 200 ok si c'est modifiée avec succès.|

les codes routours possibles pour les requets de l' API .

| Return values    | Description                |
| :--------       | :------------------------- |
| `200 OK`     | GET, PUT ,POST or DELETE requet avec succès, et la resource(s) retournée en JSON.               |
| `204 No Content`      | Requête traitée avec succès, mais pas d’information à renvoyer.             |
| `201 Created`      |  POST avec succès,  et la resource(s) retournée en JSON.     |
| `304 Not Modified`      |la resource(s) n'est pas modified .           |
| `400 Bad Request`      |le serveur n'a pas compris la requête.      |
| `401 Unauthorized`      |L'utulisateur n'est pas  authentifié. no token .  |
| `403 Forbidden`      | Accès interdit , Le serveur comprend la requête mais refuse de l'autoriser.  |
| `404 Not Found`      | La resource n'est pas accessible   |
| `422 Unprocessable`      | la requête est correctement formatée,dedecte un erreur qui empêche le serveur d'émettre une réponse correctement. |
| `500 Server Error`      | Erreur au niveau de  server.   |


## Setup :

 - execute le code suivant :
```
    $ docker-compose up -d
```
 - ouvrire  ton  navigateur sur le lien :
   [http://localhost:9001](http://localhost:9001/)
   
 - maintenant tu peux bien gérer vos tables de data par  le phpMyadmin


![1](https://user-images.githubusercontent.com/62666792/169587999-bbdad324-229e-4bb0-b994-7e953c22673c.PNG)


![image](https://user-images.githubusercontent.com/62666792/169588346-5e74f6b6-b8af-4fab-a0ad-e03ce4b09a2a.png)

 - en parallel vous pouvez teste les resquets de l' API sur le porte : 
    [http://localhost:3000](http://localhost:3000/)
#### l'aceuille : 

https://user-images.githubusercontent.com/62666792/169670372-465fb427-63cb-469b-bd3b-5dc050f666f3.mp4

##### la récupération de data :
 - la route (http://localhost:3000/1.0.0/data) :  
 
![image](https://user-images.githubusercontent.com/62666792/165102851-27b92d40-d41c-45c8-8878-0eecebbd4853.png) 
 - la route (http://localhost:3000/1.0.0/currencies/1) :  
 
![image](https://user-images.githubusercontent.com/62666792/165104176-11cf3d97-ae9a-4677-bf44-3bb6bf3e44e7.png)
 - la route (http://localhost:3000/2.0.0/data) :  
 
![image](https://user-images.githubusercontent.com/62666792/165103408-834a117d-a3ad-466b-b75a-69a01f9cc4db.png)
 - la route (http://localhost:3000/2.0.0/currencies/1) :  
 
![image](https://user-images.githubusercontent.com/62666792/165104270-a74582d5-1f02-446a-a68b-519b2ed19a80.png)
##### la suppression  de data :  
 - la route (http://localhost:3000/1.0.0/currencies/1) :  
 
![image](https://user-images.githubusercontent.com/62666792/165105022-48f936db-f878-4573-b026-10ce78bc9f20.png)
 - la route (http://localhost:3000/2.0.0/currencies/1) :  
 
![image](https://user-images.githubusercontent.com/62666792/165105220-e8c5f593-948f-4178-a065-d9fbee7600e9.png)
##### la modification  de data :  
 - la route (http://localhost:3000/1.0.0/currencies/1) :  
 
![1](https://user-images.githubusercontent.com/62666792/165106193-26112639-0f3c-402d-8a1a-d6f02d97e54e.PNG)
 - la route (http://localhost:3000/2.0.0/currencies/1) :  
 
![2](https://user-images.githubusercontent.com/62666792/165106203-565a059f-8815-4448-b9d5-6bf0fe16aaa8.PNG)

