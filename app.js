new Vue({ 
  el: '#app',
  vuetify:  new Vuetify(),
  data() {
    return {
      selectedName: null,
      names: [
        "Birgit", "Celina", "Elisa", "Hannes", "Karla", "Lena", "Marius", "Volker"
      ],
      possibleDrawers: [],
      possibleResults: [],
      drawnNames: [],
      showResult: false,
      showSelect: true,
      lot: '',
      disableButton: false
    };  
  },

  methods: {
    btnClick: function() {
      // vergleiche, ob Name schon gezogen wurde
      for (let i = this.possibleResults.length - 1; i >= 0; i--) {
        const e1 = this.possibleResults[i];

        for (let j = 0; j < this.drawnNames.length; j++) {
          const e2 = this.drawnNames[j];

          if (e1 == e2) {
            this.possibleResults.splice(i, 1);
          }
        }
      }

      // entferne diejenigen, die schon gelost haben von der Liste
      for (let index = this.possibleDrawers.length -1; index >= 0; index--) {
        if (this.selectedName == this.possibleDrawers[index]) {
          this.possibleDrawers.splice(index, 1);
        }
      }

      // verhindere, dass derjenige der lost, sich selber zieht
      if (this.possibleResults.length > 1) {
        do {
          var randomNumber = Math.floor(Math.random() * this.possibleResults.length); 
          this.lot = this.possibleResults[randomNumber];
        } while(this.lot == this.selectedName);
  
        this.drawnNames.push(this.lot);

      } else {
        this.selectedName = false;
        this.showSelect = false;
      }

      this.showResult = true; 
      this.disableButton = true;
    }
  },
  
  created() {
    this.possibleDrawers = [...this.names];
    this.possibleResults = [...this.names];
  }
});