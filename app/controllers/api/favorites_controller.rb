class Api::FavoritesController < ApplicationController
  before_action :authenticate_user

  def index
    @user = User.find_by(id: params[:user_id])
    @favorites = @user.favorites
    render json: @favorites
  end

  def create
    @user = User.find_by(id: params[:user_id])
    @favorite = @user.favorites.build(favorite_params)
    if @favorite.save
      render json: @favorite
    else
      render json: {message: @favorite.errors}, status: 400
    end
  end

  def destroy
    @user = User.find_by(id: params[:user_id])
    @favorite = @user.favorites.find_by(id: params[:id])
    @favorite.destroy
    @favorites = @user.favorites
    render json: @favorites, status: 200
  end

  private

  def favorite_params
    params.require(:favorite).permit(:name, :city, :state, :street, :phone, :url)
  end
end
