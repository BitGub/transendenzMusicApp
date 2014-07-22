Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".
  resources :home, only: [:index]
  match 'home/about', to: 'home#about', via: 'get'
    
  # You can have the root of your site routed with "root"
  root 'home#index'
end
