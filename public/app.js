function add_to_cart(id)
{
    var key = 'product_' + id;
    var x = window.localStorage.getItem(key);
    x = x*1+1;
    window.localStorage.setItem(key, x);
    update_orders_input();
    update_orders_button();
}


function something()

{

  var x = window.localStorage.getItem('bbb');
  x = x * 1 + 1;
  window.localStorage.setItem('bbb', x)
  alert(x);
}

function update_orders_input()
{
  var orders = cart_get_orders();
  $('#orders_input').val(orders);
}

function cart_get_number_of_items()
{
  var cnt = 0;
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

function cart_get_orders()
{
  var orders = '';
  for (var i = 0; i < localStorage.length; i++)
  {
      var key = window.localStorage.key(i);
      var value = window.localStorage.getItem(key);
      if(key.indexOf('product_') == 0)
      {
        orders = orders + key + '=' + value + ',';
      }

  }
  return orders;

}

function update_orders_button()
{
  var text = 'Cart('+ cart_get_number_of_items() + ')';
  $('#orders_button').val(text);
}
function get_peperoni_count()
{
  var key = 'product_2';
  var peperoni_count = window.localStorage.getItem(key);
  return peperoni_count;
}

function get_hawajjan_count()
{
  var key = 'product_1';
  var hawajjan_count = window.localStorage.getItem(key);
  return hawajjan_count;
}
function get_vegetarian_count()
{
  var key = 'product_3';
  var vegetarian_count = window.localStorage.getItem(key);
  return vegetarian_count;
}
