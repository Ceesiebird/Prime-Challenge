function findPrime(num){
				
	//We set the initial value of c to 0 for use in the for loop below.
		var c = 0;
 
		//We loop until i is equal to $num
			for (i = 1; i <= num; i++) {
				
			/*In order to check if the $num is divisible by itself and 1
			  here we use the modulo operator (%) to return the remainder value after division of $num by i.
			  so if the remainder is 0 then it is divisible.*/
				if (num % i == 0) {
					
					//We increment the value of c each time the remainder of the division equals 0. 
                        c = c + 1;
                    }
                }
 
			/*If the value of c is 2 then it is a prime number
			  because a prime number should be exactly divisible in two cases only (by itself and by the number 1)*/
                if (c == 2) {
                    return true;
                }else{
                    return false;
                }
            }  