#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'


#Подключаем базу данных и создаем файл pizzashop.db
set :database, "sqlite3:pizzashop.db"

# Создаем сущность Products
class Product < ActiveRecord::Base

end

class Order < ActiveRecord::Base

end

#Получаем в браузере все пиццы из бд
get '/' do
	@products = Product.all
	erb :index

end

get '/about' do
	erb :about
end

#Получаем в браузере все пиццы из бд
# get '/cart' do
#
#
# 	erb :cart
# end

# Получаем данные из корзины
# вида "product_1=4,product_2=1,product_3=10,"и преобразуем в
# массив вида  [["1", "4"], ["2", "1"], ["3", "10"]],
#заменить каждый 0 индекс массива(который есть id) обектом с этим id
#в итоге получить структуру типа [[obj,count],[obj,count],[obj,count]]
post '/cart' do
	@orders_input = params[:orders]
	@items = parse_orders_input @orders_input
	@items.each do |item|
		item[0] = Product.find(item[0])
	end
	erb :cart
end

# Получаем из строки вида "product_1=4,product_2=1,product_3=10,"
# массив вида  [["1", "4"], ["2", "1"], ["3", "10"]]
def parse_orders_input orders_input
    s1 = orders_input.split(/,/)
    arr = []
    s1.each do |x|
      s2 = x.split(/=/)

      s3 = s2[0].split(/_/)

      id = s3[1]
      cnt = s2[1]

      arr2 = [id, cnt]

      arr.push arr2


    end
      return arr
end
get '/place_order' do
	@all_orders = Order.all
	erb :orders
end
#Принять данные и записать в базу данных
post '/place_order' do
	@all_orders = Order.all
	newOrder = Order.new(params[:order])
	newOrder.save
	erb :orders
	# erb :order_placed

end
