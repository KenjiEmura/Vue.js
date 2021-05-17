const app = Vue.createApp({
	data() {
		return {
			name: "Kenji",
			age: 30,
			imgURL:
				"https://3lhowb48prep40031529g5yj-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/logo-vuejs-min.png",
		};
	},
	methods: {
		randomNumber() {
			return (number = Math.round(Math.random()));
		},
	},
});

app.mount("#assignment");
