class Api::UsersController < ApplicationController
  before_action :set_user, only:[:show, :destroy, :update]


  def index
    render json: User.all
  end

  def create
    user = User.create(user_params)
    render json: user
  end

  def show
    render json: @user
  end

  def destroy
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def set_user
    @user = User.find_by(id: params[:id])
  end


end
