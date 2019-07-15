import { Parallax } from "../components";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithubSquare,
  faRaspberryPi
} from "@fortawesome/free-brands-svg-icons";

library.add(faHome, faLinkedin, faGithubSquare, faRaspberryPi);

/**
 * You can register global components here
 */

const globalComponents = {
  install(Vue) {
    Vue.component(Parallax.name, Parallax);
    Vue.component("font-awesome-icon", FontAwesomeIcon);
  }
};

export default globalComponents;
