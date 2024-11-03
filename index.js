class Heroi {
    constructor (name, age, tipo) {
        this.name = name
        this.age = age
        this.tipo = tipo
    }

    atacar() {
        switch (this.tipo) {
            case "mago":
                console.log(`O mago atacou usando magia`)
                break
            case "guerreiro":
                console.log(`O guerriro atacou usando espada`)
                break
            case "monge":
                console.log(`O monge atacou usando artes marciais`)
                break
            case "ninja":
                console.log(`O ninja atacou usando shuriken`)
                break
            default:
                console.log("Erro, Tente novamente")
        }
    }
}

let hero = new Heroi("Leo", 19, "mago")
let superHeroi = new Heroi("Leozin", 23, "ninja")

hero.atacar()
superHeroi.atacar()