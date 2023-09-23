import TradicionalExpressoIcon from "../../assets/coffes/TradicionalExpressoIcon.svg";
import ExpressoAmericano from "../../assets/coffes/ExpressoAmericano.svg";
import ExpressoCremoso from "../../assets/coffes/ExpressoCremoso.svg";
import ExpressoGelado from "../../assets/coffes/ExpressoGelado.svg"
import CafeComLeite from "../../assets/coffes/CafeComLeite.svg"
import Latte from "../../assets/coffes/Latte.svg"
import Capuccino from "../../assets/coffes/Capuccino.svg"
import Macchiato from "../../assets/coffes/Macchiato.svg"
import Mocaccino from "../../assets/coffes/Mocaccino.svg"
import ChocolateQuente from "../../assets/coffes/ChocolateQuente.svg"
import Cubano from "../../assets/coffes/Cubano.svg"
import Havaiano from "../../assets/coffes/Havaiano.svg"
import Arabe from "../../assets/coffes/Arabe.svg"
import Irlandes from "../../assets/coffes/Irlandes.svg"


import { Coffee } from "../../types/Coffee";



export const coffees: Coffee[] = [
  {
    id: 1,
    image: TradicionalExpressoIcon,
    tag: "Tradicional",
    name: "Café Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
  },
  {
    id: 2,
    image: ExpressoAmericano,
    tag: "Tradicional",
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
  },
  {
    id: 3,
    image: ExpressoCremoso,
    tag: "Tradicional",
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
  },
  {
    id: 4,
    image: ExpressoGelado,
    tag: { tag1: "Tradicional", tag2: "Gelado" },
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
  },
  {
    id: 5,
    image: CafeComLeite,
    tag: { tag1: "Tradicional", tag2: "Com leite" },
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
  },
  {
    id: 6,
    image: Latte,
    tag: { tag1: "Tradicional", tag2: "Com leite" },
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
  },
  {
    id: 7,
    image: Capuccino,
    tag: { tag1: "Tradicional", tag2: "Com leite" },
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
  },
  {
    id: 8,
    image: Macchiato,
    tag: { tag1: "Tradicional", tag2: "Com leite" },
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
  },
  {
    id: 9,
    image: Mocaccino,
    tag: { tag1: "Tradicional", tag2: "Com leite" },
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
  },
  {
    id: 10,
    image: ChocolateQuente,
    tag: { tag1: "Especial", tag2: "Com leite" },
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
  },
  {
    id: 11,
    image: Cubano,
    tag: { tag1: "Especial", tag2: "Alcoólico" },
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
  },
  {
    id: 12,
    image: Havaiano,
    tag: "Especial",
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
  },
  {
    id: 13,
    image: Arabe,
    tag: "Especial",
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
  },
  {
    id: 14,
    image: Irlandes,
    tag: { tag1: "Especial", tag2: "Alcoólico" },
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
  },
];
