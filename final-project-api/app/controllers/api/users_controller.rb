class Api::UsersController < ApplicationController
  before_action :authenticate_user, only:[:update, :show]
  before_action :set_user, only:[:show, :update]

  def index
    render json: User.all
  end

  def create
    @user = User.new(email: params[:email], password: params[:password])
    if @user.save
      render json: @user
    else
      render json: {message: @user.errors}, status: 400
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

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

  def set_user
    @user = User.find_by(id: params[:id])
  end


end
