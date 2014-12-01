class LibrariesController < ApplicationController
  respond_to :json

  def index
    render json: Library.all
  end

  def show
    render json: Library.find(params[:id])
  end
end
