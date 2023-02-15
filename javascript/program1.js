function containsSpecialChars(str) {
    try {
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};"':\\|,.<>\/?~]/ ;
              return specialChars.test(str);
    } catch (error) {
        console.log(error)
    }
 }

       console.log(containsSpecialChars('hello!@'));
       console.log(containsSpecialChars('one two')); 
