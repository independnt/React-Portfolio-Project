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

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

  def set_user
    @user = User.find_by(id: params[:id])
  end


end
