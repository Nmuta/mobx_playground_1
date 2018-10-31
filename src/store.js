import {observable} from "mobx";
import {observer} from "mobx-react";


class Store {
    @observable count = 0;
    @observable message = "hello";

    increment = ()=>  {this.count++}

}


export default new Store();
