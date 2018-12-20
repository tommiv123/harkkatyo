
//käytetään use-strictiä globaalisti
'use strict';

//Creating a list of tasks with Vue
var itemsList = new Vue({
  el: '#itemsList',
  data: {
    items: [
      { name: 'Read for exam'},
      { name: 'Finish case studies'},
      { name: 'Buy christmas gifts'},
      { name: 'Sleep'}
    ]
  },
  //use localStorage
  mounted() {
    if (localStorage.name)
      this.name=localStorage.name;
  },
  watch: {
    name(newName) {
      localStorage.name=newName;
    }
  },
//function to add items to the list
  methods: {
    //save after refreshing
    persist(){
      localStorage.name = this.name;
    },
    addItem: function(e) {
      e.preventDefault();
      this.items.push({
        name: this.items.name,
      });
    },
    //function to delete tasks from the list
    deleteTask: function(task) {
      this.items.splice(this.items.indexOf(task), 1)
    }
  }
});
