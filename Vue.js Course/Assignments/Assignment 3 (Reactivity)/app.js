const app = Vue.createApp({
	data() {
		return {
			sum: 0,
		};
	},
	computed: {
		output() {
			console.log(this.sum);
			if (this.sum > 37) {
				return "Too much!";
			} else {
				return "Not there yet";
			}
		},
	},
	watch: {
		sum() {
			console.log('Countdown started!')
			setTimeout(() => {
				this.sum = 0;
			}, 5000);
		},
	},
	methods: {
		add5() {
			this.sum += 5;
		},
		add1() {
			this.sum += 1;
		},
	},
});

app.mount("#assignment");
