require 'grape'
require 'erb'

class API < Grape::API
  get :hello do
    { hello: 'world' }
  end
end

class Web < Sinatra::Base
  get '/' do
    erb :index
  end
end
