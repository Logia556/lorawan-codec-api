# lorawan-codec-api

## utilisation

<p>actuellement, les fichier executables sont dans le dossier captors. <br>
ils contiennent les paramettres batch spécifique au capteur associé, et devront aussi contenir un tableau de cluster pour la sortie standard dans le futur. </p>

<p>de ce fait il vaut mieux utiliser le <strong>0debug.js</strong> si l'on veut tester son fonctionnement pour le moment.<br>
</p>

<p>comme l'explique la spécification TS013-1.0.0, on donne en argument le payload à décoder, avec son port et la date de réception du payload<br>
la commande d'execution est la suivante:</p>

    ./0debug.js <port> <payload> <date>

<p>ici, l'execution est faite en locale, mieux vaut mettre le chemin absolu.</p>

## fonctionnement

<p>on va mettre dans un objet <code>input</code> les paramètres d'entrés, qui seront envoyés à la fonction <code>watteco_decodeUplink()</code></p>

<p>cette fonction va, dans un premier temps traiter le payload comme si c'était un standard, à l'aide la fonction <code>normalisation()</code> de <strong>standard.js</strong>.<br>
Dans le cas d'un payload standard, on modifie le résultat de <code>Decoder()</code> pour retourner les donnés dans un format souhaité.<br>
Si le payload est en fait un batch, on retourne le payload, qui est envoyé dans la fonction <code>normalisation()</code> de <strong>batch.js</strong>.
De même, on modifie le résultat de <code>brUncompress()</code> pour retourner les donnés dans un format souhaité.</p> 

les fichiers examples.json contiennent des couples entrée-sortie effectuer avec le codec.<br>
on peut observer leur exactitude en lançant un test JEST comme expliqué [ici](#jest) 

## webpack 

<p>afin de respecter la contrainte d'un seul fichier final pour le codec, on utilise webpack pour compiler les fichiers en un seul.</p>

<p>il faut installer webpack cli comme cela:</p>

    npm install webpack webpack-cli --save-dev

<p>on peut alors écrire notre fichier <strong>webpack.config.js</strong>, et l'exécuter comme ceci:</p>

    npx webpack --config webpack.config.js

<p>il faudra s'assurer que les dossier spécifiés existes.</p>

<p>notre <strong>webpack.config.js</strong> est spécifique au capteur associé :</p>

    const path = require("path");

    module.exports = {
    target: "node",
    mode: "production",
    entry: "./[captor].js",
    output: {
    filename: "main.js",
    path: path.resolve(__dirname, "."),
    library: "driver",
        },
    };

## JEST
<p>dans package.json:</p>

    "scripts": {
        "test": "jest --collectCoverage"
    }

<p> lancer les tests</p>

    npm run test

<p>les test sont fait indirectement avec les fichiers séparé comme le montre le point d'entrée du driver qui est le fichier spécifique au capteur :</p>
    
    let driver = require("./[captor].js");

<p>cependant notre packaging webpack crée un fichier main.js qui fonctionne de la même manière.<br>
cette séparation est dûe à la compression du code dans main.js qui casse les liens logiques entres les fichiers, ainsi que le nom des fonctions ; JEST ne le supporte pas.</p>

## table des cluster

|      | atm'o | clos'o | flash'o | in'o | inclin'o | indoor_temperature | intens'o | lev'o | modbus | monit'o | move'o | outdoor_temperature | pilot_wire | press'o | pulse_sens'o_atex | pulse_sens'o | remote_temperature | remote_temperature_2 | smartplug | TH | tics'o | toran'o_atex | triphas'o | vaqa'o_lt | vaqa'o | vaqa'o_plus | ventil'o |
|:----:|:-----:|:------:|:-------:|:----:|:--------:|:------------------:|:--------:|:-----:|:------:|:-------:|:------:|:-------------------:|:----------:|:-------:|:-----------------:|:------------:|:------------------:|:--------------------:|:---------:|:--:|:------:|:------------:|:---------:|:---------:|:------:|:-----------:|:--------:|
| 0000 |   X   |   X    |    X    |  X   |    X     |         X          |    X     |   X   |   X    |    X    |   X    |          X          |     X      |    X    |         X         |      X       |         X          |          X           |     X     | X  |   X    |      X       |     X     |     X     |   X    |      X      |    X     |
| 0006 |       |        |         |  X   |          |                    |          |       |        |         |        |                     |            |         |                   |              |                    |                      |     X     |    |        |              |     X     |           |        |             |          |
| 000C |       |        |         |      |    X     |                    |    X     |   X   |        |    X    |        |                     |            |    X    |                   |              |                    |                      |           |    |        |      X       |           |           |        |             |          |
| 000F |   X   |   X    |    X    |  X   |          |                    |          |       |        |         |        |                     |            |    X    |         X         |      X       |                    |                      |           | X  |        |      X       |     X     |     X     |   X    |      X      |    X     |
| 0013 |       |        |         |      |          |                    |          |       |        |         |        |                     |     X      |         |                   |              |                    |                      |           |    |        |              |           |           |        |             |          |
| 0050 |   X   |   X    |    X    |  X   |    X     |         X          |    X     |   X   |   X    |    X    |   X    |          X          |            |    X    |         X         |      X       |         X          |          X           |     X     | X  |   X    |      X       |     X     |     X     |   X    |      X      |    X     |
| 0052 |       |        |         |      |          |                    |          |       |        |         |        |                     |            |         |                   |              |                    |                      |     X     |    |   X    |              |           |           |        |             |          |
| 0054 |       |        |         |      |          |                    |          |       |        |         |        |                     |            |         |                   |              |                    |                      |           |    |   X    |              |           |           |        |             |          |
| 0056 |       |        |         |      |          |                    |          |       |        |         |        |                     |            |         |                   |              |                    |                      |           |    |   X    |              |           |           |        |             |          |
| 0057 |       |        |         |      |          |                    |          |       |        |         |        |                     |            |         |                   |              |                    |                      |           |    |   X    |              |           |           |        |             |          |
| 0400 |       |        |         |      |          |                    |          |       |        |         |   X    |                     |            |         |                   |              |                    |                      |           |    |        |              |           |           |        |      X      |          |
| 0402 |   X   |        |         |      |          |         X          |          |       |        |         |   X    |          X          |            |         |                   |              |         X          |          X           |           | X  |        |              |           |     X     |   X    |      X      |    X     |
| 0403 |   X   |        |         |      |          |                    |          |       |        |         |   X    |                     |            |         |                   |              |                    |                      |           |    |        |              |           |           |   X    |      X      |          |
| 0405 |   X   |        |         |      |          |                    |          |       |        |         |   X    |                     |            |         |                   |              |                    |                      |           | X  |        |              |           |     X     |   X    |      X      |          |
| 0406 |       |        |         |      |    X     |                    |          |       |        |         |   X    |                     |            |         |                   |              |                    |                      |           |    |        |              |           |           |        |      X      |          |
| 8004 |   X   |   X    |    X    |  X   |    X     |         X          |    X     |   X   |   X    |    X    |   X    |          X          |     X      |    X    |         X         |      X       |         X          |          X           |     X     | X  |   X    |      X       |     X     |     X     |   X    |      X      |    X     |
| 8005 |       |        |         |  X   |          |                    |          |       |        |         |        |                     |            |         |         X         |      X       |                    |                      |           |    |        |      X       |           |           |        |             |          |
| 8006 |       |        |         |      |          |                    |          |       |   X    |         |        |                     |            |         |                   |              |                    |                      |           |    |        |              |           |           |        |             |          |
| 8007 |       |        |         |      |          |                    |          |       |   X    |         |        |                     |            |         |                   |              |                    |                      |           |    |        |              |           |           |        |             |          |
| 8008 |       |        |         |      |          |                    |          |       |        |         |        |                     |            |         |                   |              |                    |                      |           |    |        |              |           |           |        |             |    X     |
| 8009 |       |        |         |      |          |                    |          |       |   X    |         |        |                     |            |         |                   |              |                    |                      |           |    |        |              |           |           |        |             |          |
| 800A |       |        |         |      |          |                    |          |       |        |         |        |                     |            |         |                   |              |                    |                      |           |    |        |              |     X     |           |        |             |          |
| 800B |       |        |         |      |          |                    |          |       |        |         |        |                     |            |         |                   |              |                    |                      |           |    |        |              |     X     |           |        |             |          |
| 800C |       |        |         |      |          |                    |          |       |        |         |        |                     |            |         |                   |              |                    |                      |           |    |        |              |           |     X     |   X    |      X      |          |
| 800D |       |        |         |      |          |                    |          |       |        |         |        |                     |            |         |                   |              |                    |                      |           |    |        |              |     X     |           |        |             |          |
| 800F |       |        |         |      |          |                    |          |       |        |         |        |                     |            |         |                   |              |                    |                      |           |    |        |              |           |           |        |             |          |
| 8010 |       |        |         |      |          |                    |          |       |        |         |        |                     |            |         |                   |              |                    |                      |           |    |        |              |     X     |           |        |             |          |
| 8052 |       |        |         |      |          |                    |          |       |        |         |        |                     |            |         |                   |              |                    |                      |     X     |    |        |              |           |           |        |             |          |
