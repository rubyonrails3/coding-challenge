class DogsController < ApplicationController
  before_action :set_breader

  def index
  end

  # react version of form
  def react
  end

  def search
    render json: @breeder
  end

  private

  def set_breader
    breed = params[:breed]
    @breeder = DogBreeder.new(breed: breed)
  end
end
