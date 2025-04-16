import {
    colour_mix,
    largest_product,
    day_of_the_week,
    pay_raise,
    is_leap
  } from './functions.js';
  
  function Question1(){
      return <section>
  <br />
  <h2>Question 1</h2>
  <p>colour_mix("red", "blue") == "{colour_mix("red", "blue")}"</p>
  <p>colour_mix("green", "blue") == "{colour_mix("green", "blue")}"</p>
  <p>colour_mix("red", "green") == "{colour_mix("red", "green")}"</p>
      </section>;
  }
  
  function Question2(){
      return <section>
  <br />
  <h2>Question 2</h2>
  <p>largest_product(-8, 12, 20) == "{largest_product(-8, 12, 20)}"</p>
  <p>largest_product(25, 39, 27) == "{largest_product(25, 39, 27)}"</p>
  <p>largest_product(4.5, 9.1, 0.2) == "{largest_product(4.5, 9.1, 0.2)}"</p>
      </section>;
  }
  
  function Question3(){
      return <section>
 <br />
  <h2>Question 3</h2>
  <p>day_of_the_week(3) == "{day_of_the_week(3)}"</p>
  <p>day_of_the_week(4) == "{day_of_the_week(4)}"</p>
  <p>day_of_the_week(6) == "{day_of_the_week(6)}"</p>
      </section>;
  }
  
  function Question4(){
      return <section>
  <br />
  <h2>Question 4</h2>
  <p>pay_raise("F", 2, 30000) == "{pay_raise('F', 2, 30000)}"</p>
  <p>pay_raise("P", 11, 50000) == "{pay_raise('P', 11, 50000)}"</p>
  <p>pay_raise("F", 15, 80000) == "{pay_raise('F', 15, 80000)}"</p>
      </section>;
  }
  
  function Question5(){
      return <section>
  <br />
  <h2>results</h2>
  <p>is_leap(2025) == "{is_leap(2025).toString()}"</p>
  <p>is_leap(2024) == "{is_leap(2024).toString()}"</p>
  <p>is_leap(2023) == "{is_leap(2023).toString()}"</p>
      </section>;
  }
  
  export {Question1, Question2, Question3, Question4, Question5}
  