
        var  people = [
        {
                "name": "gopi",
                "age": 36,
                "gender": "male",
                "city": "hyd",
                "salary": 10000
            },
            {
                "name": "srikanth",
                "age": 32,
                "gender": "male",
                "city": "bangaluru",
                "salary": 20000
            },

            {
                "name": "pradeep", 
                "age": 21,
                "gender": "male",
                "city": "hyd",
                "salary": 20000
            },
            
            {
                "name": "mounika",
                "age": 20,
                "gender": "female",
                "city": "nalgonda",
                "salary": 30000
            },
            {
                "name": "nikhil",
                "age": 22,
                "gender": "male",
                "city": "guntur",
                "salary": 20000
            },
            {
                "name": "riya",
                "age": 14,
                "gender": "female",
                "city": "indore",
                "salary": 40000
            },
        ];
         people.map((p)=>{
            console.log(p.name);
         });
        // filter method
        people.filter((p)=>{
            if(p.age>=20){
                console.log(p.age);
            }
        });
        // filter method end
        
            // // splice method
            people.splice(2,1);
            console.log(people);
            // // splice method end

            // // index method
            console.log(people[2]);
            // index method end
            // reduce method
              var salary = people.reduce((accumulator,currentvalue)=> accumulator + currentvalue.salary,0);
              console.log(salary);

  