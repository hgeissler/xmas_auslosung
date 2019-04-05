new Vue({ 
  el: '#app',
  data() {
    return {
      valid: true,
      select: null,
      items: [
        "Birgit", "Celina", "Elisa", "Hannes", "Karla", "Lena", "Marius", "Volker"
      ],
      show: false,
      btn: false,
      los: ''
    };  
  },
  methods: {
    change: function() {
      if (this.select != null) {
        this.btn = true;
      }
    },

    btnClick: function() {
      var request = new XMLHttpRequest();
      var data = [];
      var selected = this.select;

      data = {
        names: [
        "Birgit", "Celina", "Elisa", "Hannes", "Karla", "Lena", "Marius", "Volker"
        ]
      };
      console.log(data);
      
      var lottery = data.names;
      console.log(lottery);
      
      for (let index = 0; index < lottery.length; index++) { 
        const element=lottery[index]; 
        if (element==selected) {
          lottery.splice(index,1); 
        } 
      }
      var randomNumber=Math.floor(Math.random() * lottery.length) 
      this.los=selected; 
      do { 
        this.los=lottery[randomNumber];
      } while(this.los==this.select); 
      this.show=true; 
      console.log(this.show); 
      console.log(this.los);
    }
  }
});