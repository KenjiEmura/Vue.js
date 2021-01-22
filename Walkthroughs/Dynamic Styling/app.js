const app = Vue.createApp({
	data() {
		return {
			boxASelected: false,
			boxBSelected: false,
			boxCSelected: false,
		};
	},
	computed: {
		boxAClasses() {
			return { active: this.boxASelected };
		},
		boxBClasses() {
			return { active: this.boxBSelected };
		},
		boxCClasses() {
			return { active: this.boxCSelected };
		},
	},
	methods: {
		boxSelected(box) {
			switch (box) {
				case "A":
					console.log("'A' was selected");
					this.boxASelected = !this.boxASelected;
					break;
				case "B":
					console.log("'B' was selected");
					this.boxBSelected = !this.boxBSelected;
					break;
				case "C":
					console.log("'C' was selected");
					this.boxCSelected = !this.boxCSelected;
					break;
			}
		},
	},
});

app.mount("#styling");
