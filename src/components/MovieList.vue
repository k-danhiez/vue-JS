<template>
    <div>
        <div v-if="display">
            <!-- <p v-bind:title="message">
                Ceci est un test. Ne faîtes pas attention à ce message.
            </p> -->
            <p>
                <v-container>
                    <v-layout row wrap align-center>
                            <v-select
                                :items="items"
                                label="Filtre"
                                v-model="filterChoice"
                                style="max-width:150px"
                                outlined
                            ></v-select>
                            <!-- <v-select v-model="filterChoice">
                                <option value="title">Titre</option>
                                <option value="date">Date</option>
                                <option value="real">Realisateur</option>
                            </v-select>     -->
                            <v-text-field v-model="inputFilter"></v-text-field>
                            <v-btn class="blue white--text" style="max-width:300px" v-on:click="filter()">Filtrer</v-btn>
                    </v-layout>
                </v-container>
                <span v-if="displayReset">
                    <v-btn v-on:click="resetList()">Reset la liste</v-btn>
                </span>
            </p>
            <li v-for="(m, index) in movie_list" v-bind:key="m.titre">
                {{ m.titre }}
                - {{ m.date }}
                <v-btn outlined v-on:click="viewInfo(index)">Détails</v-btn>
                <v-btn class="red white--text" v-on:click="deleteMovie(index)">Supprimer</v-btn>
                <span v-if="m.displayInfo">
                    <p><b>Langue(s) :</b> {{ m.langue }}</p>
                    <p><b>Realisateur :</b> {{ m.real }}</p>
                    <p><b>Genre(s) :</b> {{ m.genre }}</p>
                    <p><b>Synopsis :</b> {{ m.synopsis }}</p>
                </span>
            </li>
            <p>
                {{ movie_list.length }} film(s) dans la liste
            </p>
            <v-container>
                <v-row align="center">
                    <v-form v-model="newMovie">
                            <v-text-field
                                v-model="movieName"
                                :rules="textRules"
                                label="Nom du film"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="movieDate"
                                :rules="dateRules"
                                label="Année de sortie du film"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="movieLangue"
                                :rules="textRules"
                                label="Langue(s) du film"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="movieRealName"
                                :rules="textRules"
                                label="Réalisateur du film"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="movieRealNation"
                                :rules="textRules"
                                label="Nationnalité du réalisateur"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="movieRealDate"
                                :rules="birthRules"
                                label="Naissance du réalisateur (DD/MM/YYYY)"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="movieGenre"
                                :rules="textRules"
                                label="Genre(s) du film"
                                required
                            ></v-text-field>
                            <v-text-field
                                v-model="movieSynopsis"
                                :rules="textRules"
                                label="Synopsis du film"
                                required
                            ></v-text-field>
                        <v-btn :disabled="!newMovie" color="success" v-on:click="addMovie(newMovie)">Ajouter le film à la liste</v-btn>
                    </v-form>
                </v-row>
            </v-container>
            <!-- <br/>
            <p>
                <v-btn v-on:click="increment()">
                    Clique-moi dessus pour faire monter le compteur
                </v-btn>
                <span>
                    {{ counter }}
                </span>
            </p>
            <p>
                <v-btn v-on:click="disparitus()">
                    Lancer un sort de disparition
                </v-btn>
            </p> -->
        </div>
        <!-- <div v-if="!display">
            <v-btn v-on:click="reaparitum()">
                Lancer un sort de réapparition
            </v-btn>
            <p v-if="counter==13">
                <v-btn v-on:click="maisonMickey()">
                    Miska, Moska, Mickey Mouse
                </v-btn>
            </p>
            <p v-if="display2">
                <img src="../assets/Mickey-Mouse.jpg">
            </p>
        </div> -->
    </div>
</template>

<script>
export default {

    data() {
        return{
             message: "Bonjour les amis.",
        display: true,
        display2: false,
        movie_list: [{
            titre: "The Truman Show",
            date: "1493",
            langue: "Anglais, Français",
            real: "[\"Charles Gilou\", \"Français\", \"09/08/1451\"]",
            genre: "Drame, Fantasy",
            synopsis: "C'est un film sur un mec qui s'apppelle Truman.",
            displayInfo: false
        },
        {
            titre: "Jumanji",
            date: "1938",
            langue: "Français",
            real: "[\"Benoit Drevel\", \"Français\", \"29/02/1892\"]",
            genre: "Fantasy, Action",
            synopsis: "C'est un film sur un jeu de plateau avec des règles qui changent à chaque fois qu'on l'utilise.",
            displayInfo: false
        },
        {
            titre: "Mickey Mouse et ses srabs dans le tié-quar",
            date: "2020",
            langue: "Anglais, Français",
            real: "[\"Walt Disney (revenu des morts)\", \"Américain\", \"05/12/1901\"]",
            genre: "Comédie, Drame",
            synopsis: "C'est un film sur l'acceptation de soi et l'entraide des amis.",
            displayInfo: false
        }],
        items: ['Titre', 'Date', 'Réalisateur'],
        counter: 0,
        newMovie:true,
        inputFilter:"",
        filterChoice:"0",
        displayReset: false,
        textRules: [
            v => !!v || 'Veuillez remplir ce champs',
            v => /.+/.test(v) || "L'année n'est pas valide",
        ],
        dateRules: [
            v => !!v || 'Veuillez remplir ce champs',
            v => /[0-9]{4}/.test(v) || "Le texte entré n'est pas valide",
        ],
        birthRules: [
            v => !!v || 'Veuillez remplir ce champs',
            v => /([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}/.test(v) || "La date n'est pas valide",
        ],
        }
    },
    methods: {
        increment() {
            this.counter++;
        },
        disparitus() {
            this.display = !this.display;
        },
        reaparitum() {
            this.display = true;
            this.display2 = false;
        },
        maisonMickey() {
            this.display2 = true;
        },
        addMovie() {
            this.movie_list.push(
                {
                    titre: this.movieName,
                    date: this.movieDate,
                    langue: this.movieLangue,
                    real: [
                        this.movieRealName,
                        this.movieRealNation,
                        this.movieRealDate
                    ],
                    genre: this.movieGenre,
                    synopsis: this.movieSynopsis,
                    displayInfo: false
                }
            );
        },
        deleteMovie(index) {
            this.movie_list.splice(index, 1);
        },
        viewInfo(index) {
            this.movie_list[index].displayInfo = !this.movie_list[index].displayInfo;
        },
        filter() {
            this.baseList = this.movie_list;
            if(this.filterChoice == "Titre") {
                this.movie_list = this.movie_list.filter(m => m.titre == this.inputFilter);
            } else if(this.filterChoice == "Date") {
                this.movie_list = this.movie_list.filter(m => m.date == this.inputFilter);
            } else if(this.filterChoice == "Réalisateur") {
                this.movie_list = this.movie_list.filter(m => m.real == this.inputFilter);
            }
            this.displayReset = true;
        },
        resetList() {
            this.movie_list = this.baseList;
            this.displayReset = false;
        }
    }
    }
</script>