class DogsController < ApplicationController
  def index
    breed = params[:breed]
    @breeder = DogBreeder.new(breed: breed)
  end

  def search
    breed = params[:breed]
    breeder = DogBreeder.new(breed: breed)
    render json: {
      isError: breeder.error?,
      isSuccess: breeder.success?,
      images: breeder.images,
      errorMessage: breeder.error_message
    }
  end
end
