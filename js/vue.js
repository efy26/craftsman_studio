const APP = {

    data() {
        return {
            showAccueil: false,
            showBebe: false,
            showCouple: false,
            showHomme: false,
            showFemme: false,
            showNoel: false,
            showMariage: false,
            showAnniversaire: false,
            showAbout: false,
            showRdv: false
        }
    },

    mounted() {
        this.changeState("accueil")
    },

    methods: {
        goToAccueil() {
            this.changeState("accueil")
        },

        goToBebe() {
            this.changeState("bebe")
        },

        goToCouple() {
            this.changeState("couple")
        },
        goToHomme() {
            this.changeState("homme")
        },

        goToFemme() {
            this.changeState("femme")
        },

        goToNoel() {
            this.changeState("noel")
        },
        goToMariage() {
            this.changeState("mariage")
        },

        goToAnniversaire() {
            this.changeState("anniversaire")
        },

        goToAbout() {
            this.changeState("about")
        },
        goToRdv() {
            this.changeState("rdv")
        },

        changeState(destination) {
            this.showAccueil = false,
            this.showBebe = false,
            this.showCouple = false,
            this.showHomme = false,
            this.showFemme = false,
            this.showNoel = false,
            this.showMariage = false,
            this.showAnniversaire = false,
            this.showAbout = false,
            this.showRdv= false

            switch (destination) {
                case "accueil":
                    this.showAccueil = true
                    break;
                    case "bebe":
                        this.showBebe = true
                        break;
                        case "couple":
                    this.showCouple = true
                    break;
                    case "homme":
                    this.showHomme = true
                    break;
                    case "femme":
                        this.showFemme = true
                        break;
                        case "noel":
                    this.showNoel = true
                    break;
                    case "mariage":
                    this.showMariage = true
                    break;
                    case "anniversaire":
                        this.showAnniversaire = true
                        break;
                        case "about":
                    this.showAbout = true
                    break;
                    case "anniversaire":
                        this.showAnniversaire = true
                        break;
                        case "rdv":
                    this.showRdv = true
                    break;
            
                default:
                    this.showAccueil = true
                    break;
            }
        }
    }

}
Vue.createApp(APP).mount("#app")