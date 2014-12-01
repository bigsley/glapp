class LibrariesController < ApplicationController
  respond_to :json

  def index
    render json: Library.all
  end
end
