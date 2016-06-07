
// add to localStorage 3 keys like this  'product_1','product_2','product_3',
//and increase its values on 1
//through pressing on button under each pizza 


function add_to_cart(id)
{
    var key = 'product_' + id;
    var x = window.localStorage.getItem(key);
    x = x*1+1;
    window.localStorage.setItem(key, x);
    update_orders_input();
    update_orders_button();
}

// create from  localStorage the string like this
//"'product_1' = 'count', 'product_2' = 'count', 'product_3 ' = 'count' "
function cart_get_orders()
{
  //variable "orders" contain string like this
  //"'product_1' = 'count', 'product_2' = 'count', 'product_3 ' = 'count' "
  var orders = '';
  // take each elements  localStorage and if a key begin with " product_"
  // that  add it to  variable "orders"
  for (var i = 0; i < localStorage.length; i++)
  {
      var key = window.localStorage.key(i);
      var value = window.localStorage.getItem(key);
      if(key.indexOf('product_') == 0)
      {
        orders = orders + key + '=' + value + ',';
      }

  }
  //return from method the string variable  "orders"
  return orders;

}

//Pass the string to hidden textarea ,that send date to server
function update_orders_input()
{
  // initialize "order" by string like this
  //"'product_1' = 'count', 'product_2' = 'count', 'product_3 ' = 'count' "
  var orders = cart_get_orders();
  //Access to button control through selector, using into the control  id = 'orders_input'
  //and output to the control the string like this
  //"'product_1' = 'count', 'product_2' = 'count', 'product_3 ' = 'count' "
  $('#orders_input').val(orders);
}


// calculate all ordered pizza
function cart_get_number_of_items()
{
  // cnt is ordered pizza counter
  var cnt = 0;
  // calculate all ordered pizza
  for (var i = 0; i < localStorage.length; i++)
  {
      var key = window.localStorage.key(i);
      var value = window.localStorage.getItem(key);
      if(key.indexOf('product_') == 0)
      {
        cnt = cnt + value*1;
      }

  }
  return cnt;

}


//Display ordered pizza number on cart view button
function update_orders_button()
{
  // variable text is string, that writed on button
  //create string like 'Cart (number_of_ordered_pizza)'
  var text = 'Cart('+ cart_get_number_of_items() + ')';
  // access to cart button by selector in layout.erb <button id = 'orders_button'
  $('#orders_button').val(text);
}
// output message that your order was assepted
function orderWas_accepted ()
{
  alert('Your order was accepted!');

}
// through press button with cancel name, localStorage will be clear
function cancel_order()
{
  window.localStorage.clear();
// updete number on button
  update_orders_input();
  update_orders_button();
  // it's done, that button with cancel name  don't send  date from form to server
  return false;
}
