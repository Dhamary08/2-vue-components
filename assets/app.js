Vue.component("information-table", {
  props: {
    img: Object,
    name: String,
    data: String,
    category: String,
    start: Number,
  },
  template: `
            <tr>
                <td>
                    <img :src="img.url" :alt="img.imagen">
                    <p class="text-center">{{name}}</p>
                </td>
                <td>
                    <p>{{data}}</p>
                </td>
                <td>
                    <p :class="changeColorcategory(category)" class="tagCategory">{{category}}</p>
                </td>
                <td>
                    <p class="d-flex">
                        <span class="startYellow">{{starYellowValue(start)}}</span>
                        <span class="startGrey">{{starGreyValue(start)}}</span>
                    </p>
                </td>
            </tr>
        `,
  data() {
    return {
      starType: "★",
    };
  },
  methods: {
    changeColorcategory(value) {
      let style = "";
      if (value === "Documental") {
        style = "categoryGreen";
      } else if (value === "Aventura") {
        style = "categoryBlue";
      } else {
        style = "categoryYellow";
      }
      return style;
    },
    starYellowValue(value) {
      let countStart = "";
      for (let index = 0; index < value; index++) {
        countStart = countStart + this.starType;
      }
      return countStart;
    },
    starGreyValue(value) {
      let valueTotal = 5 - value;
      let countStart = "";
      for (let index = 0; index < valueTotal; index++) {
        countStart = countStart + this.starType;
      }
      return countStart;
    },
  },
});

var app = new Vue({
  el: "#app",
  data: {
    maxStar: 5,
    movieList: [
      {
        id: 1,
        img: {
          imagen: "pelicula LADI Di",
          url: "https://static.cinepolis.com/img/peliculas/39783/1/1/39783.jpg",
        },
        name: "LADY DI",
        data:
          "The Princess es un documental cargado de emoción sobre la vida y muerte prematura de Diana, la Princesa de Gales, y sus profundas y trascendentales consecuencias. Contada en su totalidad a través de material de archivo.",
        category: "Documental",
        start: 3,
      },
      {
        id: 2,
        img: {
          imagen: "Pelicula erase una vez un genio",
          url: "https://static.cinepolis.com/img/peliculas/39969/1/1/39969.jpg",
        },
        name: "Erase una vez un Genio",
        data:
          "La Dra. en literatura Alithea Binnie parece estar feliz con su vida aunque se enfrenta al mundo con cierto escepticismo. De repente, se encuentra con un genio que ofrece concederle tres deseos a cambio de su libertad.",
        category: "Aventura",
        start: 5,
      },
      {
        id: 3,
        img: {
          imagen: "pelicula nop",
          url: "https://static.cinepolis.com/img/peliculas/39480/1/1/39480.jpg",
        },
        name: "¡NOP!",
        data:
          "Los cuidadores de un rancho de caballo de California se cruzan con una fuerza misteriosa que afecta no sólo el comportamiento humano sino también el de los animales ¿Estamos presenciando un mal milagro?, ¿Preparados para una nueva experiencia de terror? Nada es lo que parece...",
        category: "Terror",
        start: 2,
      },
    ],
  },
});
