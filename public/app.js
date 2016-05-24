
// записать в localStorage 3 ключа  'product_1','product_2','product_3',и увеличивать их значение на 1
//при нажатии на кнопку под каждой пицой


function add_to_cart(id)
{
    var key = 'product_' + id;
    var x = window.localStorage.getItem(key);
    x = x*1+1;
    window.localStorage.setItem(key, x);
    update_orders_input();
    update_orders_button();
}

// Создать из localStorage строку вида "'product_1' = 'count', 'product_2' = 'count', 'product_3 ' = 'count' "
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

//Передать строку в скрытое текстовое поле формы на главной странице,которая будет отправлять
//ее на сервер
function update_orders_input()
{
  var orders = cart_get_orders();
  $('#orders_input').val(orders);
}


// Посчитать общее количество заказанных пиц
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


//Вывести на кнопке корзины общее число заказанных пиц
function update_orders_button()
{
  var text = 'Cart('+ cart_get_number_of_items() + ')';
  $('#orders_button').val(text);
}
