class CommandsController < ApplicationController
  def index
    render json: Command.all
  end
end
