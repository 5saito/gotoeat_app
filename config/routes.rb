Rails.application.routes.draw do
  root to: 'gotoeats#index'
  resources :gotoeats,only: :index
end
