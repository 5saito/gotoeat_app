Rails.application.routes.draw do
  root to: 'gotoeats#index'
  get "gotoeats/simulation"
  resources :gotoeats, only:[:index,:new,]
end
