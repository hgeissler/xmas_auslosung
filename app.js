new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data() {
    return {
      selectedName: null,
      passwords: [
        '7823',
        '3498',
        '2390',
        '2353',
        '8934',
        '4563',
        '4382',
        '0940',
      ],
      showResult: false,
      lot: '',
      wrongPW: false,
      userPW: '',
    }
  },

  methods: {
    btnClick: function () {
      this.showResult = false
      this.wrongPW = false
      var result = false
      this.passwords.forEach((pw) => {
        if (pw == this.userPW) {
          result = true
        }
      })
      if (result) {
        this.showResult = true
      } else {
        this.wrongPW = true
      }
    },
  },

  created() {
    this.userPW = ''
  },
})
