import { action, computed, observable } from 'mobx';
import { axios } from '@choerodon/boot';

class Store {
  @observable data = [];
  @observable selectedRowKeys=[];
  @observable isSelectedRowKeys=true;
  @observable isLoading = true;
  @observable pagination = {
    current: 1,
    pageSize: 10,
    total: '',
  };
  @observable level='site';

  @action
  setLevel(value){
    this.level=value;
    this.loadData();
  }
  
  @action
  setData(data) {
    this.data = data;
  }
  @action
  setSelectedRowKeys(value){
    this.selectedRowKeys=value;
    this.setIsSelectedRowKeys(value);
  }
  @action
  setIsSelectedRowKeys(value) {
    this.isSelectedRowKeys= value.length>0?false:true;
  }

  @action
  setIsLoading(data) {
    this.isLoading = data;
  }
  @action
  setPagination(value) {
    this.pagination = value;
  }
  
  @computed
  get getData() {
    return this.data.slice();
  }
  @computed
  get getLevel() {
    return this.level.toString();
  }
  @computed
  get getSelectedRowKeys() {
    return this.selectedRowKeys.slice();
  }
  

  @action
  loadData(page = this.pagination.current, size = this.pagination.pageSize) {
    const body = {};
    const sorter = [];
   
    this.isLoading = true;
    // console.log(page);
     Object.assign(body,{level:this.level});
    // console.log(body);
    axios.post(
      `/iam/v1/roles/search?page=${page}&size=${size}&sort=${sorter.join(',')}`,
      JSON.stringify(body),
    )
      .then((res) => {
        this.isLoading = false;
        this.data = res.list;
        //这里开始进行数据筛选 根据下拉表进行筛选
        let arr=[];
        for(let item of this.data){
          if(item.level===this.level){
            arr.push(item);
          }
        }
        this.data=arr;
        this.pagination = {
          current: res.pageNum,
          pageSize: res.pageSize,
          total:res.total,
        };
      });
  }
}

const store = new Store();

export default store;
