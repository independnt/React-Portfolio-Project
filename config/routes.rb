Rails.application.routes.draw do
  namespace :api do
    get 'get_beer_info/:state' => 'users#get_beer_info'
    post 'user_token' => 'user_token#create'
    get 'get_user' => 'users#get_user'
    resources :users do
      resources :favorites, only: [:index, :create, :destroy, :update]
    end
  end
end
