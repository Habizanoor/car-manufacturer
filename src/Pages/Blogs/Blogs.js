import React from 'react';

const Blogs = () => {
    return (
        <div className='p-10'>
            <h4 className='font-bold'> 1.How will you improve the performance of a React Application?</h4>
            <p className='p-3'>Ans: By avoiding inline functions as much as possible. By Memoizing React components to prevent unnecessary re-renders. Code-splitting in React using dynamic import(). By calling multiple APIs parallelly.</p>

            <h4 className='font-bold'> 2.What are the different ways to manage a state in a React application?</h4>
            <p className='p-3'>Ans: There are 5 type React state to manage, And they are- 1 . Communication State, 2. Data State, 3. Control State, 4. Session State, 5. Location State</p>
            
            <h4 className='font-bold'> 3.How does prototypical inheritance work?</h4>
            <p className='p-3'>Ans: The Prototypical Inheritance is a feature in javascript which is used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
            
            <h4 className='font-bold'> 4.Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h4>
            <p className='p-3'>Ans: We do this way because use products the value will be fixed this will never change dynamicly, by using setProducts we can get value dynamicly.</p>
            
            <h4 className='font-bold'> 5.You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>
            <p className='p-3'>Ans: We could use filter if we want to find all items, and use find only one specific element.</p>
            
            <h4 className='font-bold'> 6.What is a unit test? Why should write unit tests?</h4>
            <p className='p-3'>Ans: </p>

        </div>
    );
};

export default Blogs;