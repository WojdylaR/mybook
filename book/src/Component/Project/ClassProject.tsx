export interface ProjectInterface{
    name: string,
    num: number,
    img: string,
    description: string,
    link: string
}

export const VvaInterface:ProjectInterface = {
    name:"Va Voir Ailleurs",
    num:0,
    img: "vva.png",
    description: "Va Voir Ailleurs est une agence audio visuel, centré autour du voyage et de l'humanitaire",
    link: "https://www.vavoirailleurs.org/"
}

export const RageInterface:ProjectInterface = {
    name: "RageTatt",
    num:1,
    img: "rage.png",
    description: "Jeune tatoueuse Lyonnaise, Rage sait se démarquer grace a son style gothique et horrifique",
    link: "http://ragetatt.com/"
}

export const NoProjectInterface1:ProjectInterface = {
    name: "En Cours",
    num:2,
    img: "rien.png",
    description: "Rajoutez votre projet ici, pour cela, n'hésitez à me contacter!",
    link: ""
}

export const NoProjectInterface2:ProjectInterface = {
    name: "En Cours...",
    num:3,
    img: "rien.png",
    description: "Rajoutez votre projet ici, pour cela, n'hésitez à me contacter!",
    link: ""
}