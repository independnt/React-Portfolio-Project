class Api::SearchController < ApplicationController
  require 'rest-client'
  require 'uri'

  def get_state_info
    apiKey = ENV['BEERDB_KEY']
    state = params[:state]
    url = 'https://beermapping.com/webservice/locstate/' + apiKey + '/' + state + '&s=json'
    if response = RestClient.get(url)
      render json: response
    else
      render json: {message: "Sorry, something went wrong with the API, refresh and try again!"}
    end
  end

  def get_city_info
    apiKey = ENV['BEERDB_KEY']
    cityState = URI.encode(params[:cityState])
    url = 'https://beermapping.com/webservice/loccity/' + apiKey + '/' + cityState + '&s=json'
    if response = RestClient.get(url)
      render json: response
    else
      render json: {message: "Something went wrong, enter a valid city/State and try again!"}
    end
  end

end
