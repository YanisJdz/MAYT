# MAYT
Coding Factory React Native Course - Groupe MAYT

Membres du groupe :

- Maxime JOMAIN
- Ambre SAINTOBERT
- Yanis JEDRZEJCZAK 
- Thomas CARDOSO

## Présentation du projet: 

MAYT est une application mobile répertoriant et listant les dernieres sorties de jeux-vidéos. L'application fournit les informations de sortie de chaque jeu, comprenant sa date de sortie, son éditeur, et autres...

### Api utilisée:

Lien: [ApiLink](https://www.freetogame.com/api-doc)

Description: 

Api de FreeToGame.com nous permettant de recevoir un nombre conséquent de jeu ainsi que leur informations. 

Exemple d'objet retourné par l'API: 

``
    {
        "id": 325,
        "title": "MapleStory",
        "thumbnail": "https://www.freetogame.com/g/325/thumbnail.jpg",
        "short_description": "A popular free-to-play 2D side-scrolling MMORPG with tons of quests, and a huge game world!",
        "game_url": "https://www.freetogame.com/open/maplestory",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Nexon",
        "developer": "Wizet",
        "release_date": "2005-05-11",
        "freetogame_profile_url": "https://www.freetogame.com/maplestory"
    }
``

### Modules externes utilisés:

- react-native-vector-icons (icônes pour la navbar)
- @react-navigation/bottom-tabs (pour la navbar)
- @react-navigation/native-stack (pour la navigation)
- @react-navigation/native (starter pack)
- react-native-screens react-native-safe-area-context (starter pack)
- react-native-image-picker (accès à la galerie et à l'appareil photo)
- react-native-date-picker (pour add la date de naissance)
- moment (pour changer le format de la date)
- react-redux
- @reduxjs/toolkit
- @react-native-async-storage/async-storage
- redux-persist
- react-native-screens
- Linking
