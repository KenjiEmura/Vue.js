function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            specialAttackRound: 3,
            winner: null,
            logMessages: [],
        };
    },

    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = "Draw";
            } else if (value <= 0) {
                this.winner = "Monster";
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = "Draw";
            } else if (value <= 0) {
                this.winner = "Player";
            }
        },
    },

    computed: {
        monsterBarStyles() {
            if (this.monsterHealth > 0) {
                return { width: this.monsterHealth + "%" };
            }
            return { width: 0 };
        },
        playerBarStyles() {
            if (this.playerHealth > 0) {
                return { width: this.playerHealth + "%" };
            }
            return { width: 0 };
        },
        canUseSpecialAttack() {
            return this.currentRound % this.specialAttackRound !== 0;
        },
    },

    methods: {
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = [];
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            this.addLogMessage("Monster", "Attack", attackValue);
        },
        attackMonster() {
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.currentRound++;
            this.addLogMessage("Player", "Attack", attackValue);
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.addLogMessage("Player", "Attack", attackValue);
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
            this.addLogMessage("Player", "Heal", healValue);
        },
        surrender() {
            this.winner = "Monster";
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            });
        },
    },
});

app.mount("#game");
