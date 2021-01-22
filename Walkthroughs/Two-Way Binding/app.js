const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: "",
			lastname: "",
			// fullname: "",
			handlers: {
				// This dictionary allows us to handle event triggering of one single element (See html line 31)
				mouseenter: this.theFunction,
				click: this.theFunction,
			}
		};
	},
	watch: {
		// name(value) {
		// 	if (value === "") {
		// 		this.fullname = "";
		// 	} else {
		// 		this.fullname = value + " " + "Emura";
		// 	}
		// },
		fullname(value) {
			if (value == 'Kenji Emura') {
				console.log('Watch code executed')
				setTimeout( () => {
					this.counter = 1000;
				}, 250)
			}
		},
	},
	computed: {
		fullname() {
			console.log("Computed code executed");
			if (this.name === "") {
				return "";
			} else {
				return this.name + " " + this.lastname;
			}
		},
	},
	methods: {
		theFunction() {
			console.log('Function activated')
		},
		add(num) {
			console.log("Added button pressed");
			this.counter = this.counter + num;
		},
		reduce(num) {
			console.log("Reduce button pressed");
			this.counter = this.counter - num;
		},
		setName() {
			this.name = event.target.value;
		},
		submitPreventHandler() {
			console.log("Default behaviour prevented");
		},
		eventTriggered() {
			console.log("The event has been triggered");
		},
		resetInput() {
			this.name = "";
		},
	},
});

app.mount("#events");
