
function birthday(bday){

    for(var i = bday; i>=0; i--) {

        if(i>=30) {
            console.log(i + " days until my birthday. Such a long time...... :(");
        }

        else if(i<30 && i>=5) {
            console.log(i + " days until my birthday. Almost there");
        }

        else if(i<5 && i>0) {
            console.log(i + " DAYS UNTIL MY BIRTHDAY!!!");
        }

        else if (i == 0) {
            console.log("HAPPY BIRTHDAY");
        }

        else {
            break;
        }

    }
}

birthday(60);