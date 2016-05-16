#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, "sqlite3:pizzashop.db"

class Product < ActiveRecord::Base

end

before do
	@products = Product.all
end

get '/' do
	erb :index
end

get '/about' do
	erb :about
end

get '/assortment' do

   	erb :assortment
end
