class Frame {
	score: number;
	score2: number;
	constructor(){
		this.score = Math.floor(Math.random()*11);
		if (this.score >= 10){
			this.score2 = 0;
		}else{
			this.score2 = Math.abs(Math.floor(Math.random()*11) - (this.score));

		}
	}
}
let frms: Frame[]=[];
let total: number = 0;
let total2: number = 0;
	for(let i = 0; i <10; i++){
		frms[i] = new Frame();
		total+=frms[i].score;
		total2+=(frms[i].score2);
	}
console.log(frms[0].score,frms[1].score,frms[2].score,frms[3].score,
	frms[4].score,frms[5].score,frms[6].score,frms[7].score,
	frms[8].score,frms[9].score);
console.log(frms[0].score2,frms[1].score2,frms[2].score2,frms[3].score2,
	frms[4].score2,frms[5].score2,frms[6].score2,frms[7].score2,
	frms[8].score2,frms[9].score2,(total + total2));
