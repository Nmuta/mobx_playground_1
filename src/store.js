import {observable} from "mobx";
import {observer} from "mobx-react";

class Store{
  @observable count=0;

  increment=()=>{
    this.count++;
  }

}


export default new Store();
