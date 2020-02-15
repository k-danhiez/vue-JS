<template>
    <div>
        <div v-if="display">
            <!-- <p v-bind:title="message">
                Ceci est un test. Ne faîtes pas attention à ce message.
            </p> -->
            <p>
                <select v-model="filterChoice">
                    <option value="title">Titre</option>
                    <option value="date">Date</option>
                    <option value="real">Realisateur</option>
                </select>    
                <input v-model="inputFilter">
                <button variant="outline-primary" v-on:click="filter()">Filtrer</button>
                <span v-if="displayReset">
                    <button v-on:click="resetList()">Reset la liste</button>
                </span>
            </p>
            <li v-for="(m, index) in movie_list" v-bind:key="m.titre" v-on:click="viewInfo(index)">
                {{ m.titre }}
                - {{ m.date }}
                <button variant="danger" v-on:click="deleteMovie(index)">Supprimer</button>
                <span v-if="m.displayInfo">
                    <p>Realisateur : {{ m.real }}</p>
                    <p>Synopsis : {{ m.synopsis }}</p>
                </span>
            </li>
            <p>
                {{ movie_list.length }} film(s) dans la liste
            </p>
            <input v-model="newMovie">
            <button variant="success" v-on:click="addMovie(newMovie)">Ajouter le film à la liste</button>
            <br/>
            <p>
                <button v-on:click="increment()">
                    Clique-moi dessus pour faire monter le compteur
                </button>
                <span>
                    {{ counter }}
                </span>
            </p>
            <p>
                <button v-on:click="disparitus()">
                    Lancer un sort de disparition
                </button>
            </p>
        </div>
        <div v-if="!display">
            <button v-on:click="reaparitum()">
                Lancer un sort de réapparition
            </button>
            <p v-if="counter==13">
                <button v-on:click="maisonMickey()">
                    Miska, Moska, Mickey Mouse
                </button>
            </p>
            <p v-if="display2">
                <img src="../assets/Mickey-Mouse.jpg">
            </p>
        </div>
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
            real: "Charles Gilou",
            synopsis: "C'est un film sur un mec qui s'apppelle Truman.",
            displayInfo: false
        },
        {
            titre: "Jumanji",
            date: "1938",
            real: "Benoit Drevel",
            synopsis: "C'est un film sur un jeu de plateau avec des règles qui changent à chaque fois qu'on l'utilise.",
            displayInfo: false
        },
        {
            titre: "Mickey Mouse et ses srabs dans le tié-quar",
            date: "2020",
            real: "Walt Disney (revenu des morts)",
            synopsis: "C'est un film sur l'acceptation de soi et l'entraide des amis.",
            displayInfo: false
        }],
        counter: 0,
        newMovie:"",
        inputFilter:"",
        filterChoice:"0",
        displayReset: false
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
                    titre: this.newMovie,
                    date: "309",
                    realisateur: "Dede",
                    synopsis: "Blablabla"
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
            if(this.filterChoice == "title") {
                this.movie_list = this.movie_list.filter(m => m.titre == this.inputFilter);
            } else if(this.filterChoice == "date") {
                this.movie_list = this.movie_list.filter(m => m.date == this.inputFilter);
            } else if(this.filterChoice == "real") {
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