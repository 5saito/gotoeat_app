Rails.application.routes.draw do
  root to: 'gotoeats#index'
  get "gotoeats/simulation"
  resources :gotoeats, only:[:index,:new,]
  resources :simulation, only: [:new,:create]
end
