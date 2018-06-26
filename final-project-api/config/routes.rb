Rails.application.routes.draw do
  namespace :api do
    post 'user_token' => 'user_token#create'
    resources :users do
      resources :favorites, only: [:index, :create, :destroy]
    end
  end
end
