Glapp::Application.routes.draw do
  match '/*path' => 'application#cors_preflight_check', :via => :options
  resources :libraries, defaults: { format: 'json' } do
    resources :commands
  end
end
