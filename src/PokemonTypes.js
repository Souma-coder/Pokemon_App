export const PokemonTypes = (type) => {
  switch (type) {
    case "fire":
      return {
        backgroundColor: "#ff3300",
        color: "white",
      };
    case "water":
      return {
        backgroundColor: "#0000cc",
        color: "white",
      };
    case "grass":
      return {
        backgroundColor: "#006600",
        color: "white",
      };
    case "normal":
      return {
        backgroundColor: "#999966",
        color: "white",
      };
    case "rock":
      return {
        backgroundColor: "#331a00",
        color: "white",
      };
    case "ground":
      return {
        backgroundColor: "#996600",
        color: "white",
      };
    case "poison":
      return {
        backgroundColor: "#4d004d",
        color: "white",
      };
    case "psychic":
      return {
        backgroundColor: "#cc0052",
        color: "white",
      };
    case "ghost":
      return {
        backgroundColor: "#33001a",
        color: "white",
      };
    case "dark":
      return {
        backgroundColor: "#000000",
        color: "white",
      };
    case "steel":
      return {
        backgroundColor: "#4d4d4d",
        color: "white",
      };
    case "bug":
      return {
        backgroundColor: "#99ff33",
        color: "white",
      };
    case "flying":
      return {
        backgroundColor: "#666699",
        color: "white",
      };
    case "dragon":
      return {
        backgroundColor: "#3333ff",
        color: "white",
      };
    case "fairy":
      return {
        backgroundColor: "#ff6699",
        color: "white",
      };
    case "fighting":
      return {
        backgroundColor: "#ff0000",
        color: "white",
      };
    case "electric":
      return {
        backgroundColor: "#ffff00",
        color: "white",
      };
    case "ice":
      return {
        backgroundColor: "#00ccff",
        color: "white",
      };

    default:
      return {
        backgroundColor: "",
        color: "",
      };
  }
};
