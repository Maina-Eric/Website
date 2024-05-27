import proptypes from 'prop-types'

function List(props) {

    const category = props.category;
    const itemlist = props.items;

    // const fruits =  [{id: 1, name:"apple", calories: 95}, //providing a unique key to each item
                   // {id: 2, name: "orange", calories: 45}, 
                   // {id: 3, name: "banana", calories: 105}, 
                   // {id: 4, name: "coconut", calories: 159}, 
                   // {id: 5, name: "pineapple", calories: 37}];
    
    itemlist.sort((a,b) => a.name.localeCompare(b.name)) // ALPHABETICAL ORDER //Lexicographic order
    // itemlist.sort((a,b) => b.name.localeCompare(a.name)) //  REVERSE ALPHABETICAL ORDER

    // itemlist.sort((a,b)=> a.calories - b.calories) //NUMERIC By Calories
    // itemlist.sort((a,b)=> b.calories - a.calories) // REVERSE NUMERIC By Calories


    // const lowcalfruits = itemlist.filter(fruit => fruit.calories < 100); // LOW CALORIES filter
    // const highcalfruits = itemlist.filter(fruit => fruit.calories >= 100); // HIGH CALORIES filter

    //const listitems = fruits.map(fruit => <li key={fruit.id}>
                                             // {fruit.name}: &nbsp; 
                                             // <b>{fruit.calories}</b></li>); //non breaking space characters
    
    const listitems = itemlist.map(item => <li key={item.id}>
                                             {item.name}: &nbsp; 
                                             <b>{item.calories}</b></li>); //non breaking space characters
    

    // const listitems = lowcalfruits.map(itemlist => <li key={itemlist.id}>
                                                        //{itemlist.name}: &nbsp;
                                                        //<b>{itemlist.calories}</b></li>);
    
    // const listitems = highcalfruits.map(itemlist => <li key={itemlist.id}>
                                                        //{itemlist.name}: &nbsp;
                                                        //<b>{itemlist.calories}</b></li>);
    return( <>
            <h3 className="list-category" >{category}</h3>
            <ol className="list-items" >{listitems}</ol>
            </>);



}
List.propTypes = {
    category : proptypes.string,
    items : proptypes.arrayOf(proptypes.shape({ id: proptypes.number,
                                                name: proptypes.string,
                                                calories: proptypes.number}))
}
//  
export default List