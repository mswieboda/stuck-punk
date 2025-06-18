require 'sinatra'
require 'grape'

require './app'

# use Rack::Session::Cookie
run Rack::Cascade.new [Web, API]
