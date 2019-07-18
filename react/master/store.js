import { action, computed, observable } from 'mobx';
import { timingSafeEqual } from 'crypto';
class Store{
    @observable orgName="选择项目";

    @action
    setOrgName(value){
        this.orgName=value;
    }
    
    getOrgName(){
        return this.orgName;
    }
}
const store = new Store();

export default store;