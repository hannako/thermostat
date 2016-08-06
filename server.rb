require 'sinatra'
require 'json'


class TempAPI < Sinatra::Base

  before do
    headers 'Access-Control-Allow-Origin' => '*'
  end

  # get '/time' do
  #   { time: Time.now }.to_json
  # end

  post '/temp' do
    $temp = params[:temp]
    $psm = params[:psm]
  end

  get '/temp' do
    {temp: $temp, psm: $psm }.to_json

  end

run! if app_file == $0
end
