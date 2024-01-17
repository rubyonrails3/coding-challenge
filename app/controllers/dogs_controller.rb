class DogsController < ApplicationController
  def index
    breed = params[:breed]
    @breeder = DogBreeder.new(breed: breed)
  end

  def search
    breed = params[:breed]
    breeder = DogBreeder.new(breed: breed)
    render json: breeder
  end
end
