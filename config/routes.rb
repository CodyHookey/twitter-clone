Rails.application.routes.draw do
  root "static_pages#index"

  namespace :api do
    # USERS
    post '/signup' => 'users#create'

    # SESSIONS
    post '/login' => 'sessions#create'
    get '/authenticated' => 'sessions#authenticated'
    delete '/logout' => 'sessions#destroy'

    # TWEETS
    post '/tweets' => 'tweets#create'
    get '/tweets' => 'tweets#index'
    delete '/tweets/:id' => 'tweets#destroy'
    get '/users/:username/tweets' => 'tweets#index_by_user'
    get '/tweets/search/:keyword' => 'tweets#search'
  end

  get '*path' => 'static_pages#index'
  # If you are using active storage to upload and store images, comment the above line
end
