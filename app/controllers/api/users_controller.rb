class Api::UsersController < ApplicationController
  before_action :authenticate_user, only:[:update, :show]
  before_action :set_user, only:[:show, :update]
  require 'rest-client'

  def index
    render json: User.all
  end

  def create
    @user = User.new(email: params[:email], password: params[:password])
    if @user.save
      render json: @user
    else
      render json: {errors: @user.errors}, status: 400
    end
  end

  def update
    @user.update
    render json: @user
  end

  def show
    render json: @user
  end

  def get_user
    authHeader = request.headers['Authorization']
    jwt = authHeader.split(" ")[1]
    decoded_token = JWT.decode jwt, Rails.application.secrets.secret_key_base, true, { :algorithm => 'HS256' }
    current_user = User.find((decoded_token[0])['sub'])
    render json: current_user
  end

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
    cityState = params[:cityState]
    url = 'https://beermapping.com/webservice/loccity/' + apiKey + '/' + cityState + '&s=json'
    if response = RestClient.get(url)
      render json: response
    else
      render json: {message: "Something went wrong, enter a valid city/State and try again!"}
    end 
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

  def set_user
    @user = User.find_by(id: params[:id])
  end


end
