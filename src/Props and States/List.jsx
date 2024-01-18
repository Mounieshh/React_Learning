
function List(){


    //List Objects
    //const fruits = ['apple' ,'grapes','banana', 'Pineapple','Mango']

    const fruits = [
        {name:'apple',calories:95},
        {name:'grapes',calories:156},
        {name:'banana',calories:67},
        {name:'Pineapple',calories:159},
        {name:'Mango',calories:100}
    ]

    //Sorting using sort method 
    //For Alphabetics (Lexicographic Sorting)

     fruits.sort((a,b)=> a.name.localeCompare(b.name))

    //In reverse Order(Alphabetic)

     fruits.sort((a,b)=>b.name.localeCompare(a.name))

    //For Numeric Sorting

    fruits.sort((a,b)=> a.calories-b.calories)

    //In reverse Order(Numeric)

     fruits.sort((a,b)=> b.calories - a.calories)

    //Filter Method

    const lowCal = fruits.filter(fruit => fruit.calories < 100)
    //Using Map Function to iterate through the lists or arrays or objects

    const listItems = lowCal.map(fruit => <li key={fruit.name}>
                                    {fruit.name} : <b>{fruit.calories}</b>
                                            </li>)

    return(
        <>
        <ul>{listItems}</ul>
    
        </>
    )
}
export default List