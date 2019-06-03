Rails.application.routes.draw do

  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show] do 
      resources :bookings, only: [:index]
    end
    resources :sites, only: [:index, :show, :create, :update, :destroy] do
      resources :bookings, only: [:create, :destroy, :update]
    end
    resource :session, only: [:create,:destroy,:show]
  end
end