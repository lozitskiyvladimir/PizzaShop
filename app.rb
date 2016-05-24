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


#Получаем в браузере все пиццы из бд
get '/' do
	@products = Product.all
	erb :index
end

get '/about' do
	erb :about
end

#Получаем в браузере все пиццы из бд
get '/cart' do
	@products = Product.all
	erb :cart
end

# Получаем данные из корзины и преобразуем строку
# вида "product_1=4,product_2=1,product_3=10,"
# массив вида  [["1", "4"], ["2", "1"], ["3", "10"]]
post '/cart' do
	orders_input = params[:orders]
	@orders = parse_orders_input orders_input
	erb "hello!#{@orders.inspect}"
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
