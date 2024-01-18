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
    name: "RageTattoo",
    num:1,
    img: "rage.png",
    description: "React, Typescript",
    link: "http://ragetatt.com/"
}