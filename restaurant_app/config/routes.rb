Rails.application.routes.draw do

  resources :sessions, only: [:create]
  resources :signup, only: [:create]
  delete :logout, to: 'sessions#logout'
  get :logged_in, to: 'sessions#logged_in'

  root to: "static#home"

  # get '*path', to: "static#home", via: :all
end
